import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    // Replace with your actual domain
    const baseUrl = 'https://mayankpatel.in';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Add more pages here if you create a blog later
    ]
}
