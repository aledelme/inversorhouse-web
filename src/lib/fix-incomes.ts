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
        yield: "20% anual",
        summary: `La operación consiste en la edificación de un solar de 269 m² del que la empresa promotora ya posee la titularidad. El proyecto contempla la construcción y venta  de seis viviendas de lujo y  distribuidas de la siguiente manera:

Cuatro pisos con 2 habitaciones, 1 baño y 1 aseo.

Dos áticos de lujo con 2 habitaciones, 1 baño, 1 aseo y terrazas con vistas al mar.

Todas las viviendas incluirán plaza de garaje y trastero.

El proyecto se ubica en Mogán, una zona con alta demanda tanto por parte de turistas como de residentes locales. Existe muy poca oferta de viviendas de estas características en la zona, lo que hace que esta promoción resulte muy competitiva en precio y disponibilidad.

Se trata de una operación altamente rentable para el promotor, como se detalla en el archivo Excel adjunto, lo que garantiza capacidad de pago del capital y de los intereses comprometidos con los inversores.

El equipo responsable del proyecto cuenta con amplia experiencia en reformas y construcción, habiendo gestionado con éxito proyectos propios en el pasado.`
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