export default function AvisoLegalPage() {
    return (
        <div className="max-w-2xl mx-auto py-16 px-4">
            <h1 className="text-3xl font-bold text-primary mb-8 text-center">Aviso Legal</h1>
            <div className="space-y-4 text-foreground/80">
                <p>
                    Este sitio web es propiedad de InversorHouse. El acceso al mismo implica la aceptación de las condiciones de uso.
                </p>
                <h2 className="text-xl font-semibold mt-6 mb-2">Titularidad</h2>
                <p>
                    Titular: InversorHouse S.L.<br />
                    Email: info@inversorhouse.com
                </p>
                <h2 className="text-xl font-semibold mt-6 mb-2">Propiedad intelectual</h2>
                <p>
                    Todos los contenidos de este sitio web, incluyendo textos, imágenes y logotipos, son propiedad de InversorHouse o de terceros autorizados.
                </p>
                <h2 className="text-xl font-semibold mt-6 mb-2">Legislación aplicable</h2>
                <p>
                    Este aviso legal se rige por la legislación española.
                </p>
            </div>
        </div>
    );
}
