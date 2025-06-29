'use client';
import { useMemo, useState } from "react";

import HouseCard from "./components/HouseCard";
import FilterSelect from "./components/FilterSelect";
import { IOpportunity } from "@/services/models/Opportunity";

function getUnique<T>(arr: T[], key: keyof T): string[] {
    return Array.from(new Set(arr.map(item => String(item[key]))));
}

export default function OpportunitiesView({ opportunities }: { opportunities: IOpportunity[] }) {
    const [province, setProvince] = useState("");
    const [city, setCity] = useState("");
    const [squatted, setSquatted] = useState("");
    const [filtersOpen, setFiltersOpen] = useState(false);

    const provinces = useMemo(() => getUnique(opportunities, "province"), [opportunities]);
    const cities = useMemo(() => {
        if (!province) return getUnique(opportunities, "city");
        return getUnique(opportunities.filter(o => o.province === province), "city");
    }, [opportunities, province]);

    const filtered = useMemo(() => {
        return opportunities.filter(o =>
            (!province || o.province === province) &&
            (!city || o.city === city) &&
            (!squatted || String(o.squatted) === squatted)
        );
    }, [opportunities, province, city, squatted]);

    // Cierra el panel si se toca fuera (solo mobile)
    const handleOverlayClick = () => setFiltersOpen(false);

    return (
        <div className="flex min-h-screen relative">
            {/* Overlay para cerrar filtros en mobile */}
            {filtersOpen && (
                <div
                    className="fixed inset-0 bg-black/25 z-[1100] block md:hidden"
                    onClick={handleOverlayClick}
                />
            )}
            {/* Botón para abrir filtros en mobile y sticky en ambos modos */}
            <button
                onClick={() => setFiltersOpen(true)}
                className="fixed md:sticky md:top-[72px] top-[70px] left-4 z-[1200] bg-white border border-gray-200 rounded-md px-5 py-2 shadow font-semibold text-base cursor-pointer block md:hidden"
                type="button"
            >
                ☰ Filtros
            </button>
            {/* Panel de filtros */}
            <aside
                className={`bg-[#fafbfc] border-r border-gray-200 p-6 box-border transition-transform duration-300 z-[1201]
                    w-[85vw] max-w-[400px] fixed top-0 left-0 h-screen
                    md:w-[350px] md:max-w-none md:sticky md:top-[56px] md:h-[calc(100vh-56px)] md:translate-x-0
                    ${filtersOpen ? "translate-x-0" : "-translate-x-full"}
                    md:block`}
                onClick={e => e.stopPropagation()}
                tabIndex={-1}
            >
                {/* Botón cerrar solo en mobile y sticky */}
                <button
                    onClick={e => {
                        e.stopPropagation();
                        setFiltersOpen(false);
                    }}
                    className="absolute top-4 right-4 bg-white border border-gray-200 rounded-full w-9 h-9 text-2xl cursor-pointer shadow flex items-center justify-center block md:hidden"
                    aria-label="Cerrar filtros"
                    type="button"
                >
                    ×
                </button>
                <FilterSelect
                    label="Provincia"
                    value={province}
                    onChange={setProvince}
                    options={provinces}
                />
                <FilterSelect
                    label="Ciudad"
                    value={city}
                    onChange={setCity}
                    options={cities}
                />
                <FilterSelect
                    label="Ocupación"
                    value={squatted}
                    onChange={setSquatted}
                    options={["Ocupado", "Libre"]}
                    boolOptions={true}
                />
                <div className="mt-8 text-[#555] font-medium">
                    Resultados: {filtered.length}
                </div>
            </aside>
            {/* Grilla de resultados */}
            <main
                className={`
                    flex-1 p-4 sm:p-6 transition-all duration-300
                    w-full
                    overflow-x-hidden
                `}
            >
                <div
                    className="
                        grid gap-6
                        grid-cols-1
                        sm:grid-cols-1
                        md:grid-cols-[repeat(auto-fit,minmax(290px,1fr))]
                        w-full
                        max-w-full
                        overflow-x-hidden
                    "
                >
                    {filtered.map(op => (
                        <div className="w-full max-w-full overflow-x-hidden" key={op._id}>
                            <HouseCard op={op} />
                        </div>
                    ))}
                    {filtered.length === 0 && (
                        <div className="col-span-full text-center text-gray-400">
                            No hay oportunidades que coincidan con el filtro.
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}