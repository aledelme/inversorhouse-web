
import HouseCard from "@/app/oportunidades/components/HouseCard";

export default async function OportunidadesSection({ oportunidades }) {

    return (
        <section id="oportunidades" className="w-full max-w-6xl mt-16 px-4">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Oportunidades de inversión destacadas
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {oportunidades.slice(0, 3).map(op => (
                    <div className="w-full max-w-full overflow-x-hidden" key={op._id}>
                        <HouseCard op={op} />
                    </div>
                ))}
            </div>
        </section>
    );
}