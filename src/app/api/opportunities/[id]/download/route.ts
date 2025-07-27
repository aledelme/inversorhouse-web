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
    worksheet.getCell('B12').value = op.ask_price;
    worksheet.getCell('C24').value = op.min_idealista;
    worksheet.getCell('D24').value = (op.max_idealista + op.min_idealista) / 2;
    worksheet.getCell('E24').value = op.max_idealista;

    const buffer = await workbook.xlsx.writeBuffer();
    return new NextResponse(buffer, {
        headers: {
            "Content-Type":
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "Content-Disposition": 'attachment; filename="datos.xlsx"',
        },
    });
}