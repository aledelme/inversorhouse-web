
import HighVolumenCard from "./HighVolumenCard";
import { IHighVolumen } from "@/lib/models/HighVolumen";

export default async function HighVolumenSection({ oportunidades }: { oportunidades: IHighVolumen[] }) {
    return (
        <section id="oportunidades" className="w-full max-w-7xl mt-16 px-4">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Operaciones de gran volumen
            </h2>
            <p className="text-primary text-center mb-6">
                Las operaciones de gran volumen son transacciones inmobiliarias que implican una cantidad significativa de capital y suelen estar destinadas a inversores de gran envergadura, permitiendo a los inversores diversificar su cartera y adquirir descuentos por volumen.
            </p>
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