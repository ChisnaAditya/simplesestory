import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://simplesestory.vercel.app',
            lastModified: new Date(),
        },
    ]
}