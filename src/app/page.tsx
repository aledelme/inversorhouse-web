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

export default function Home() {
	return (
		<div className="flex flex-col items-center w-full min-h-screen bg-background">
			{/* HERO */}
			<section className="w-full max-w-5xl flex flex-col items-center text-center gap-6 mt-8 px-4">
				<h1 className="text-4xl sm:text-5xl font-bold text-primary mb-2">
					Invierte en oportunidades inmobiliarias{" "}
					<span className="text-secondary">analizadas</span>
				</h1>
				<p className="text-lg text-foreground/80 max-w-2xl">
					Accede a inmuebles seleccionados por expertos, aporta desde pequeños
					tickets y participa en operaciones de compra, reforma y venta.
				</p>
				<a
					href="/login"
					className="mt-4 bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-secondary transition"
				>
					Accede al portal de inversores
				</a>
			</section>

			{/* OPORTUNIDADES */}
			<section id="oportunidades" className="w-full max-w-5xl mt-16 px-4">
				<h2 className="text-2xl font-bold text-foreground mb-6 text-center">
					Oportunidades abiertas
				</h2>
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{oportunidades.map((op) => (
						<div
							key={op.id}
							className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
						>
							<div className="relative w-full h-48">
								<Image
									src={op.imagen}
									alt={op.titulo}
									fill
									className="object-cover"
									sizes="(max-width: 640px) 100vw, 33vw"
									style={{ borderBottom: "1px solid #eee" }}
								/>
							</div>
							<div className="p-4 flex flex-col flex-1">
								<h3 className="font-semibold text-lg mb-1">{op.titulo}</h3>
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

			{/* CONÓCENOS */}
			<section id="conocenos" className="w-full max-w-4xl mt-20 px-4 mb-16">
				<h2 className="text-2xl font-bold text-foreground mb-4 text-center">
					Conócenos
				</h2>
				<div className="bg-white rounded-xl shadow p-6 flex flex-col sm:flex-row gap-6 items-center">
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
		</div>
	);
}
