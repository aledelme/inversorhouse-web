"use client";

import { forwardRef } from "react";

interface CalendarSectionProps {
    calendarUrl: string;
}

const CalendarIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const ClockIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// const VideoIcon = () => (
//     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//     </svg>
// );

const PhoneIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
    </svg>
);

const CheckIcon = () => (
    <svg className="w-5 h-5 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const CalendarSection = forwardRef<HTMLDivElement, CalendarSectionProps>(
    ({ calendarUrl }, ref) => {
        return (
            <section ref={ref} id="calendar-section" className="py-20 lg:py-28 bg-white scroll-mt-20">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 bg-[#d4a574]/10 text-[#d4a574] text-sm font-semibold rounded-full mb-4">
                            Da el Primer Paso
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f3460] mb-4">
                            Agenda tu <span className="text-[#d4a574]">Cita Gratuita</span>
                        </h2>
                        <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
                            Reserva una videollamada de 30 minutos con nuestro equipo.
                            Resolveremos todas tus dudas y te explicaremos las operaciones
                            activas en detalle.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Left Column - Info */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* What to Expect Card */}
                            <div className="bg-[#fafbfc] rounded-2xl p-6 border border-[#e2e8f0]">
                                <h3 className="text-lg font-bold text-[#0f3460] mb-4 flex items-center gap-2">
                                    <CalendarIcon />
                                    En tu cita hablaremos de:
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckIcon />
                                        <span className="text-[#64748b]">
                                            Las operaciones activas y sus condiciones
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckIcon />
                                        <span className="text-[#64748b]">
                                            Tu perfil inversor y objetivos
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckIcon />
                                        <span className="text-[#64748b]">
                                            El proceso de inversión paso a paso
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckIcon />
                                        <span className="text-[#64748b]">
                                            Todas tus preguntas y dudas
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Meeting Details */}
                            <div className="bg-gradient-to-br from-[#0f3460] to-[#1e4a73] rounded-2xl p-6 text-white">
                                <h3 className="font-bold mb-4">Detalles de la reunión</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <ClockIcon />
                                        <span className="text-white/80">30 minutos</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <PhoneIcon />
                                        <span className="text-white/80">Llamada telefónica</span>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-white/20">
                                    <p className="text-sm text-white/60">
                                        Sin compromiso. Solo queremos conocerte y ayudarte a
                                        tomar la mejor decisión para tu inversión.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Calendar Embed */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-xl overflow-hidden">
                                {/* Calendar Header */}
                                <div className="bg-[#fafbfc] px-6 py-4 border-b border-[#e2e8f0]">
                                    <h3 className="font-semibold text-[#0f3460] flex items-center gap-2">
                                        <CalendarIcon />
                                        Selecciona fecha y hora
                                    </h3>
                                </div>

                                {/* Calendar iframe */}
                                <div className="p-4">
                                    <iframe
                                        src={calendarUrl}
                                        style={{ border: 0 }}
                                        width="100%"
                                        height="600"
                                        title="Calendario de citas InversorHouse"
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
);

CalendarSection.displayName = "CalendarSection";

export default CalendarSection;
