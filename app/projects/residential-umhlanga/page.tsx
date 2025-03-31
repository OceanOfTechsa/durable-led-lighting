import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, MapPin, Calendar, ArrowLeft, Sun, Battery, User, Phone, ArrowRight } from "lucide-react"
import PageTransition from "@/components/page-transition"
import FadeIn from "@/components/animations/fade-in"

export default function ProjectDetailPage() {
    const project = {
        title: "Residential Installation in Umhlanga",
        description: "A comprehensive 10kW solar system with battery backup for a luxury home in Umhlanga, Durban",
        location: "Umhlanga, Durban",
        date: "January 2023",
        category: "Residential",
        client: "The Naidoo Family",
        duration: "2 weeks",
        systemSize: "10kW",
        batteryCapacity: "15kWh",
        annualProduction: "16,000 kWh",
        co2Offset: "11 tons annually",
        features: [
            "10kW solar array with premium monocrystalline panels",
            "15kWh lithium-ion battery storage system",
            "Smart energy monitoring and management",
            "Complete load shedding protection",
            "Seamless grid integration with net metering",
            "Mobile app for real-time monitoring",
            "Weather-resistant installation optimized for coastal conditions",
            "25-year performance warranty on panels",
        ],
        challenges: [
            "Coastal environment requiring special corrosion-resistant mounting hardware",
            "Complex roof design requiring custom mounting solution",
            "Integration with existing home automation system",
            "Optimizing panel placement for maximum efficiency while maintaining aesthetic appeal",
        ],
        solutions: [
            "Used marine-grade stainless steel mounting hardware to prevent corrosion",
            "Designed custom mounting system to accommodate unique roof architecture",
            "Implemented API integration with the home's existing smart system",
            "Utilized 3D modeling to optimize panel placement for both efficiency and aesthetics",
        ],
        results: [
            "90% reduction in monthly electricity bills",
            "Complete protection from load shedding",
            "ROI expected within 5-7 years",
            "Enhanced property value",
            "Reduced carbon footprint by 11 tons of CO2 annually",
        ],
        testimonial: {
            quote:
                "The solar system has completely transformed our home energy experience. We no longer worry about load shedding, and our electricity bills have dropped dramatically. The installation team was professional and the system looks great on our roof.",
            author: "Priya Naidoo",
            role: "Homeowner",
        },
        images: [
            {
                src: "/placeholder.svg?height=600&width=800",
                alt: "Front view of the house with solar panels",
                caption: "Front view of the installation showing panel placement",
            },
            {
                src: "/placeholder.svg?height=600&width=800",
                alt: "Close-up of solar panel installation",
                caption: "Close-up of the premium monocrystalline panels",
            },
            {
                src: "/placeholder.svg?height=600&width=800",
                alt: "Battery storage system",
                caption: "15kWh battery storage system installed in the garage",
            },
            {
                src: "/placeholder.svg?height=600&width=800",
                alt: "Monitoring system dashboard",
                caption: "Smart monitoring system showing energy production and consumption",
            },
        ],
        relatedProjects: [
            {
                title: "Eco-Friendly Home in Cape Winelands",
                description: "8kW off-grid system for a sustainable home",
                image: "/placeholder.svg?height=300&width=400",
                slug: "residential-cape-winelands",
            },
            {
                title: "Commercial Office Building in Sandton",
                description: "50kW system for a multi-story office building",
                image: "/placeholder.svg?height=300&width=400",
                slug: "commercial-sandton",
            },
        ],
    }

    return (
        <PageTransition>
            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="w-full py-10 md:py-16 lg:py-20 bg-gradient-to-b from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
                    <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
                        <Link
                            href="/projects"
                            className="inline-flex items-center text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400 mb-4"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Projects
                        </Link>
                        <div className="flex flex-col space-y-4">
                            <div className="space-y-2">
                                <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-900/50 dark:text-green-300">
                                    {project.category}
                                </div>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                                    {project.title}
                                </h1>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4" />
                                        <span>{project.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        <span>{project.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Sun className="h-4 w-4" />
                                        <span>{project.systemSize} System</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Battery className="h-4 w-4" />
                                        <span>{project.batteryCapacity} Storage</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Overview */}
                <section className="w-full py-10 md:py-16 lg:py-20 bg-white dark:bg-gray-950">
                    <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
                        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
                            <div className="lg:col-span-2">
                                <FadeIn>
                                    <h2 className="text-2xl font-bold mb-6 dark:text-white">Project Overview</h2>
                                    <div className="prose max-w-none dark:prose-invert mb-8">
                                        <p>{project.description}</p>
                                        <p>
                                            This residential installation in Umhlanga, Durban showcases our commitment to providing
                                            high-quality solar solutions for South African homes. The system was designed to address the
                                            homeowner's specific needs: eliminating the impact of load shedding, reducing electricity costs,
                                            and utilizing renewable energy.
                                        </p>
                                        <p>
                                            The 10kW system features premium monocrystalline panels that maximize energy production even in
                                            cloudy conditions, while the 15kWh battery storage system ensures the home remains powered during
                                            outages. The entire system is monitored through a user-friendly app that allows the homeowners to
                                            track their energy production and consumption in real-time.
                                        </p>
                                    </div>
                                </FadeIn>

                                <FadeIn>
                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold mb-4 dark:text-white">System Features</h3>
                                        <ul className="grid gap-2 sm:grid-cols-2">
                                            {project.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 dark:text-green-500" />
                                                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </FadeIn>

                                <FadeIn>
                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold mb-4 dark:text-white">Project Gallery</h3>
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            {project.images.map((image, index) => (
                                                <div key={index} className="space-y-1">
                                                    <div className="relative rounded-lg overflow-hidden h-48 sm:h-64">
                                                        <Image
                                                            src={image.src || "/placeholder.svg"}
                                                            alt={image.alt}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{image.caption}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            <div>
                                <FadeIn>
                                    <Card className="mb-6 dark:bg-gray-800 dark:border-gray-700">
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold mb-4 dark:text-white">Project Details</h3>
                                            <dl className="space-y-3">
                                                <div className="flex justify-between">
                                                    <dt className="text-gray-500 dark:text-gray-400">Client:</dt>
                                                    <dd className="font-medium dark:text-white">{project.client}</dd>
                                                </div>
                                                <div className="flex justify-between">
                                                    <dt className="text-gray-500 dark:text-gray-400">Duration:</dt>
                                                    <dd className="font-medium dark:text-white">{project.duration}</dd>
                                                </div>
                                                <div className="flex justify-between">
                                                    <dt className="text-gray-500 dark:text-gray-400">System Size:</dt>
                                                    <dd className="font-medium dark:text-white">{project.systemSize}</dd>
                                                </div>
                                                <div className="flex justify-between">
                                                    <dt className="text-gray-500 dark:text-gray-400">Battery Capacity:</dt>
                                                    <dd className="font-medium dark:text-white">{project.batteryCapacity}</dd>
                                                </div>
                                                <div className="flex justify-between">
                                                    <dt className="text-gray-500 dark:text-gray-400">Annual Production:</dt>
                                                    <dd className="font-medium dark:text-white">{project.annualProduction}</dd>
                                                </div>
                                                <div className="flex justify-between">
                                                    <dt className="text-gray-500 dark:text-gray-400">CO2 Offset:</dt>
                                                    <dd className="font-medium dark:text-white">{project.co2Offset}</dd>
                                                </div>
                                            </dl>
                                        </CardContent>
                                    </Card>
                                </FadeIn>

                                <FadeIn delay={0.1}>
                                    <Card className="mb-6 dark:bg-gray-800 dark:border-gray-700">
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold mb-4 dark:text-white">Client Testimonial</h3>
                                            <blockquote className="border-l-4 border-green-600 dark:border-green-500 pl-4 italic text-gray-600 dark:text-gray-300">
                                                "{project.testimonial.quote}"
                                            </blockquote>
                                            <div className="mt-4 flex items-center">
                                                <div className="rounded-full bg-gray-200 dark:bg-gray-700 p-2 mr-3">
                                                    <User className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                                </div>
                                                <div>
                                                    <p className="font-medium dark:text-white">{project.testimonial.author}</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{project.testimonial.role}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </FadeIn>

                                <FadeIn delay={0.2}>
                                    <Card className="dark:bg-gray-800 dark:border-gray-700">
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold mb-4 dark:text-white">Interested in a Similar Project?</h3>
                                            <p className="text-gray-500 dark:text-gray-400 mb-4">
                                                Contact us today to discuss how we can create a custom solar solution for your home.
                                            </p>
                                            <div className="space-y-3">
                                                <Link href="/contact">
                                                    <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                                                        Get a Free Quote
                                                    </Button>
                                                </Link>
                                                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <Phone className="h-4 w-4" />
                                                    <span>+27 31 123 4567</span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Process */}
                <section className="w-full py-10 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
                    <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
                        <FadeIn>
                            <h2 className="text-2xl font-bold mb-6 dark:text-white">Project Process</h2>
                        </FadeIn>
                        <Tabs defaultValue="challenges" className="w-full">
                            <TabsList className="grid w-full grid-cols-3 mb-8">
                                <TabsTrigger value="challenges" className="cursor-pointer">Challenges</TabsTrigger>
                                <TabsTrigger value="solutions" className="cursor-pointer">Solutions</TabsTrigger>
                                <TabsTrigger value="results" className="cursor-pointer">Results</TabsTrigger>
                            </TabsList>
                            <TabsContent value="challenges">
                                <Card className="dark:bg-gray-800 dark:border-gray-700">
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-bold mb-4 dark:text-white">Project Challenges</h3>
                                        <ul className="space-y-3">
                                            {project.challenges.map((challenge, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <div className="bg-amber-100 dark:bg-amber-900/30 p-1 rounded-full mt-0.5">
                                                        <Sun className="h-4 w-4 text-amber-600 dark:text-amber-500" />
                                                    </div>
                                                    <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="solutions">
                                <Card className="dark:bg-gray-800 dark:border-gray-700">
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-bold mb-4 dark:text-white">Our Solutions</h3>
                                        <ul className="space-y-3">
                                            {project.solutions.map((solution, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mt-0.5">
                                                        <Sun className="h-4 w-4 text-blue-600 dark:text-blue-500" />
                                                    </div>
                                                    <span className="text-gray-600 dark:text-gray-300">{solution}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="results">
                                <Card className="dark:bg-gray-800 dark:border-gray-700">
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-bold mb-4 dark:text-white">Project Results</h3>
                                        <ul className="space-y-3">
                                            {project.results.map((result, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-0.5">
                                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500" />
                                                    </div>
                                                    <span className="text-gray-600 dark:text-gray-300">{result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>

                {/* Related Projects */}
                <section className="w-full py-10 md:py-16 lg:py-20 bg-white dark:bg-gray-950">
                    <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
                        <FadeIn>
                            <h2 className="text-2xl font-bold mb-6 dark:text-white">Related Projects</h2>
                        </FadeIn>
                        <div className="grid gap-6 md:grid-cols-2">
                            {project.relatedProjects.map((relatedProject, index) => (
                                <FadeIn key={index} delay={index * 0.1}>
                                    <Link href={`/projects/${relatedProject.slug}`}>
                                        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full dark:bg-gray-800 dark:border-gray-700 pt-0">
                                            <div className="relative h-48">
                                                <Image
                                                    src={relatedProject.image || "/placeholder.svg"}
                                                    alt={relatedProject.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <CardContent className="p-4">
                                                <h3 className="text-lg font-bold dark:text-white">{relatedProject.title}</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{relatedProject.description}</p>
                                                <div className="text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400 text-sm mt-2 inline-flex items-center">
                                                    View Project <ArrowRight className="h-3.5 w-3.5 ml-1" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full py-10 md:py-16 lg:py-20 bg-green-600 dark:bg-green-900 text-white">
                    <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                        Ready to Start Your Solar Journey?
                                    </h2>
                                    <p className="max-w-[600px] md:text-xl mx-auto">
                                        Contact us today for a free consultation and quote. Our team of experts will help you design the
                                        perfect solar solution for your needs.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link href="/contact">
                                        <Button className="bg-white text-green-600 hover:bg-gray-100 dark:bg-white dark:text-green-900">
                                            Get a Free Quote
                                        </Button>
                                    </Link>
                                    <Link href="/services/residential">
                                        <Button
                                            variant="outline"
                                            className="text-white border-white hover:bg-green-700 dark:hover:bg-green-800"
                                        >
                                            Learn About Residential Solar
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}

