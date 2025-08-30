import { MetadataRoute } from 'next'
import { getOpportunities } from '@/lib/opportunities'
import { getFixIncomes } from '@/lib/fix-incomes'
import { getHighVolumens } from '@/lib/high-volumens'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://inversorhouse.com'

    // Get dynamic content
    const [opportunities, fixIncomes, highVolumens] = await Promise.all([
        getOpportunities().catch(() => []),
        getFixIncomes().catch(() => []),
        getHighVolumens().catch(() => [])
    ])

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/oportunidades`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/fix-incomes`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/high-volumen`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/faqs`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/aviso-legal`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/privacidad`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/cookies`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        }
    ]

    // Opportunity pages
    const opportunityPages: MetadataRoute.Sitemap = opportunities.map((opportunity) => ({
        url: `${baseUrl}/oportunidades/${opportunity.ref_code}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    // Fix income pages
    const fixIncomePages: MetadataRoute.Sitemap = fixIncomes.map((fixIncome) => ({
        url: `${baseUrl}/fix-incomes/${fixIncome._id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    // High volumen pages
    const highVolumenPages: MetadataRoute.Sitemap = highVolumens.map((highVolumen) => ({
        url: `${baseUrl}/high-volumen/${highVolumen._id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [...staticPages, ...opportunityPages, ...fixIncomePages, ...highVolumenPages]
}
