

import FixIncomeCard from "./FixIncomeCard";
import { IFixIncome } from "@/lib/models/FixIncome";

export default async function FixIncomeSection({ oportunidades }: { oportunidades: IFixIncome[] }) {
    return (
        <section id="oportunidades" className="w-full max-w-7xl mt-16 px-4">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Financia oportunidades de bajo riesgo a interés fijo
            </h2>
            <h4 className="text-primary mb-6 text-center">
                Los inversores pueden ayudar a financiar proyectos de promotores inmobiliarios obteniendo rentabilidades fijas de forma pasiva
            </h4>
            <div className="grid gap-8 lg:grid-cols-3 md:max-lg:px-16">
                {oportunidades.filter(op => op.starred).map(op => (
                    <div className="w-full max-w-full overflow-x-hidden" key={op._id}>
                        <FixIncomeCard op={op} />
                    </div>
                ))}
            </div>
        </section>
    );
}