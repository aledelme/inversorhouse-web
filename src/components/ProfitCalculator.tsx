import { formatEUR } from "@/utils/functions";
import { useState } from "react";

interface ProfitCalculatorProps {
    maxInvestment: number;
    minProfitPercent: number; // Ejemplo: 5 para 5%
    maxProfitPercent: number; // Ejemplo: 12 para 12%
}

export default function ProfitCalculator({
    maxInvestment,
    minProfitPercent,
    maxProfitPercent,
}: ProfitCalculatorProps) {
    const minInvestment = 5000;
    const step = 500;
    const [investment, setInvestment] = useState(minInvestment);

    const minProfit = investment * (minProfitPercent / 100);
    const maxProfit = investment * (maxProfitPercent / 100);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.target.value);
        if (value < minInvestment) value = minInvestment;
        if (value > maxInvestment) value = maxInvestment;
        setInvestment(value);
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md m-5">
            <h2 className="text-xl font-bold mb-4 text-blue-900">Calculadora de Beneficios Bruto</h2>
            <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">
                    Cantidad a invertir
                </label>
                <div className="flex flex-col gap-2">
                    <input
                        type="range"
                        min={minInvestment}
                        max={maxInvestment}
                        step={step}
                        value={investment}
                        onChange={handleChange}
                        className="w-full accent-blue-600" />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>Mínimo: {minInvestment} €</span>
                        <span>Máximo: {maxInvestment} €</span>
                    </div>
                    <div className="text-center text-lg font-semibold text-blue-800 mt-2">
                        {formatEUR(investment)}
                    </div>
                </div>
            </div>
            <div className="mb-2">
                <ul className="mt-2 ml-4 list-disc text-gray-800">
                    <li>
                        <span className="font-semibold text-green-700">Mínimo estimado:</span> {minProfit.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
                    </li>
                    <li>
                        <span className="font-semibold text-green-700">Máximo estimado:</span> {maxProfit.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
                    </li>
                </ul>
            </div>
            <div className="max-w-lg mx-auto mt-2 p-4 text-xs text-gray-500 bg-gray-100 rounded">
                <strong>Disclaimer:</strong> Los resultados estimados por esta calculadora son meramente orientativos y no suponen un acuerdo de pago por parte de InversorHouse ni de ningún otro participante en la operación. De los resultados brutos pueden descontarse otros costes como gestión, desocupación, impuestos sociales y personales, así como otros trámites burocráticos.
            </div>
        </div>
    );
}