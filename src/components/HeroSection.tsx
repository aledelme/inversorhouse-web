"use client";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[420px] flex items-center justify-center bg-white shadow-sm">
            <Image
                src="/hero-inmobiliario.webp"
                alt="Inversor House Hero"
                fill
                className="object-cover object-center opacity-80"
                priority
                sizes="100vw"
                style={{ zIndex: 0 }}
            />
            <div className="relative z-10 flex flex-col items-center text-center px-4 py-16 max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 drop-shadow-lg">
                    Invierte en oportunidades inmobiliarias fuera de mercado, analizadas y gestionadas por un experto
                </h1>
                {/* <a
                    href="/login"
                    className="mt-2 bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-secondary transition"
                >
                    Accede al portal de inversores
                </a> */}
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-background/90 pointer-events-none" />
        </section>
    );
}
