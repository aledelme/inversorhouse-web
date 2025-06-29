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

    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            {/* Filtros panel izquierdo */}
            <aside style={{
                width: 350,
                minWidth: 220,
                background: "#fafbfc",
                borderRight: "1px solid #eee",
                padding: 24,
                position: "sticky",
                top: 56, // Altura del NavBar (en px)
                height: "calc(100vh - 56px)", // Resta la altura del NavBar
                boxSizing: "border-box"
            }}>
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
                <div style={{ marginTop: 32, color: "#555", fontWeight: 500 }}>
                    Resultados: {filtered.length}
                </div>
            </aside>
            {/* Grilla de resultados */}
            <main style={{ flex: 1, padding: 24 }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
                    gap: 24
                }}>
                    {filtered.map(op => (
                        <HouseCard key={op._id} op={op} />
                    ))}
                    {filtered.length === 0 && (
                        <div style={{ gridColumn: "1/-1", textAlign: "center", color: "#888" }}>
                            No hay oportunidades que coincidan con el filtro.
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}