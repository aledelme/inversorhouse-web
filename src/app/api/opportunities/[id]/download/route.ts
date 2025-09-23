import { IOpportunity } from "@/lib/models/Opportunity";
import { getOpportunityByRefCode } from "@/lib/opportunities";
import { capitalizeWords } from "@/utils/functions";
import { Workbook } from "exceljs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const op: IOpportunity = await getOpportunityByRefCode(id);
    if (!op) {
        return NextResponse.json({ error: "Opportunity not found" }, { status: 404 });
    }
    const workbook = new Workbook();
    const filePath = path.join(process.cwd(), "assets", "Plantilla-Operacion.xlsx");
    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet('Hoja1');

    worksheet.getCell('B6').value = op.ref_code;
    worksheet.getCell('G6').value = capitalizeWords(`${op.state}, ${op.province}, ${op.city}, ${op.address}, ${op.zip_code}`);
    worksheet.getCell('B8').value = op.squatted ? 'Sí' : 'No';
    worksheet.getCell('F12').value = { formula: `IF(B8="Sí",10000,0)`, result: op.squatted ? 10000 : 0 };
    worksheet.getCell('B12').value = op.ask_price;
    worksheet.getCell('C24').value = op.min_idealista;
    worksheet.getCell('D24').value = (op.max_idealista + op.min_idealista) / 2;
    worksheet.getCell('E24').value = op.max_idealista;

    //Campos calculados
    // DATOS DE COMPRA
    const ITP = op.ask_price * Number(worksheet.getCell('C12').value)
    worksheet.getCell('D12').value = { formula: `B12*C12`, result: ITP }
    const GASTOS_GESTION = op.ask_price * 0.06 * 1.21
    worksheet.getCell('E12').value = { formula: `B12*0.06*1.21`, result: GASTOS_GESTION }
    const GASTO_TOTAL_COMPRA = op.ask_price + ITP + GASTOS_GESTION + (op.squatted ? 10000 : 0) + Number(worksheet.getCell('G12').value)
    worksheet.getCell('H12').value = { formula: `B12+D12+E12+F12+G12`, result: GASTO_TOTAL_COMPRA }

    // DATOS DE VENTA
    const B20 = Number(worksheet.getCell('B20').value);
    const C24 = Number(worksheet.getCell('C24').value);
    const D24 = Number(worksheet.getCell('D24').value);
    const E24 = Number(worksheet.getCell('E24').value);
    worksheet.getCell('C25').value = { formula: `C24*$B$20*1.21`, result: C24 * B20 * 1.21 };
    worksheet.getCell('D25').value = { formula: `D24*$B$20*1.21`, result: D24 * B20 * 1.21 };
    worksheet.getCell('E25').value = { formula: `E24*$B$20*1.21`, result: E24 * B20 * 1.21 };

    const H12 = GASTO_TOTAL_COMPRA;
    const H16 = 12000; // Gastos de Operación
    worksheet.getCell('H20').value = { formula: `H12+H16`, result: H12 + H16 };

    const C26 = (C24 * B20) + H12 + H16;
    const D26 = (D24 * B20) + H12 + H16;
    const E26 = (E24 * B20) + H12 + H16;
    worksheet.getCell('C26').value = { formula: `C25+$H$12+$H$16`, result: C26 };
    worksheet.getCell('D26').value = { formula: `D25+$H$12+$H$16`, result: D26 };
    worksheet.getCell('E26').value = { formula: `E25+$H$12+$H$16`, result: E26 };

    worksheet.getCell('C27').value = { formula: `C24-C26`, result: C24 - C26 };
    worksheet.getCell('D27').value = { formula: `D24-D26`, result: D24 - D26 };
    worksheet.getCell('E27').value = { formula: `E24-E26`, result: E24 - E26 };

    const C27 = C24 - C26;
    const D27 = D24 - D26;
    const E27 = E24 - E26;
    worksheet.getCell('C28').value = { formula: `C27/C26`, result: C27 / C26 };
    worksheet.getCell('D28').value = { formula: `D27/D26`, result: D27 / D26 };
    worksheet.getCell('E28').value = { formula: `E27/E26`, result: E27 / E26 };

    const C20 = Number(worksheet.getCell('C20').value);
    worksheet.getCell('C29').value = { formula: `(C24-C26)*$C$20`, result: (C24 - C26) * C20 };
    worksheet.getCell('D29').value = { formula: `(D24-C26)*$C$20`, result: (D24 - C26) * C20 };
    worksheet.getCell('E29').value = { formula: `(E24-C26)*$C$20`, result: (E24 - C26) * C20 };

    const D20 = Number(worksheet.getCell('D20').value);
    worksheet.getCell('C30').value = { formula: `$D$20/C26`, result: D20 / C26 };
    worksheet.getCell('D30').value = { formula: `$D$20/D26`, result: D20 / D26 };
    worksheet.getCell('E30').value = { formula: `$D$20/E26`, result: D20 / E26 };

    worksheet.getCell('C31').value = { formula: `(C27-C29)*C30`, result: (C27 - ((C24 - C26) * C20)) * (D20 / C26) };
    worksheet.getCell('D31').value = { formula: `(D27-D29)*D30`, result: (D27 - ((D24 - C26) * C20)) * (D20 / D26) };
    worksheet.getCell('E31').value = { formula: `(E27-E29)*E30`, result: (E27 - ((E24 - C26) * C20)) * (D20 / E26) };

    const buffer = await workbook.xlsx.writeBuffer();
    return new NextResponse(buffer, {
        headers: {
            "Content-Type":
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "Content-Disposition": 'attachment; filename="datos.xlsx"',
        },
    });
}