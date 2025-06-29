"use client";
import Image from "next/image";

const oportunidades = [
    {
        id: 1,
        titulo: "Piso reformado en Chamberí",
        ubicacion: "Madrid, Chamberí",
        rentabilidad: "12% estimada",
        descripcion:
            "Oportunidad para comprar, reformar y vender en una de las zonas más demandadas de Madrid.",
        imagen: "/ejemplo1.webp",
    },
    {
        id: 2,
        titulo: "Apartamento turístico en El Born",
        ubicacion: "Barcelona, El Born",
        rentabilidad: "10% estimada",
        descripcion:
            "Ideal para alquiler turístico tras reforma. Zona céntrica y alta demanda.",
        imagen: "/ejemplo2.webp",
    },
    {
        id: 3,
        titulo: "Chalet para flipping en Málaga",
        ubicacion: "Málaga, Este",
        rentabilidad: "15% estimada",
        descripcion: "Gran potencial de revalorización tras reforma integral.",
        imagen: "/ejemplo3.webp",
    },
];

export default function OportunidadesSection() {
    return (
        <section id="oportunidades" className="w-full max-w-5xl mt-16 px-4">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Oportunidades de inversión destacadas
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {oportunidades.map((op) => (
                    <div
                        key={op.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col border border-surface-border"
                    >
                        <div className="relative w-full h-48">
                            <Image
                                src={op.imagen}
                                alt={op.titulo}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, 33vw"
                                style={{ borderBottom: "1px solid #e5e7eb" }}
                            />
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                            <h3 className="font-semibold text-lg mb-1 text-primary">
                                {op.titulo}
                            </h3>
                            <span className="text-sm text-secondary mb-2">
                                {op.ubicacion}
                            </span>
                            <p className="text-sm text-foreground/70 flex-1">
                                {op.descripcion}
                            </p>
                            <div className="mt-3 flex items-center justify-between">
                                <span className="font-bold text-primary">
                                    {op.rentabilidad}
                                </span>
                                <button className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-primary transition">
                                    Ver detalle
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}