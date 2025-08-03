

import FixIncomeCard from "./FixIncomeCard";
import { IFixIncome } from "@/lib/models/FixIncome";

export default async function FixIncomeSection({ oportunidades }: { oportunidades: IFixIncome[] }) {
    return (
        <section id="oportunidades" className="w-full mt-6 p-6 lg:px-16 bg-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Gana intereses fijos con oportunidades de bajo riesgo
            </h2>
            <div className="text-primary text-center mb-6">
                <p>
                    Los inversores pueden ayudar a financiar proyectos de promotores inmobiliarios obteniendo rentabilidades fijas de forma pasiva.
                </p>
                <p>
                    La empresa promotora con experiencia se encarga de realizar toda la operación por el inversor.
                </p>
            </div>
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