import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://simplesestory.vercel.app',
            lastModified: new Date(),
        },
        {
            url: 'https://simplesestory.vercel.app/about',
            lastModified: new Date(),
        },
        {
            url: 'https://simplesestory.vercel.app/contact',
            lastModified: new Date(),
        },
        {
            url: 'https://simplesestory.vercel.app/gallery',
            lastModified: new Date(),
        },
        {
            url: 'https://simplesestory.vercel.app/price',
            lastModified: new Date(),
        },
        {
            url: 'https://simplesestory.vercel.app/price',
            lastModified: new Date(),
        },
    ]
}