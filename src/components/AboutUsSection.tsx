"use client";
import Image from "next/image";

export default function AboutUsSection() {
    return (
        <section id="conocenos" className="w-full max-w-4xl mt-20 px-4 mb-16">
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">
                Conócenos
            </h2>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col sm:flex-row gap-6 items-center border border-surface-border">
                <Image
                    src="/logo.png"
                    alt="Equipo InversorHouse"
                    width={96}
                    height={96}
                    className="rounded-full border border-secondary"
                />
                <div>
                    <p className="text-foreground/80 text-base mb-2">
                        En{" "}
                        <span className="font-semibold text-primary">InversorHouse</span> somos
                        un equipo de expertos en inversión inmobiliaria que selecciona y
                        analiza oportunidades para que puedas invertir de forma segura y
                        diversificada.
                    </p>
                    <p className="text-foreground/70 text-sm">
                        Nuestra misión es democratizar el acceso a inversiones inmobiliarias
                        de calidad, permitiendo a cualquier persona participar en operaciones
                        de alto potencial.
                    </p>
                </div>
            </div>
        </section>
    );
}
