"use client";

// Icon components for better maintainability
const FilterIcon = () => (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <path d="M3 5h18M6 12h12M10 19h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const ChartIcon = () => (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <path d="M4 17v-2a2 2 0 0 1 2-2h2v4H4zm6-8h4v12h-4V9zm6 4h2a2 2 0 0 1 2 2v6h-4v-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
);

const FlexibilityIcon = () => (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const TrustIcon = () => (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

interface FeatureItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
    return (
        <div className="group bg-white rounded-xl p-8 shadow-professional border border-surface-border hover:shadow-professional-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-5">
                <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-xl text-secondary group-hover:bg-secondary/20 transition-colors duration-300">
                    {icon}
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-foreground/80 text-base leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function WhyUsSection() {
    const features = [
        {
            icon: <FilterIcon />,
            title: "Oportunidades exclusivas y filtradas",
            description: "Accede a inversiones fuera del mercado, previamente analizadas por nuestro equipo de expertos en real estate."
        },
        {
            icon: <ChartIcon />,
            title: "Máxima rentabilidad",
            description: "Seleccionamos únicamente proyectos con el mayor potencial de retorno y menor riesgo para tu inversión."
        },
        {
            icon: <FlexibilityIcon />,
            title: "Flexibilidad de inversión",
            description: "Oferta por el inmueble completo o coinvierte desde 5.000€, con gestión integral de toda la operación."
        },
        {
            icon: <TrustIcon />,
            title: "Expertos de confianza",
            description: "Solo trabajamos con gestores profesionales con probada experiencia en operaciones CRV (Compra-Reforma-Venta)."
        }
    ];

    return (
        <section className="w-full bg-surface-secondary py-20">
            <div className="container-base">
                <div className="text-center mb-16">
                    <h2 className="heading-2 text-primary mb-4">
                        ¿Por qué elegir Inversor House?
                    </h2>
                    <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                        Somos la plataforma líder en inversión inmobiliaria con más de 5 años de experiencia
                        y un track record comprobado en el mercado español.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <FeatureItem
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>

                {/* Trust indicators */}
                {/* <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-6 sm:px-8 py-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-surface-border max-w-4xl">
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-primary">+50M€</div>
                            <div className="text-sm text-muted">Inversión gestionada</div>
                        </div>
                        <div className="hidden sm:block w-px h-12 bg-surface-border"></div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-primary">+500</div>
                            <div className="text-sm text-muted">Inversores activos</div>
                        </div>
                        <div className="hidden sm:block w-px h-12 bg-surface-border"></div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-primary">18%</div>
                            <div className="text-sm text-muted">Rentabilidad media</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
