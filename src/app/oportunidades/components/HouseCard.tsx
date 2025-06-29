'use client'

import { IOpportunity } from "@/services/models/Opportunity"

export default function HouseCard({ op }: { op: IOpportunity }) {
    return (
        <a
            key={op._id}
            // href={`https://google.com`}
            rel="noopener noreferrer"
            style={{
                display: "block",
                border: "1px solid #eee",
                borderRadius: 8,
                padding: 16,
                background: "#fff",
                textDecoration: "none",
                color: "inherit",
                boxShadow: "0 2px 8px #0001"
            }}
        >
            <div style={{
                width: "100%",
                height: 200,
                background: "#eee url('https://via.placeholder.com/300x200?text=Foto') center/cover",
                borderRadius: 6,
                marginBottom: 12
            }} />
            <div style={{ fontWeight: 600, marginBottom: 4 }}>{op.sub_property_type}</div>
            <div style={{ color: "#555", marginBottom: 4 }}>{op.province} - {op.city}</div>
            <div style={{ fontWeight: 500, marginBottom: 4 }}>Precio: {op.ask_price.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}</div>
            <div style={{
                color: op.squatted ? "#c00" : "#090",
                fontWeight: 500
            }}>
                {op.squatted ? "Ocupado" : "Libre"}
            </div>
        </a>
    )
}