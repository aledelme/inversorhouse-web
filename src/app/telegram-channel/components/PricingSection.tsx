import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import PlanCard from "./PlanCard";

type PlanType = 'monthly' | 'quarterly';

interface PricingSectionProps {
    selectedPlan: PlanType;
    onPlanSelect: (plan: PlanType) => void;
    onSubscribe: (plan: PlanType) => void;
}

export default function PricingSection({ selectedPlan, onPlanSelect, onSubscribe }: PricingSectionProps) {
    return (
        <section id="planes" className="py-6 px-6 bg-gradient-to-r from-primary/5 to-secondary/5 scroll-mt-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Elige tu Plan de Suscripción
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        Accede a oportunidades inmobiliarias exclusivas en nuestro canal privado de Telegram
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                    <PlanCard
                        planType="monthly"
                        selectedPlan={selectedPlan}
                        onSelect={onPlanSelect}
                    />
                    <PlanCard
                        planType="quarterly"
                        selectedPlan={selectedPlan}
                        onSelect={onPlanSelect}
                    />
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <SignedIn>
                        <button
                            onClick={() => onSubscribe(selectedPlan)}
                            className="btn btn-primary text-lg px-12 py-4 group"
                        >
                            {selectedPlan === 'monthly' ? 'Suscribirse por 2,50€/mes' : 'Suscribirse por 6,00€/trimestre'}
                            <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                        <p className="mt-4 text-sm text-muted">
                            Al continuar, serás redirigido al proceso de pago seguro
                        </p>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton
                            mode="modal"
                            forceRedirectUrl={`/telegram-channel?pendingPlan=${selectedPlan}`}
                            signUpForceRedirectUrl={`/telegram-channel?pendingPlan=${selectedPlan}`}
                        >
                            <button className="btn btn-primary text-lg px-12 py-4 group">
                                {selectedPlan === 'monthly' ? 'Suscribirse por 2,50€/mes' : 'Suscribirse por 6,00€/trimestre'}
                                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </SignInButton>
                        <p className="mt-4 text-sm text-muted">
                            Inicia sesión o regístrate para continuar con la suscripción
                        </p>
                    </SignedOut>
                </div>

                {/* Trust indicators */}
                <div className="mt-12 text-center">
                    <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span>Pago 100% seguro con Stripe</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Cancela cuando quieras</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span>Acceso inmediato</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
