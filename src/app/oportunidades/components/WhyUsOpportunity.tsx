import { ClockIcon } from "@/components/icons/Clock";

export default function WhyUsOpportunity() {
    return (<section className="w-full max-w-5xl mt-20 px-4">
        <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            ¿Por qué invertir en esta operación?
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-4 bg-white rounded-xl shadow p-6 border border-surface-border">
                <span className="flex-shrink-0 text-secondary text-3xl">
                    {/* Icono de filtro */}
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M3 5h18M6 12h12M10 19h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </span>
                <div>
                    <h3 className="font-semibold text-lg mb-1 text-primary">Oportunidad exclusiva y filtrada</h3>
                    <p className="text-foreground/80 text-base">
                        Oportunidad fuera de mercado, previamente analizada por expertos.
                    </p>
                </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl shadow p-6 border border-surface-border">
                <span className="flex-shrink-0 text-secondary text-3xl">
                    {/* Icono de gráfico */}
                    <ClockIcon />
                </span>
                <div>
                    <h3 className="font-semibold text-lg mb-1 text-primary">Por tiempo limitado</h3>
                    <p className="text-foreground/80 text-base">
                        Si no se cierra esta operación a tiempo, pueden cambiar las condiciones, o  pasará al mercado abierto, donde ya no será tan rentable.
                        Además, hay otros grupos de inversores analizándola, por lo que la oportunidad podría desaparecer rápidamente.
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
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M4 17v-2a2 2 0 0 1 2-2h2v4H4zm6-8h4v12h-4V9zm6 4h2a2 2 0 0 1 2 2v6h-4v-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
                </span>
                <div>
                    <h3 className="font-semibold text-lg mb-1 text-primary">Mercado cambiante</h3>
                    <p className="text-foreground/80 text-base">
                        ¡Estas operaciones no durarán para siempre!
                        El mercado inmobiliario español, gracias a sus particularidades actuales, ofrece estas oportunidades únicas, pero no estarán disponibles para siempre.
                    </p>
                </div>
            </div>
        </div>
    </section>)
}