'use client'

import { IOpportunity } from "@/services/models/Opportunity"

export default function HouseCard({ op }: { op: IOpportunity }) {
    return (
        <div
            key={op._id}
            // href={`https://google.com`}
            rel="noopener noreferrer"
            className="block w-full max-w-full border border-gray-200 rounded-lg p-4 bg-white text-inherit no-underline shadow-sm overflow-hidden"
            style={{ boxSizing: "border-box" }}
        >
            <div
                className="w-full h-[200px] bg-gray-200 rounded-md mb-3 overflow-hidden"
                style={{
                    // backgroundImage: "url('https://via.placeholder.com/300x200')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    boxSizing: "border-box"
                }}
            />
            <div className="font-semibold mb-1">{op.sub_property_type}</div>
            <div className="text-gray-600 mb-1">{op.province} - {op.city}</div>
            <div className="font-medium mb-1">
                Precio: {op.ask_price.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
            </div>
            <div className={op.squatted ? "text-red-700 font-medium" : "text-green-700 font-medium"}>
                {op.squatted ? "Ocupado" : "Libre"}
            </div>
        </div>
    )
}