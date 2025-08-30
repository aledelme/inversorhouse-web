import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/dashboard/',
                    '/_next/',
                    '/admin/',
                    '/private/',
                ],
            },
        ],
        sitemap: 'https://inversorhouse.com/sitemap.xml',
        host: 'https://inversorhouse.com',
    }
}
