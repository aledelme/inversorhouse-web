export default function FinalCTASection() {
    return (
        <section className="py-16 px-6 bg-surface from-primary to-secondary text-white">
            <div className="container mx-auto max-w-3xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    No Te Pierdas las Mejores Oportunidades
                </h2>
                <p className="text-lg mb-8 opacity-90">
                    Únete hoy a más de 200 inversores que ya están aprovechando nuestras alertas exclusivas.
                </p>
                <a
                    href="#planes"
                    className="btn-primary font-bold px-8 py-4 rounded-lg inline-flex items-center gap-2"
                >
                    Elegir mi Plan
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
