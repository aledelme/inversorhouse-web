
import HighVolumenCard from "./HighVolumenCard";
import { IHighVolumen } from "@/lib/models/HighVolumen";

export default async function HighVolumenSection() {

    const oportunidades: IHighVolumen[] = [
        {
            _id: "1",
            procedure_type: "venta",
            property_type: "vivienda",
            typology: "T2",
            state: "disponible",
            province: "Madrid",
            city: "Cartera REO 1",
            address: "Calle de la Luna, 1",
            zip_code: "28001",
            ref_code: "REF123",
            ask_price: 2128500,
            numberOfAssets: 26,
            min_idealista: 4086000,
            max_idealista: 4970003,
            starred: true,
        },
        {
            _id: "2",
            procedure_type: "venta",
            property_type: "vivienda",
            typology: "T2",
            state: "disponible",
            province: "Madrid",
            city: "Cartera REO 2",
            address: "Calle de la Luna, 1",
            zip_code: "28001",
            ref_code: "REF123",
            ask_price: 2128500,
            numberOfAssets: 26,
            min_idealista: 4086000,
            max_idealista: 4970003,
            starred: true,
        }
    ]


    return (
        <section id="oportunidades" className="w-full max-w-7xl mt-16 px-4">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Operaciones de gran volumen
            </h2>
            <div className="grid gap-8 lg:grid-cols-3 md:max-lg:px-16">
                {oportunidades.filter(op => op.starred).map(op => (
                    <div className="w-full max-w-full overflow-x-hidden" key={op._id}>
                        <HighVolumenCard op={op} />
                    </div>
                ))}
            </div>
        </section>
    );
}