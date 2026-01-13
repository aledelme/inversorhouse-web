"use client";

const ShieldIcon = () => (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const BuildingIcon = () => (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

const UsersIcon = () => (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const trustItems = [
    {
        icon: <ShieldIcon />,
        title: "Garantías Reales",
        description: "Todas las operaciones respaldadas por activos inmobiliarios tangibles",
    },
    {
        icon: <BuildingIcon />,
        title: "Promotores Verificados",
        description: "Solo trabajamos con promotores con track record demostrable",
    },
    {
        icon: <UsersIcon />,
        title: "Comunidad Exclusiva",
        description: "Forma parte de una red de inversores profesionales y patrimoniales",
    },
];

export default function TrustSection() {
    return (
        <section className="py-16 bg-gradient-to-r from-[#fafbfc] to-white border-y border-[#e2e8f0]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {trustItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="text-[#0f3460] mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-[#0f3460] mb-2">
                                {item.title}
                            </h3>
                            <p className="text-[#64748b] text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
