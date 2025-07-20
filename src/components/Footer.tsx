"use client";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full bg-white border-t border-surface-border py-8 px-4 mt-auto">
			<div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
				<div className="flex items-center gap-4 mb-2 sm:mb-0">
					{/* Instagram */}
					<a
						href="https://instagram.com/inversorhouse"
						target="_blank"
						rel="noopener noreferrer"
						className="text-secondary hover:text-primary transition"
						aria-label="Instagram"
					>
						<svg
							width="28"
							height="28"
							fill="none"
							viewBox="0 0 24 24"
						>
							<rect
								width="18"
								height="18"
								x="3"
								y="3"
								rx="5"
								stroke="currentColor"
								strokeWidth="2"
							/>
							<circle cx="12" cy="12" r="4" stroke="currentColor" />
							<circle cx="17" cy="7" r="1.5" fill="currentColor" />
						</svg>
					</a>
					{/* Placeholder para más redes */}
					<span className="text-surface-border text-xl select-none">•</span>
					<span className="text-surface-border text-xl select-none">•</span>
				</div>
				<ul className="flex flex-wrap gap-4 text-sm text-foreground/70">
					<li>
						<Link
							href="/aviso-legal"
							className="hover:text-primary transition"
						>
							Aviso Legal
						</Link>
					</li>
					<li>
						<Link
							href="/privacidad"
							className="hover:text-primary transition"
						>
							Política de Privacidad
						</Link>
					</li>
					<li>
						<Link
							href="/cookies"
							className="hover:text-primary transition"
						>
							Política de Cookies
						</Link>
					</li>
					{/* <li>
						<a
							href="#"
							className="hover:text-primary transition"
						>
							Contacto
						</a>
					</li> */}
					<li>
						<Link
							href="/faqs"
							className="hover:text-primary transition"
						>
							Preguntas Frecuentes
						</Link>
					</li>
				</ul>
			</div>
			<div className="text-center text-xs text-foreground/40 mt-4">
				&copy; {new Date().getFullYear()} InversorHouse. Todos los derechos
				reservados.
			</div>
		</footer>
	);
}
