"use client";

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { useState } from "react";

type PlanType = 'monthly' | 'quarterly';

export default function TelegramChannelPage() {
    const [selectedPlan, setSelectedPlan] = useState<PlanType>('quarterly');

    const handleSubscribe = async (planType: PlanType) => {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = '/api/stripe/checkout';

        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'plan';
        input.value = planType;

        form.appendChild(input);
        document.body.appendChild(form);
        form.submit();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 px-6">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-12">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-6">
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
                        <a
                            href="#planes"
                            className="btn btn-primary text-lg px-8 py-4 group inline-flex items-center"
                        >
                            Ver Planes y Suscribirse
                            <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </a>
                    </div>

                    {/* Telegram Icon Decoration */}
                    <div className="flex justify-center mb-12">
                        <div className="relative">
                            <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full"></div>
                            <svg className="relative w-24 h-24 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.122.098.155.23.171.324.016.094.036.308.02.475z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 px-6 bg-surface">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                        ¿Qué Obtendrás en el Canal?
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Benefit 1 */}
                        <div className="card hover:shadow-professional-lg transition-all">
                            <div className="p-6">
                                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Alertas en Tiempo Real
                                </h3>
                                <p className="text-muted">
                                    Sé el primero en conocer nuevas oportunidades de inversión inmobiliaria con alto potencial.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 2 */}
                        <div className="card hover:shadow-professional-lg transition-all">
                            <div className="p-6">
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Contenido Exclusivo
                                </h3>
                                <p className="text-muted">
                                    Accede a análisis detallados y oportunidades que no se publican en la plataforma principal.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 3 */}
                        <div className="card hover:shadow-professional-lg transition-all">
                            <div className="p-6">
                                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Comunidad de Inversores
                                </h3>
                                <p className="text-muted">
                                    Conecta con otros inversores, comparte experiencias y descubre oportunidades de coinversión.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 4 */}
                        <div className="card hover:shadow-professional-lg transition-all">
                            <div className="p-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Análisis de Mercado
                                </h3>
                                <p className="text-muted">
                                    Recibe actualizaciones sobre tendencias del mercado inmobiliario y consejos de inversión.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 5 */}
                        <div className="card hover:shadow-professional-lg transition-all">
                            <div className="p-6">
                                <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Ventaja Competitiva
                                </h3>
                                <p className="text-muted">
                                    Actúa rápido en propiedades con descuentos significativos antes que otros inversores.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 6 */}
                        <div className="card hover:shadow-professional-lg transition-all">
                            <div className="p-6">
                                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Soporte Directo
                                </h3>
                                <p className="text-muted">
                                    Haz preguntas y recibe asesoramiento directo de nuestro equipo de expertos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                        ¿Cómo Funciona?
                    </h2>

                    <div className="space-y-8">
                        {/* Step 1 */}
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Elige tu Plan
                                </h3>
                                <p className="text-muted">
                                    Selecciona el plan que mejor se adapte a ti: mensual o trimestral con descuento.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Completa el Pago Seguro
                                </h3>
                                <p className="text-muted">
                                    Realiza el pago de forma segura con Stripe. Aceptamos tarjetas de crédito y débito.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Recibe tu Enlace Único
                                </h3>
                                <p className="text-muted">
                                    Recibirás un correo electrónico con un enlace de invitación personal al canal.
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Únete y Comienza a Invertir
                                </h3>
                                <p className="text-muted">
                                    Usa el enlace para unirte al canal y empieza a recibir oportunidades exclusivas de inversión inmobiliaria.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Plans Section */}
            <section id="planes" className="py-20 px-6 bg-gradient-to-r from-primary/5 to-secondary/5 scroll-mt-8">
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
                        {/* Monthly Plan */}
                        <div
                            className={`card p-8 cursor-pointer transition-all duration-300 relative ${selectedPlan === 'monthly'
                                ? 'ring-2 ring-secondary shadow-professional-xl'
                                : 'hover:shadow-professional-lg'
                                }`}
                            onClick={() => setSelectedPlan('monthly')}
                        >
                            {/* Selection indicator */}
                            <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedPlan === 'monthly' ? 'border-secondary bg-secondary' : 'border-gray-300'
                                }`}>
                                {selectedPlan === 'monthly' && (
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </div>

                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-primary mb-2">Plan Mensual</h3>
                                <div className="mb-6">
                                    <span className="text-5xl font-bold text-primary">2,50€</span>
                                    <span className="text-muted">/mes</span>
                                </div>
                                <p className="text-muted mb-6">Flexibilidad total, cancela cuando quieras</p>

                                <div className="space-y-3 text-left">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-gray-700">Alertas en tiempo real</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-gray-700">Análisis de oportunidades</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-gray-700">Contenido exclusivo</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-gray-700">Cancela cuando quieras</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quarterly Plan */}
                        <div
                            className={`card p-8 cursor-pointer transition-all duration-300 relative ${selectedPlan === 'quarterly'
                                ? 'ring-2 ring-accent shadow-professional-xl'
                                : 'hover:shadow-professional-lg'
                                }`}
                            onClick={() => setSelectedPlan('quarterly')}
                        >
                            {/* Best Value Badge */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Mejor Valor
                                </span>
                            </div>

                            {/* Selection indicator */}
                            <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedPlan === 'quarterly' ? 'border-accent bg-accent' : 'border-gray-300'
                                }`}>
                                {selectedPlan === 'quarterly' && (
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </div>

                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-primary mb-2">Plan Trimestral</h3>
                                <div className="mb-2">
                                    <span className="text-5xl font-bold text-primary">6,00€</span>
                                    <span className="text-muted">/trimestre</span>
                                </div>
                                <div className="mb-6">
                                    <span className="text-sm text-accent font-semibold">
                                        Equivalente a 2,00€/mes
                                    </span>
                                    <div className="inline-block ml-2 px-2 py-1 bg-success/10 text-success rounded-full text-xs font-bold">
                                        Ahorra 23%
                                    </div>
                                </div>
                                <p className="text-muted mb-6">Mayor ahorro con compromiso trimestral</p>

                                <div className="space-y-3 text-left">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-gray-700">Alertas en tiempo real</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-gray-700">Análisis de oportunidades</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-gray-700">Contenido exclusivo</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-gray-700 font-semibold">Ahorro del 23%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <SignedIn>
                            <button
                                onClick={() => handleSubscribe(selectedPlan)}
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
                        </SignedIn>                        <SignedOut>
                            <SignInButton
                                mode="modal"
                                forceRedirectUrl="/telegram-channel"
                                signUpForceRedirectUrl="/telegram-channel"
                            >
                                <button className="btn btn-primary text-lg px-12 py-4 group">
                                    Regístrate para Suscribirte
                                    <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </SignInButton>
                            <p className="mt-4 text-sm text-muted">
                                Crea una cuenta gratuita para continuar con la suscripción
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

            {/* Final CTA - Social Proof */}
            <section className="py-16 px-6 bg-gradient-to-r from-primary to-secondary text-white">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        No Te Pierdas las Mejores Oportunidades
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                        Únete hoy a más de 200 inversores que ya están aprovechando nuestras alertas exclusivas.
                    </p>
                    <a
                        href="#planes"
                        className="bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition inline-flex items-center gap-2"
                    >
                        Elegir mi Plan
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    );
}