"use client";

import { useRef, useCallback } from "react";
import {
    HeroSection,
    VideoSection,
    OpportunityVideoSection,
    WhyUsSection,
    HowItWorksSection,
    InvestmentHighlights,
    FAQSection,
    CalendarSection,
    TrustSection,
    FinalCTA,
} from "./components";

// Configuración - Actualiza estos valores según necesites
const CONFIG = {
    // ID del video de YouTube (la parte después de v= en la URL)
    youtubeVideoId: "SuNFSAblD3w", // Reemplazar con el ID real del video
    // ID del video de la oportunidad activa
    opportunityVideoId: "HiXiOYa2rX0", // Reemplazar con el ID real del video de la oportunidad
    // URL del calendario de Google (obtener desde Google Calendar > Configuración > Integrar calendario)
    googleCalendarUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1xj-D30lhnWBpSWBrxczIVp8LOUGk8RRQASqn_K_qrUfjHaDyaX-YU8tQbZbsINeltrs-6BlBl", // Reemplazar con la URL real
};

export default function CoinviertePage() {
    const calendarRef = useRef<HTMLDivElement>(null);

    const scrollToCalendar = useCallback(() => {
        calendarRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, []);

    return (
        <main className="min-h-screen">
            {/* Hero Section con CTA principal */}
            <HeroSection onCtaClick={scrollToCalendar} />

            {/* Sección de confianza - Stats rápidos */}
            <TrustSection />            {/* Video explicativo */}
            <VideoSection videoId={CONFIG.youtubeVideoId} />

            {/* Video de la oportunidad activa */}
            <OpportunityVideoSection videoId={CONFIG.opportunityVideoId} />

            {/* Beneficios de coinvertir */}
            <WhyUsSection onCtaClick={scrollToCalendar} />

            {/* Cómo funciona - Proceso paso a paso */}
            <HowItWorksSection />

            {/* Highlights de inversión */}
            <InvestmentHighlights onCtaClick={scrollToCalendar} />

            {/* Preguntas frecuentes */}
            <FAQSection />

            {/* Calendario de citas - Objetivo principal del embudo */}
            <CalendarSection
                ref={calendarRef}
                calendarUrl={CONFIG.googleCalendarUrl}
            />

            {/* CTA Final */}
            <FinalCTA onCtaClick={scrollToCalendar} />
        </main>
    );
}
