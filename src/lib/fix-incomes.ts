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
        raised_capital: 500000,
        ticket: 50000,
        ticket_explanation: "Se aceptan tickets menores que podrán participar mediante una comunidad de bienes",
        duration: 12,
        status: "COMPLETED",
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
        _id: "lanzarote",
        address: "Calle Calma Chicha 8",
        province: "Las Palmas de Gran Canaria",
        city: "Lanzarote",
        ref_code: "9302307FT2290S0001KM",
        procedure_type: "CRV",
        property_type: "Chalet",
        state: "Canarias",
        starred: true,
        zip_code: "35560",
        required_capital: 395200,
        raised_capital: 395200,
        ticket: 25000,
        duration: 9,
        status: "COMPLETED",
        yield: "15% sobre capital",
        summary: `El activo consiste en un chalet unifamiliar de 208 m² construidos sobre una parcela de 248 m², con cuatro habitaciones, tres baños, terraza y piscina. Actualmente se encuentra ocupado, pero ya se ha alcanzado un acuerdo económico con el ocupante y existe una fecha confirmada para su desocupación. Una vez liberada la vivienda, se llevará a cabo una reforma integral con el objetivo de convertirla en un chalet de lujo con vistas privilegiadas al mar y a los volcanes, entregándose totalmente amueblado y listo para entrar a vivir. La obra cuenta con un presupuesto cerrado y firmado con una empresa local, con inicio previsto para el mes de agosto.

En el último año, el mercado inmobiliario de Lanzarote ha experimentado un incremento notable en el valor de las viviendas unifamiliares, con una subida media del 23% entre enero de 2024 y enero de 2025. La Santa, ubicación del inmueble, es una de las zonas más codiciadas de la isla debido a sus vistas únicas, su cercanía al Parque Nacional de Timanfaya y a la playa de Famara. La oferta de vivienda unifamiliar en esta zona es prácticamente inexistente, lo que incrementa el atractivo del producto.

El perfil de comprador habitual en este segmento está compuesto por extranjeros, principalmente ingleses, franceses, alemanes y noruegos, que buscan segundas residencias o propiedades destinadas al alquiler vacacional. Este público valora especialmente que las viviendas estén totalmente terminadas y listas para habitar, dado que no residen en la isla y no pueden gestionar reformas por su cuenta. La combinación de ubicación, escasez de oferta, demanda internacional y un plan de mejora ya definido posiciona esta operación como una oportunidad con alto potencial de revalorización y rentabilidad. `
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
        starred: false,
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