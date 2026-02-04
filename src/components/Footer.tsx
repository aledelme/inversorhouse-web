"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
	platform: [
		{ name: 'Canal de Oportunidades', href: '/telegram-channel' },
		{ name: 'Oportunidades', href: '/oportunidades' },
		{ name: 'Renta Fija', href: '/#fix-incomes' },
		{ name: 'Alto Volumen', href: '/#high-volumens' },
		{ name: 'FAQs', href: '/faqs' },
	],
	legal: [
		{ name: 'Aviso Legal', href: '/aviso-legal' },
		{ name: 'Política de Privacidad', href: '/privacidad' },
		{ name: 'Política de Cookies', href: '/cookies' },
	],
	contact: [
		{ name: 'atencion@inversorhouse.com', href: 'mailto:atencion@inversorhouse.com' },
		// { name: 'Whatsapp', href: 'https://wa.me/1234567890' },
	],
};

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-primary text-white py-5">
			<div className="container-base py-12">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
					{/* Brand Section */}
					<div className="sm:col-span-2 lg:col-span-2">
						<Link href="/" className="inline-flex items-center space-x-2 mb-4">
							<Image
								src="/isotipo.webp"
								alt="InversorHouse"
								width={40}
								height={40}
								className="brightness-0 invert flex-shrink-0"
							/>
							<Image
								src="/logo-title.webp"
								alt="InversorHouse"
								width={180}
								height={32}
								className="brightness-0 invert"
							/>
						</Link>
						<p className="!text-white/80 mb-6 max-w-md leading-relaxed text-sm sm:text-base">
							Democratizamos el acceso a inversiones inmobiliarias de calidad.
							Oportunidades exclusivas analizadas por expertos para maximizar tu rentabilidad.
						</p>
						<div className="flex items-center space-x-4">
							<a
								href="https://instagram.com/inversorhouse"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white/70 hover:text-accent transition-colors p-2 hover:bg-white/10 rounded-lg"
								aria-label="Instagram"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
								</svg>
							</a>
							<a
								href="https://linkedin.com/company/inversor-house"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white/70 hover:text-accent transition-colors p-2 hover:bg-white/10 rounded-lg"
								aria-label="LinkedIn"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
							</a>
						</div>
					</div>

					{/* Platform Links */}
					<div className="sm:col-span-1">
						<h3 className="font-semibold text-lg mb-4 text-accent">Plataforma</h3>
						<ul className="space-y-2">
							{footerLinks.platform.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-white/70 hover:text-white transition-colors text-sm block py-1"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Legal & Contact */}
					<div className="sm:col-span-1">
						<h3 className="font-semibold text-lg mb-4 text-accent">Legal & Contacto</h3>
						<ul className="space-y-2">
							{footerLinks.legal.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-white/70 hover:text-white transition-colors text-sm block py-1"
									>
										{link.name}
									</Link>
								</li>
							))}
							{footerLinks.contact.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										className="text-white/70 hover:text-white transition-colors text-sm block py-1"
										target={link.href.startsWith('http') ? '_blank' : undefined}
										rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-white/20">
					<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
						<p className="!text-white/60 text-sm text-center sm:text-left">
							&copy; {currentYear} InversorHouse. Todos los derechos reservados.
						</p>
						<div className="flex items-center space-x-4">
							<span className="text-white/40 text-xs">
								Hecho con 💙 para inversores
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
