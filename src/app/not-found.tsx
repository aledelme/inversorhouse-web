import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <h1 className="text-3xl font-bold mb-4 text-primary">404 - Página no encontrada</h1>
            <p className="text-lg text-foreground/80 mb-8">
                Lo sentimos, la página que buscas no existe.
            </p>
            <Link href="/"
                className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-secondary transition"
            >
                Volver al inicio
            </Link>
        </div>
    );
}