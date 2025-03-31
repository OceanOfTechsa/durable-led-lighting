import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, MapPin, Calendar, Sun } from "lucide-react"
import PageTransition from "@/components/page-transition"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react"

export default function ProjectsPage() {
    const projects = [
        {
            id: 1,
            title: "Residential Installation in Umhlanga",
            description: "10kW system with battery backup for a luxury home in Umhlanga, Durban",
            location: "Umhlanga, Durban",
            date: "January 2023",
            category: "residential",
            image: "/placeholder.svg?height=400&width=600",
            slug: "residential-umhlanga",
            features: ["10kW solar array", "15kWh battery storage", "Smart energy monitoring", "Load shedding protection"],
        },
        {
            id: 2,
            title: "Commercial Office Building",
            description: "50kW system for a multi-story office building in Sandton, Johannesburg",
            location: "Sandton, Johannesburg",
            date: "March 2023",
            category: "commercial",
            image: "/placeholder.svg?height=400&width=600",
            slug: "commercial-sandton",
            features: [
                "50kW solar array",
                "Rooftop installation",
                "Energy management system",
                "30% reduction in energy costs",
            ],
        },
        {
            id: 3,
            title: "Manufacturing Facility",
            description: "200kW system for a large manufacturing plant in Port Elizabeth",
            location: "Port Elizabeth",
            date: "May 2023",
            category: "industrial",
            image: "/placeholder.svg?height=400&width=600",
            slug: "industrial-port-elizabeth",
            features: [
                "200kW solar array",
                "Ground-mounted installation",
                "Custom energy solution",
                "Significant CO2 reduction",
            ],
        },
        {
            id: 4,
            title: "Community Solar Farm",
            description: "2MW community solar project providing clean energy to hundreds of homes in Western Cape",
            location: "Western Cape",
            date: "July 2023",
            category: "industrial",
            image: "/placeholder.svg?height=400&width=600",
            slug: "solar-farm-western-cape",
            features: ["2MW capacity", "Subscription model", "Community ownership", "Rural electrification"],
        },
        {
            id: 5,
            title: "Retail Shopping Center",
            description: "75kW system for a shopping center in Pretoria with carport installation",
            location: "Pretoria",
            date: "August 2023",
            category: "commercial",
            image: "/placeholder.svg?height=400&width=600",
            slug: "commercial-pretoria",
            features: ["75kW solar array", "Carport installation", "Covered parking benefit", "Public EV charging stations"],
        },
        {
            id: 6,
            title: "Eco-Friendly Home",
            description: "8kW off-grid system for an eco-friendly home in the Cape Winelands",
            location: "Cape Winelands",
            date: "October 2023",
            category: "residential",
            image: "/placeholder.svg?height=400&width=600",
            slug: "residential-cape-winelands",
            features: [
                "8kW solar array",
                "Complete off-grid solution",
                "Rainwater harvesting integration",
                "Sustainable living showcase",
            ],
        },
    ]

    return (
        <PageTransition>
            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section
                    className="w-full py-10 md:py-16 lg:py-24 bg-gradient-to-b from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
                    <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-white">Our
                                    Projects</h1>
                                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Explore our portfolio of solar installations across South Africa, from residential
                                    homes to
                                    large-scale commercial projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Tabs */}
                <section className="w-full py-10 md:py-16 lg:py-24 bg-white dark:bg-gray-950">
                    <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
                        <Tabs defaultValue="all" className="w-full">
                            <TabsList className="grid w-full grid-cols-4 mb-8">
                                <TabsTrigger value="all" className="text-sm sm:text-base cursor-pointer">
                                    All Projects
                                </TabsTrigger>
                                <TabsTrigger value="residential" className="text-sm sm:text-base cursor-pointer">
                                    Residential
                                </TabsTrigger>
                                <TabsTrigger value="commercial" className="text-sm sm:text-base cursor-pointer">
                                    Commercial
                                </TabsTrigger>
                                <TabsTrigger value="industrial" className="text-sm sm:text-base cursor-pointer">
                                    Industrial
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="all">
                                <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {projects.map((project) => (
                                        <ProjectCard key={project.id} project={project}/>
                                    ))}
                                </StaggerChildren>
                            </TabsContent>

                            <TabsContent value="residential">
                                <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {projects
                                        .filter((project) => project.category === "residential")
                                        .map((project) => (
                                            <ProjectCard key={project.id} project={project}/>
                                        ))}
                                </StaggerChildren>
                            </TabsContent>

                            <TabsContent value="commercial">
                                <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {projects
                                        .filter((project) => project.category === "commercial")
                                        .map((project) => (
                                            <ProjectCard key={project.id} project={project}/>
                                        ))}
                                </StaggerChildren>
                            </TabsContent>

                            <TabsContent value="industrial">
                                <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {projects
                                        .filter((project) => project.category === "industrial")
                                        .map((project) => (
                                            <ProjectCard key={project.id} project={project}/>
                                        ))}
                                </StaggerChildren>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full py-10 md:py-16 lg:py-24 bg-green-600 dark:bg-green-900 text-white">
                    <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                        Ready to Start Your Solar Project?
                                    </h2>
                                    <p className="max-w-[600px] md:text-xl mx-auto">
                                        Contact us today for a free consultation and quote. Our team of experts will
                                        help you design the
                                        perfect solar solution for your needs.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link href="/contact">
                                        <Button
                                            className="bg-white text-green-600 hover:bg-gray-100 dark:bg-white dark:text-green-900 cusor-pointer">
                                            Get a Free Quote
                                        </Button>
                                    </Link>
                                    {/*<Link href="/services">*/}
                                    {/*    <Button*/}
                                    {/*        variant="outline"*/}
                                    {/*        className="text-white border-white hover:bg-green-700 dark:hover:bg-green-800"*/}
                                    {/*    >*/}
                                    {/*        Explore Our Services*/}
                                    {/*    </Button>*/}
                                    {/*</Link>*/}
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}

function ProjectCard({project} : {project: any}) {
    return (
        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group dark:bg-gray-800 dark:border-gray-700 pt-0">
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 left-2">
                  <span
                      className="inline-block rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/50 dark:text-green-300">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
            </div>
            <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2 dark:text-white">{project.title}</h3>
                <div className="flex items-start gap-1 text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <MapPin className="h-3.5 w-3.5 mt-0.5"/>
                    <span>{project.location}</span>
                </div>
                <div className="flex items-start gap-1 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="h-3.5 w-3.5 mt-0.5"/>
                    <span>{project.date}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{project.description}</p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 mb-3 space-y-1">
                    {project.features.slice(0, 2).map((feature: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
                        <li key={index} className="flex items-start gap-1">
                            <Sun className="h-3.5 w-3.5 text-green-600 dark:text-green-500 mt-0.5" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <Link
                    href={`/projects/${project.slug}`}
                    className="text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400 text-sm inline-flex items-center"
                >
                    View Project Details <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </Link>
            </CardContent>
        </Card>
    )
}

