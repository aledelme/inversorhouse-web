const steps = [
    {
        number: 1,
        title: "Elige tu Plan",
        description: "Selecciona el plan que mejor se adapte a ti: mensual o trimestral con descuento."
    },
    {
        number: 2,
        title: "Completa el Pago Seguro",
        description: "Realiza el pago de forma segura con Stripe. Aceptamos tarjetas de crédito y débito."
    },
    {
        number: 3,
        title: "Recibe tu Enlace Único",
        description: "Recibirás un correo electrónico con un enlace de invitación personal al canal."
    },
    {
        number: 4,
        title: "Únete y Comienza a Invertir",
        description: "Usa el enlace para unirte al canal y empieza a recibir oportunidades exclusivas de inversión inmobiliaria."
    }
];

export default function HowItWorksSection() {
    return (
        <section className="py-16 px-6">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                    ¿Cómo Funciona?
                </h2>

                <div className="space-y-8 px-10">
                    {steps.map((step) => (
                        <div key={step.number} className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                {step.number}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-muted">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
