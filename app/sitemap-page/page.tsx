import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from 'lucide-react'
import PageTransition from "@/components/page-transition"
import FadeIn from "@/components/animations/fade-in"

export default function SitemapPage() {
    const siteStructure = [
        {
            title: "Main Pages",
            links: [
                { name: "Home", url: "/" },
                { name: "About", url: "/about" },
                { name: "Services", url: "/services" },
                { name: "Projects", url: "/projects" },
                { name: "Blog", url: "/blog" },
                { name: "Contact", url: "/contact" },
            ],
        },
        {
            title: "Services",
            links: [
                { name: "Residential Solar", url: "/services/residential" },
                { name: "Commercial Solar", url: "/services/commercial" },
                { name: "Industrial Solar", url: "/services/industrial" },
                { name: "Battery Storage", url: "/services/battery-storage" },
                { name: "Energy Monitoring", url: "/services/energy-monitoring" },
                { name: "Maintenance", url: "/services/maintenance" },
            ],
        },
        {
            title: "Projects",
            links: [
                { name: "Residential Projects", url: "/projects?category=residential" },
                { name: "Commercial Projects", url: "/projects?category=commercial" },
                { name: "Industrial Projects", url: "/projects?category=industrial" },
                { name: "Featured Project: Umhlanga Residence", url: "/projects/residential-umhlanga" },
                { name: "Featured Project: Sandton Office", url: "/projects/commercial-sandton" },
                { name: "Featured Project: Western Cape Solar Farm", url: "/projects/solar-farm-western-cape" },
            ],
        },
        {
            title: "Blog",
            links: [
                { name: "All Articles", url: "/blog" },
                { name: "Residential Articles", url: "/blog?category=residential" },
                { name: "Commercial Articles", url: "/blog?category=commercial" },
                { name: "Technology Articles", url: "/blog?category=technology" },
                { name: "Finance Articles", url: "/blog?category=finance" },
                { name: "Maintenance Articles", url: "/blog?category=maintenance" },
            ],
        },
        {
            title: "Legal & Company",
            links: [
                { name: "Privacy Policy", url: "/privacy-policy" },
                { name: "Terms of Service", url: "/terms-of-service" },
                { name: "Sitemap", url: "/sitemap-page" },
            ],
        },
    ]

    return (
        <PageTransition>
            <div className="flex flex-col min-h-screen">
                <section className="w-full py-10 md:py-16 lg:py-24 bg-gradient-to-b from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
                    <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-white">Sitemap</h1>
                                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    A complete overview of all pages available on our website.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-10 md:py-16 lg:py-24 bg-white dark:bg-gray-950">
                    <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {siteStructure.map((section, index) => (
                                <FadeIn key={index} delay={index * 0.1}>
                                    <Card className="h-full dark:bg-gray-800 dark:border-gray-700">
                                        <CardContent className="p-6">
                                            <h2 className="text-xl font-bold mb-4 dark:text-white">{section.title}</h2>
                                            <ul className="space-y-2">
                                                {section.links.map((link, linkIndex) => (
                                                    <li key={linkIndex}>
                                                        <Link
                                                            href={link.url}
                                                            className="flex items-center text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500"
                                                        >
                                                            <ChevronRight className="h-4 w-4 mr-2 text-green-600 dark:text-green-500" />
                                                            <span>{link.name}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
