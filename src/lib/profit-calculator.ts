import { IOpportunity } from "./models/Opportunity";

export function profitCalculator(op: IOpportunity) {
    // Datos de compra
    const ITP = 0.1
    const DESOCUPACOIN = op.squatted ? 10000 : 0
    const COMISION_INVERSOR_HOUSE = 0.06
    const OTROS_GASTOS_COMPRA = 500
    // Datos de operación
    const REFORMA = 10000
    const IBI = 300
    const COMUNIDAD = 600
    const SEGURO = 300
    const PLUSVALIA_MUNICIPAL = 300
    const OTROS_GASTOS_OPERACION = 500
    const COMISION_INMOBILIARIA = 0.03

    // Cálculos

    const itp_value = op.ask_price * ITP;
    const comision_inversor_house_value = op.ask_price * COMISION_INVERSOR_HOUSE * 1.21; // + IVA
    const gasto_total_compra = itp_value + DESOCUPACOIN + comision_inversor_house_value + OTROS_GASTOS_COMPRA;
    const gasto_total_operacion = REFORMA + IBI + COMUNIDAD + SEGURO + PLUSVALIA_MUNICIPAL + OTROS_GASTOS_OPERACION;

    const gastoTotal = op.ask_price + gasto_total_compra + gasto_total_operacion
    const minGastoTotal = gastoTotal + (op.min_idealista * COMISION_INMOBILIARIA * 1.21);
    const maxGastoTotal = gastoTotal + (op.max_idealista * COMISION_INMOBILIARIA * 1.21);
    const minProfit = op.min_idealista - minGastoTotal;
    const maxProfit = op.max_idealista - maxGastoTotal;
    const minRentability = (minProfit / minGastoTotal) * 100;
    const maxRentability = (maxProfit / maxGastoTotal) * 100;

    return {
        minProfit,
        maxProfit,
        minRentability,
        maxRentability
    }
}