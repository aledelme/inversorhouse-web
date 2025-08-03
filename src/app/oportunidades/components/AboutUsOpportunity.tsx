import Image from "next/image";
export default function AboutUsOpportunity() {
    return (
        <section id="conocenos" className="w-full max-w-7xl mt-20 px-4 mb-16">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col sm:flex-row gap-6 items-center border border-surface-border">
                <Image
                    src="/logo.png"
                    alt="Equipo InversorHouse"
                    width={96}
                    height={96}
                    className="rounded-full border border-secondary"
                />
                <div>
                    <p className="text-foreground/80 mb-2 text-lg">
                        Creemos que con esta oportunidad puedes estar realmente más cerca de alcanzar la libertad financiera con la que todos soñamos.
                    </p>
                    <p className="text-foreground/70 text-sm">
                        Nuestra misión es democratizar el acceso a inversiones inmobiliarias de calidad, permitiendo que cualquier persona pueda participar en operaciones de alto potencial.
                        Queremos ofrecerte la posibilidad de acercarte a la vida y los sueños que deseas viviendo de los inmuebles.
                    </p>
                </div>
            </div>
        </section>
    );
}