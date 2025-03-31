import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://solarpowersolutions.com"

    // Blog posts would typically be fetched from a database or CMS
    const blogPosts = [
        {
            slug: "benefits-of-solar-energy-homeowners",
            lastModified: new Date(),
        },
        {
            slug: "how-solar-panels-work",
            lastModified: new Date(),
        },
        {
            slug: "solar-tax-credits-incentives",
            lastModified: new Date(),
        },
        {
            slug: "commercial-solar-business-benefits",
            lastModified: new Date(),
        },
        {
            slug: "solar-battery-storage-guide",
            lastModified: new Date(),
        },
        {
            slug: "solar-panel-maintenance-tips",
            lastModified: new Date(),
        },
    ]

    // Main pages
    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly" as const,
            priority: 0.6,
        },
    ]

    // Add blog posts to sitemap
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }))

    return [...routes, ...blogRoutes]
}

