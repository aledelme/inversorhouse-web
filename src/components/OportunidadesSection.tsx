
import HouseCard from "@/app/oportunidades/components/HouseCard";
import { IOpportunity } from "@/lib/models/Opportunity";

export default async function OportunidadesSection({ oportunidades }: { oportunidades: IOpportunity[] }) {

    return (
        <section id="oportunidades" className="w-full max-w-7xl mt-16 px-4">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Oportunidades de inversión destacadas
            </h2>
            <div className="grid gap-8 lg:grid-cols-3 md:max-lg:px-16">
                {oportunidades.filter(op => op.starred).map(op => (
                    <div className="w-full max-w-full overflow-x-hidden" key={op._id}>
                        <HouseCard op={op} />
                    </div>
                ))}
            </div>
        </section>
    );
}