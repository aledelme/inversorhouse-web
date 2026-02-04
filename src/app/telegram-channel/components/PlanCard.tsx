type PlanType = 'monthly' | 'quarterly';

interface PlanCardProps {
    planType: PlanType;
    selectedPlan: PlanType;
    onSelect: (plan: PlanType) => void;
}

export default function PlanCard({ planType, selectedPlan, onSelect }: PlanCardProps) {
    const isMonthly = planType === 'monthly';
    const isSelected = selectedPlan === planType; const monthlyConfig = {
        title: "Plan Mensual",
        price: "2,50€",
        period: "/mes",
        subtitle: "Flexibilidad total, cancela cuando quieras",
        ringColor: "ring-secondary",
        borderColor: "border-secondary",
        bgColor: "bg-secondary",
        features: [
            "Alertas en tiempo real",
            "Análisis de oportunidades",
            "Contenido exclusivo",
            "Cancela cuando quieras"
        ],
        showBadge: false,
        equivalentPrice: undefined,
        savings: undefined
    };

    const quarterlyConfig = {
        title: "Plan Trimestral",
        price: "6,00€",
        period: "/trimestre",
        subtitle: "Mayor ahorro con compromiso trimestral",
        equivalentPrice: "Equivalente a 2,00€/mes",
        savings: "Ahorra 23%",
        ringColor: "ring-accent",
        borderColor: "border-accent",
        bgColor: "bg-accent",
        features: [
            "Alertas en tiempo real",
            "Análisis de oportunidades",
            "Contenido exclusivo",
            "Ahorro del 23%"
        ],
        showBadge: true
    };

    const config = isMonthly ? monthlyConfig : quarterlyConfig;

    return (
        <div
            className={`card p-8 cursor-pointer transition-all duration-300 relative ${isSelected
                    ? `ring-2 ${config.ringColor} shadow-professional-xl`
                    : 'hover:shadow-professional-lg'
                }`}
            onClick={() => onSelect(planType)}
        >
            {/* Best Value Badge */}
            {config.showBadge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                        Mejor Valor
                    </span>
                </div>
            )}

            {/* Selection indicator */}
            <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? `${config.borderColor} ${config.bgColor}` : 'border-gray-300'
                }`}>
                {isSelected && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </div>

            <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">{config.title}</h3>
                <div className="mb-2">
                    <span className="text-5xl font-bold text-primary">{config.price}</span>
                    <span className="text-muted">{config.period}</span>
                </div>
                {!isMonthly && (
                    <div className="mb-6">
                        <span className="text-sm text-accent font-semibold">
                            {config.equivalentPrice}
                        </span>
                        <div className="inline-block ml-2 px-2 py-1 bg-success/10 text-success rounded-full text-xs font-bold">
                            {config.savings}
                        </div>
                    </div>
                )}
                {isMonthly && <div className="mb-6"></div>}
                <p className="text-muted mb-6">{config.subtitle}</p>

                <div className="space-y-3 text-left">
                    {config.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <svg className={`w-5 h-5 ${index === config.features.length - 1 && !isMonthly ? 'text-accent' : 'text-success'} flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className={`text-sm ${index === config.features.length - 1 && !isMonthly ? 'text-gray-700 font-semibold' : 'text-gray-700'}`}>
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
