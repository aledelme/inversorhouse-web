import HouseCard from "@/components/HouseCard";
import { IOpportunity } from "@/lib/models/Opportunity";
import Link from "next/link";

export default async function OportunidadesSection({ oportunidades }: { oportunidades: IOpportunity[] }) {

    return (
        <section id="oportunidades" className="w-full mt-16 px-4 lg:px-16">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Oportunidades de coinversión destacadas
            </h2>
            <p className="text-primary text-center mb-6">
                Para los que buscan la máxima rentabilidad. Invierte en grupo de forma simple, desde tickets pequeños y flexibles que se adaptan a ti.
                Un gestor especializado se encargará de todo el proceso, de principio a fin, a cambio de una comisión.
                ¿Tu papel como inversor? Solo informarte, aprobar la operación y aportar el capital.
                El resto del proceso lo hacen por ti.
            </p>
            <div className="grid gap-8 lg:grid-cols-3 md:max-lg:px-16">
                {oportunidades.filter(op => op.starred).map(op => (
                    <div className="w-full max-w-full overflow-x-hidden" key={op._id}>
                        <HouseCard op={op} />
                    </div>
                ))}
            </div>
            <Link
                href="/oportunidades"
                className="my-10 w-full max-w-2xl mx-auto flex items-center justify-between bg-primary text-white p-4 sm:p-8 rounded-lg shadow-lg hover:bg-primary-dark transition-colors transform hover:scale-105 duration-1000 font-semibold text-md sm:text-3xl"
            >
                Ver más oportunidades de coinversión
                <span className="inline-block transition-transform group-hover:translate-x-1">
                    {/* Flecha derecha SVG */}
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </Link>
        </section>
    );
}