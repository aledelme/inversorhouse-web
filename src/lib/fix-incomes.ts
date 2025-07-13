'use server'

import { IFixIncome } from "./models/FixIncome";

const oportunidades: IFixIncome[] = [
    {
        _id: "lugo",
        address: "Calle Falsa 123, Madrid",
        state: "Galicia",
        province: "Lugo",
        city: "Lugo",
        ref_code: "INV-001",
        required_capital: 80000,
        raised_capital: 100000,
        ticket: 20000,
        duration: 12,
        procedure_type: "CRV",
        property_type: "Chalet",
        starred: true,
        zip_code: "28001",
        status: "COMPLETED",
        yield: "15% anual"
    },
    {
        _id: "mogan",
        address: "Calle Falsa 456, Madrid",
        province: "Las Palmas de Gran Canaria",
        city: "Mogan",
        ref_code: "INV-001",
        procedure_type: "CCV",
        property_type: "Residencial",
        state: "Canarias",
        starred: true,
        zip_code: "28001",
        required_capital: 500000,
        raised_capital: 50000,
        ticket: 50000,
        ticket_explanation: "Se aceptan tickets menores que podrán participar mediante una comunidad de bienes",
        duration: 12,
        status: "OPEN",
        yield: "20% anual"
    },
    {
        _id: "levante",
        address: "Calle Falsa 789, Madrid",
        province: "Murcia",
        city: "Levante",
        ref_code: "INV-001",
        procedure_type: "CRV",
        property_type: "Residencial",
        state: "Valencia, Alicante",
        starred: true,
        zip_code: "28001",
        required_capital: 500000,
        raised_capital: 0,
        ticket: 20000,
        duration: 18,
        status: "IN_PROGRESS",
        yield: "15% sobre capital"
    }
]

export async function getFixIncomes() {
    // Simulate fetching fix income opportunities
    return oportunidades;
}