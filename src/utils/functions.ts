
// Convierte _id y otros campos especiales a string
export function serialize(doc) {
    if (!doc) return doc;
    if (Array.isArray(doc)) return doc.map(serialize);
    return {
        ...doc,
        _id: doc._id?.toString?.() ?? doc._id,
    };
}

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