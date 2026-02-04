
export default function HeroSection() {
    return (
        <section className="relative overflow-hidden py-6 px-6">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-8">
                        <span className="text-accent font-semibold text-sm">
                            🔐 Canal Privado Exclusivo
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                        Únete a Nuestro Canal de{" "}
                        <span className="text-secondary">Telegram</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-8">
                        Accede a oportunidades inmobiliarias exclusivas antes que nadie.
                        Recibe alertas en tiempo real de nuevas inversiones con alto potencial de rentabilidad.
                    </p>

                    {/* Scroll to plans CTA */}
                    {/* <a
                        href="#planes"
                        className="btn btn-primary text-lg px-8 py-4 group inline-flex items-center"
                    >
                        Ver Planes y Suscribirse
                        <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a> */}
                </div>

                {/* Telegram Icon Decoration */}
                <div className="flex justify-center mt-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full"></div>
                        <svg className="relative w-24 h-24 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.122.098.155.23.171.324.016.094.036.308.02.475z" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
