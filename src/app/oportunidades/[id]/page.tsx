
import type { Metadata } from "next";
import { getOpportunityByRefCode } from "@/lib/opportunities";
import OpportunityDetailView from "./view";
import { capitalizeWords, formatEUR } from "@/utils/functions";
import { notFound } from "next/navigation";

interface OpportunityPageProps {
    params: Promise<{ id: string }>;
}

// Generate metadata for each opportunity page
export async function generateMetadata({ params }: OpportunityPageProps): Promise<Metadata> {
    const { id } = await params;
    const op = await getOpportunityByRefCode(id);

    if (!op) {
        return {
            title: "Oportunidad no encontrada | InversorHouse",
            description: "La oportunidad de inversión que buscas no está disponible o ha sido retirada.",
        };
    }

    const minRentability = ((op.min_idealista - op.ask_price) / op.ask_price * 100).toFixed(0);
    const maxRentability = ((op.max_idealista - op.ask_price) / op.ask_price * 100).toFixed(0);

    const title = `${capitalizeWords(op.city)} - ${op.sub_property_type} | Rentabilidad ${minRentability}-${maxRentability}% | InversorHouse`;
    const description = `🏠 Oportunidad REO en ${capitalizeWords(op.city)}, ${op.province}. ${op.sub_property_type} desde ${formatEUR(op.ask_price)}. Rentabilidad estimada: ${minRentability}-${maxRentability}%. ${op.squatted ? 'Ocupado' : 'Libre'}. Coinversión desde 5.000€.`;

    const imageUrl = `${process.env.NEXT_PUBLIC_R2_CLOUDFLARE_URL}/opportunities/${op.ref_code}/${op.ref_code}.jpg`;

    return {
        title,
        description,
        keywords: [
            `propiedad ${capitalizeWords(op.city)}`,
            `inversión ${op.province}`,
            `REO ${op.sub_property_type}`,
            `rentabilidad ${minRentability}%`,
            'coinversión inmobiliaria',
            'oportunidad exclusiva'
        ],
        openGraph: {
            title,
            description,
            images: [
                {
                    url: imageUrl,
                    width: 800,
                    height: 600,
                    alt: `Propiedad en ${capitalizeWords(op.city)} - ${op.sub_property_type}`,
                }
            ],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [imageUrl],
        },
    };
}

export default async function OpportunityPage({ params }: OpportunityPageProps) {
    const { id } = await params;
    const op = await getOpportunityByRefCode(id);

    if (!op) {
        notFound();
    }

    const minRentability = ((op.min_idealista - op.ask_price) / op.ask_price * 100).toFixed(0);
    const maxRentability = ((op.max_idealista - op.ask_price) / op.ask_price * 100).toFixed(0);
    const imageUrl = `${process.env.NEXT_PUBLIC_R2_CLOUDFLARE_URL}/opportunities/${op.ref_code}/${op.ref_code}.jpg`;

    // Structured Data for Real Estate Listing
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "RealEstateListing",
        "name": `${capitalizeWords(op.city)} - ${op.sub_property_type}`,
        "description": `Oportunidad de inversión REO en ${capitalizeWords(op.city)}, ${op.province}`,
        "url": `https://inversorhouse.com/oportunidades/${op.ref_code}`,
        "image": imageUrl,
        "datePosted": new Date().toISOString(),
        "validThrough": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(), // 90 days from now
        "price": {
            "@type": "MonetaryAmount",
            "value": op.ask_price,
            "currency": "EUR"
        },
        "priceCurrency": "EUR",
        "availability": "InStock",
        "seller": {
            "@type": "Organization",
            "name": "InversorHouse",
            "url": "https://inversorhouse.com"
        },
        "realEstateAgent": {
            "@type": "RealEstateAgent",
            "name": "InversorHouse",
            "url": "https://inversorhouse.com"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": capitalizeWords(op.city),
            "addressRegion": op.state,
            "addressCountry": "ES",
            "postalCode": op.zip_code
        },
        "geo": {
            "@type": "GeoCoordinates",
            "addressCountry": "ES"
        },
        "floorSize": {
            "@type": "QuantitativeValue",
            "unitText": "SQM"
        },
        "category": "ResidentialProperty",
        "potentialReturn": {
            "@type": "QuantitativeValue",
            "minValue": minRentability,
            "maxValue": maxRentability,
            "unitText": "PERCENT"
        }
    };

    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <OpportunityDetailView op={op} />
        </>
    );
}