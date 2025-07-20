import HouseCard from "@/components/HouseCard";
import { IOpportunity } from "@/lib/models/Opportunity";
import Link from "next/link";

export default async function OportunidadesSection({ oportunidades }: { oportunidades: IOpportunity[] }) {

    return (
        <section id="oportunidades" className="w-full max-w-7xl mt-16 px-4">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Oportunidades de coinversión destacadas
            </h2>
            <p className="text-primary text-center mb-6">
                Invierte en grupo de forma simple, desde tickets pequeños y flexibles que se adaptan a ti.
                Un gestor especializado se encargará de todo el proceso, de principio a fin, a cambio de una comisión.
                ¿Tu papel como inversor? Solo informarte, aprobar la operación y aportar el capital.
                El resto del proceso es totalmente pasivo.
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
                className="mt-8 w-full max-w-md mx-auto flex items-center justify-center gap-2 bg-primary text-white py-3 px-6 rounded-lg shadow-lg hover:bg-primary-dark transition-colors transform hover:scale-105 duration-1000 font-semibold text-lg"
            >
                Ver todas las oportunidades
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