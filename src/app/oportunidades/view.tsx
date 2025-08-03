'use client';
import { useMemo, useState } from "react";

import HouseCard from "../../components/HouseCard";
import FilterSelect from "./components/FilterSelect";
import { IOpportunity } from "@/lib/models/Opportunity";
import { capitalizeWords } from "@/utils/functions";

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
        <div className="flex min-h-screen relative bg-gray-400">
            {/* Overlay para cerrar filtros en mobile/tablet */}
            {filtersOpen && (
                <div
                    className="fixed inset-0 bg-black/25 z-[1100] block lg:hidden"
                    onClick={handleOverlayClick}
                />
            )}
            {/* Botón para abrir filtros en mobile/tablet y sticky en desktop */}
            <button
                onClick={() => setFiltersOpen(true)}
                className="fixed lg:sticky lg:top-[72px] top-[70px] left-4 z-[1200] bg-white border border-gray-200 rounded-md px-5 py-2 shadow font-semibold text-base cursor-pointer block lg:hidden"
                type="button"
            >
                ☰ Filtros
            </button>
            {/* Panel de filtros */}
            <aside
                className={`bg-[#fafbfc] border-r border-gray-200 p-6 box-border transition-transform duration-300 z-[1201]
                    w-[85vw] max-w-[400px] fixed top-0 left-0 h-screen
                    lg:w-[350px] lg:max-w-none lg:sticky lg:top-[65px] lg:h-[calc(100vh-56px)] lg:translate-x-0
                    ${filtersOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:block`}
                onClick={e => e.stopPropagation()}
                tabIndex={-1}
            >
                {/* Botón cerrar solo en mobile/tablet y sticky */}
                <button
                    onClick={e => {
                        e.stopPropagation();
                        setFiltersOpen(false);
                    }}
                    className="absolute top-4 right-4 bg-white border border-gray-200 rounded-full w-9 h-9 text-2xl cursor-pointer shadow flex items-center justify-center lg:hidden"
                    aria-label="Cerrar filtros"
                    type="button"
                >
                    x
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
                    options={cities.map(c => capitalizeWords(c)).sort()}
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
                        md:grid-cols-2
                        lg::grid-cols-2
                        xl:grid-cols-3
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