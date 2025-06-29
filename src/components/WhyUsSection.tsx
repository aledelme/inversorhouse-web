"use client";
export default function WhyUsSection() {
    return (
        <section className="w-full max-w-5xl mt-20 px-4">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">
                ¿Por qué elegir Inversor House?
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4 bg-white rounded-xl shadow p-6 border border-surface-border">
                    <span className="flex-shrink-0 text-secondary text-3xl">
                        {/* Icono de filtro */}
                        <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M3 5h18M6 12h12M10 19h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    </span>
                    <div>
                        <h3 className="font-semibold text-lg mb-1 text-primary">Oportunidades exclusivas y filtradas</h3>
                        <p className="text-foreground/80 text-base">
                            Accede a inversiones fuera del mercado, previamente analizadas por expertos.
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-xl shadow p-6 border border-surface-border">
                    <span className="flex-shrink-0 text-secondary text-3xl">
                        {/* Icono de gráfico */}
                        <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M4 17v-2a2 2 0 0 1 2-2h2v4H4zm6-8h4v12h-4V9zm6 4h2a2 2 0 0 1 2 2v6h-4v-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
                    </span>
                    <div>
                        <h3 className="font-semibold text-lg mb-1 text-primary">Máxima rentabilidad</h3>
                        <p className="text-foreground/80 text-base">
                            Buscamos proyectos con el mayor potencial de retorno para tu inversión.
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-xl shadow p-6 border border-surface-border">
                    <span className="flex-shrink-0 text-secondary text-3xl">
                        {/* Icono de flexibilidad */}
                        <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    </span>
                    <div>
                        <h3 className="font-semibold text-lg mb-1 text-primary">Flexibilidad de inversión</h3>
                        <p className="text-foreground/80 text-base">
                            Oferta por el inmueble completo o coinvierte desde 5.000€, con gestión integral de la operación.
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-xl shadow p-6 border border-surface-border">
                    <span className="flex-shrink-0 text-secondary text-3xl">
                        {/* Icono de confianza */}
                        <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    </span>
                    <div>
                        <h3 className="font-semibold text-lg mb-1 text-primary">Expertos de confianza</h3>
                        <p className="text-foreground/80 text-base">
                            Solo trabajamos con gestores profesionales con probada experiencia en operaciones CRV (Compra-Reforma-Venta).
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
