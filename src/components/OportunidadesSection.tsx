import { IOpportunity } from "@/lib/models/Opportunity";
import Link from "next/link";
import HouseCard from "./HouseCard";

interface OportunidadesSectionProps {
    oportunidades: IOpportunity[];
}

export default async function OportunidadesSection({ oportunidades }: OportunidadesSectionProps) {
    // Filter featured opportunities
    const featuredOpportunities = oportunidades.filter(op => op.starred);

    return (
        <section id="oportunidades" className="w-full px-6 lg:px-16">
            {/* Section Header */}
            <header className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    Oportunidades de Coinversión Destacadas
                </h2>
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted mb-4 leading-relaxed">
                        Para los que buscan la <strong>máxima rentabilidad</strong>. Invierte en grupo de forma simple,
                        desde tickets pequeños y flexibles que se adaptan a ti.
                    </p>
                    <p className="text-base text-muted leading-relaxed">
                        Un gestor especializado se encargará de todo el proceso, de principio a fin, a cambio de una comisión.
                        <strong> ¿Tu papel como inversor?</strong> Solo informarte, aprobar la operación y aportar el capital.
                        El resto del proceso lo hacen por ti.
                    </p>
                </div>
            </header>

            {/* Opportunities Grid */}
            {featuredOpportunities.length > 0 ? (
                <>
                    <div className="grid gap-8 lg:grid-cols-3 md:max-lg:px-16">
                        {featuredOpportunities.map((op) => (
                            <HouseCard key={op._id} op={op} />
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center py-12">
                        <Link
                            href="/oportunidades"
                            className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-professional-lg group min-w-[280px] text-lg"
                        >
                            Ver Más Oportunidades de Coinversión
                            <svg
                                className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </>
            ) : (
                <div className="text-center py-12">
                    <div className="bg-surface-secondary rounded-lg p-8 max-w-md mx-auto">
                        <h3 className="text-xl font-semibold text-primary mb-2">
                            Próximas Oportunidades
                        </h3>
                        <p className="text-muted mb-4">
                            Estamos analizando nuevas oportunidades exclusivas para nuestros inversores.
                        </p>
                        <Link
                            href="/faqs"
                            className="inline-flex btn btn-outline"
                        >
                            Saber Más
                        </Link>
                    </div>
                </div>
            )}

            {/* Trust Indicators */}
            <div className="text-center">
                <div className="inline-flex items-center px-6 py-3 bg-success/10 text-success rounded-full text-sm font-semibold">
                    ✅ Todas las propiedades analizadas por expertos inmobiliarios
                </div>
            </div>
        </section>
    );
}