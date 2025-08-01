/**
 * Capitaliza cada palabra de un texto: la primera letra en mayúscula, el resto en minúscula.
 * Considera también los guiones como separadores de palabra.
 * Ejemplo: "madrid-centro sur" => "Madrid-Centro Sur"
 */
export function capitalizeWords(text: string): string {
    return text.replace(/([^\s-]+)/g, (word) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
}


// Función para formatear moneda en EUR
export const formatEUR = (value: number) =>
    value.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });