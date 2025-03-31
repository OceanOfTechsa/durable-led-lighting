import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Home, Battery, Sun, BarChart3, Zap } from "lucide-react"
import PageTransition from "@/components/page-transition"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import ParallaxSection from "@/components/animations/parallax-section"

export default function ResidentialServicePage() {
    const benefits = [
        {
            title: "Energy Independence",
            description:
                "Free yourself from Eskom's load shedding and rising electricity costs with your own power generation.",
            icon: <Sun className="h-10 w-10 text-green-600 dark:text-green-500" />,
        },
        {
            title: "Battery Backup",
            description: "Keep your lights on and essential appliances running during power outages with battery storage.",
            icon: <Battery className="h-10 w-10 text-green-600 dark:text-green-500" />,
        },
        {
            title: "Energy Monitoring",
            description: "Track your energy production and consumption in real-time with our smart monitoring systems.",
            icon: <BarChart3 className="h-10 w-10 text-green-600 dark:text-green-500" />,
        },
        {
            title: "Cost Savings",
            description: "Reduce or eliminate your monthly electricity bills and protect against future price increases.",
            icon: <Zap className="h-10 w-10 text-green-600 dark:text-green-500" />,
        },
    ]

    const packages = [
        {
            title: "Starter Package",
            description: "Perfect for small homes or as a first step into solar energy",
            features: [
                "3-5kW solar array",
                "5kWh battery storage",
                "Essential circuits backup",
                "Mobile monitoring app",
                "5-year warranty",
            ],
            price: "From R75,000",
        },
        {
            title: "Family Package",
            description: "Ideal for medium-sized homes with standard energy needs",
            features: [
                "5-8kW solar array",
                "10kWh battery storage",
                "Whole-home backup capability",
                "Advanced energy management",
                "10-year warranty",
            ],
            price: "From R120,000",
            highlighted: true,
        },
        {
            title: "Premium Package",
            description: "Complete energy solution for larger homes with high energy demands",
            features: [
                "8-12kW solar array",
                "15-20kWh battery storage",
                "Full home backup with priority circuits",
                "Smart home integration",
                "25-year warranty",
            ],
            price: "From R180,000",
        },
    ]

    return (
        <PageTransition>
            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="w-full py-10 md:py-16 lg:py-24 bg-gradient-to-b from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
                    <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <FadeIn direction="right">
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="inline-flex items-center rounded-md bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-900/30 dark:text-green-400 w-fit">
                                        <Home className="mr-1 h-4 w-4" /> Residential Solar
                                    </div>
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-white">
                                        Home Solar Solutions
                                    </h1>
                                    <p className="text-gray-500 md:text-xl dark:text-gray-400">
                                        Power your home with clean, renewable energy. Our residential solar solutions are designed to
                                        maximize efficiency, provide energy security during load shedding, and save you money.
                                    </p>
                                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                        <Link href="/contact">
                                            <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                                                Get a Free Quote
                                            </Button>
                                        </Link>
                                        <Link href="/projects?category=residential">
                                            <Button variant="outline" className="dark:text-white dark:border-gray-700 dark:hover:bg-gray-800">
                                                View Residential Projects
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>
                            <FadeIn direction="left" delay={0.2}>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src="/placeholder.svg?height=550&width=550"
                                        alt="Residential solar installation on a South African home"
                                        width={550}
                                        height={550}
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="w-full py-10 md:py-16 lg:py-24 bg-white dark:bg-gray-950">
                    <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl dark:text-white">
                                        Residential Solar Features
                                    </h2>
                                    <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                        Our residential solar solutions are tailored to meet the unique energy needs of South African homes.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
                            <FadeIn direction="right">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold dark:text-white">What We Offer</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 dark:text-green-500" />
                                            <div>
                                                <span className="font-medium dark:text-white">Rooftop solar panel installation</span>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    High-efficiency panels designed to maximize energy production in South Africa's sunny climate.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 dark:text-green-500" />
                                            <div>
                                                <span className="font-medium dark:text-white">Home battery storage systems</span>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Store excess energy for use during load shedding, at night, or during peak pricing periods.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 dark:text-green-500" />
                                            <div>
                                                <span className="font-medium dark:text-white">Smart energy monitoring</span>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Track your energy production and consumption in real-time through our user-friendly app.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 dark:text-green-500" />
                                            <div>
                                                <span className="font-medium dark:text-white">Hybrid and off-grid solutions</span>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Options for grid-tied systems with battery backup or complete off-grid independence.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 dark:text-green-500" />
                                            <div>
                                                <span className="font-medium dark:text-white">EV charging stations</span>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Future-proof your home with electric vehicle charging capabilities powered by the sun.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </FadeIn>
                            <FadeIn direction="left" delay={0.2}>
                                <div className="relative rounded-lg overflow-hidden h-full min-h-[300px]">
                                    <Image
                                        src="/placeholder.svg?height=600&width=600"
                                        alt="Solar panels on a residential roof"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white">Premium Quality Installation</h3>
                                            <p className="text-white/80 text-sm mt-2">
                                                Our expert team ensures professional installation with minimal disruption to your home
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <ParallaxSection className="w-full py-10 md:py-16 lg:py-24 bg-gray-50 dark:bg-gray-900" speed={0.1}>
                    <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl dark:text-white">
                                        Benefits of Residential Solar
                                    </h2>
                                    <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                        Discover how solar energy can transform your home and improve your quality of life.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                        <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {benefits.map((benefit, index) => (
                                <Card
                                    key={index}
                                    className="border-none shadow-md hover:shadow-lg transition-all duration-300 dark:bg-gray-800 dark:shadow-gray-900/30"
                                >
                                    <CardContent className="p-6 flex flex-col items-center text-center">
                                        <div className="mb-4">{benefit.icon}</div>
                                        <h3 className="text-xl font-bold mb-2 dark:text-white">{benefit.title}</h3>
                                        <p className="text-gray-500 dark:text-gray-400">{benefit.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </StaggerChildren>
                    </div>
                </ParallaxSection>

                {/* Packages Section */}
                <section className="w-full py-10 md:py-16 lg:py-24 bg-white dark:bg-gray-950">
                    <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl dark:text-white">
                                        Our Solar Packages
                                    </h2>
                                    <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                        Choose the perfect solar solution for your home and energy needs.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                        <div className="grid gap-6 md:grid-cols-3">
                            {packages.map((pkg, index) => (
                                <FadeIn key={index} delay={index * 0.1}>
                                    <Card
                                        className={`h-full flex flex-col ${pkg.highlighted ? "border-green-600 dark:border-green-500 shadow-lg" : "shadow-md"} dark:bg-gray-800 dark:border-gray-700`}
                                    >
                                        {pkg.highlighted && (
                                            <div className="bg-green-600 dark:bg-green-700 text-white text-center py-1 text-sm font-medium">
                                                Most Popular
                                            </div>
                                        )}
                                        <CardContent className={`p-6 flex-1 flex flex-col ${pkg.highlighted ? "pt-5" : "pt-6"}`}>
                                            <h3 className="text-xl font-bold mb-2 dark:text-white">{pkg.title}</h3>
                                            <p className="text-gray-500 dark:text-gray-400 mb-4">{pkg.description}</p>
                                            <ul className="space-y-2 mb-6 flex-1">
                                                {pkg.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-start gap-2">
                                                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 dark:text-green-500" />
                                                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mt-auto">
                                                <p className="text-2xl font-bold text-green-600 dark:text-green-500 mb-4">{pkg.price}</p>
                                                <Link href="/contact">
                                                    <Button
                                                        className={`w-full ${pkg.highlighted ? "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600" : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"}`}
                                                    >
                                                        Get a Quote
                                                    </Button>
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </FadeIn>
                            ))}
                        </div>
                        <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
                            <p>
                                All packages include professional installation, permits, and system design. Prices may vary based on
                                specific home requirements and system customization.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="w-full py-10 md:py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
                    <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl dark:text-white">
                                        Our Installation Process
                                    </h2>
                                    <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                        We make going solar simple with our streamlined process.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            <FadeIn delay={0.1}>
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4 dark:bg-green-900/30 dark:text-green-400">
                                        <span className="text-2xl font-bold">1</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 dark:text-white">Consultation</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        We assess your energy needs, discuss your goals, and perform a site evaluation to design the perfect
                                        system.
                                    </p>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4 dark:bg-green-900/30 dark:text-green-400">
                                        <span className="text-2xl font-bold">2</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 dark:text-white">Design & Proposal</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Our engineers create a custom solar solution tailored to your specific needs and provide a detailed
                                        quote.
                                    </p>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.3}>
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4 dark:bg-green-900/30 dark:text-green-400">
                                        <span className="text-2xl font-bold">3</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 dark:text-white">Installation</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Our experienced team installs your solar system with minimal disruption to your home and daily
                                        routine.
                                    </p>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.4}>
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4 dark:bg-green-900/30 dark:text-green-400">
                                        <span className="text-2xl font-bold">4</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 dark:text-white">Activation & Support</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        We handle all permits and inspections, activate your system, and provide ongoing support and
                                        maintenance.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full py-10 md:py-16 lg:py-24 bg-green-600 dark:bg-green-900 text-white">
                    <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                        Ready to Power Your Home with Solar?
                                    </h2>
                                    <p className="max-w-[600px] md:text-xl mx-auto">
                                        Contact us today for a free consultation and quote. Start your journey to energy independence and
                                        say goodbye to load shedding.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link href="/contact">
                                        <Button className="bg-white text-green-600 hover:bg-gray-100 dark:bg-white dark:text-green-900">
                                            Get a Free Quote
                                        </Button>
                                    </Link>
                                    <Link href="/projects?category=residential">
                                        <Button
                                            variant="outline"
                                            className="text-white border-white hover:bg-green-700 dark:hover:bg-green-800"
                                        >
                                            View Residential Projects
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

