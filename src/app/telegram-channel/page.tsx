"use client";

import { useAuth } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
    HeroSection,
    BenefitsSection,
    HowItWorksSection,
    PricingSection,
    FinalCTASection
} from "./components";

type PlanType = 'monthly' | 'quarterly';

export default function TelegramChannelPage() {
    const [selectedPlan, setSelectedPlan] = useState<PlanType>('quarterly');
    const { isSignedIn, isLoaded } = useAuth();
    const searchParams = useSearchParams();

    // Redirigir automáticamente al checkout si el usuario acaba de iniciar sesión/registrarse
    // y tiene un plan pendiente en la URL
    useEffect(() => {
        if (isLoaded && isSignedIn) {
            const pendingPlan = searchParams.get('pendingPlan') as PlanType | null;
            if (pendingPlan && (pendingPlan === 'monthly' || pendingPlan === 'quarterly')) {
                // Limpiar el parámetro de la URL y redirigir al checkout
                handleSubscribe(pendingPlan);
            }
        }
    }, [isLoaded, isSignedIn, searchParams]);

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
    }; return (
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <HeroSection />
            <PricingSection
                selectedPlan={selectedPlan}
                onPlanSelect={setSelectedPlan}
                onSubscribe={handleSubscribe}
            />
            <BenefitsSection />
            <HowItWorksSection />
            <FinalCTASection />
        </div>
    );
}