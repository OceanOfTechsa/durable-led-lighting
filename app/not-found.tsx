import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft, Sun } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import SolarPulse from "@/components/animations/solar-pulse"

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-1 flex items-center justify-center py-16 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-20 right-20 opacity-20">
                    <SolarPulse size="xl" />
                </div>
                <div className="absolute bottom-20 left-20 opacity-20">
                    <SolarPulse size="lg" />
                </div>

                <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <FadeIn>
                            <div className="mb-8">
                                <div className="relative w-40 h-40 mx-auto mb-6">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Sun className="h-32 w-32 text-green-600/20 dark:text-green-500/20" />
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-7xl font-bold text-gray-900 dark:text-white">404</span>
                                    </div>
                                </div>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-3 dark:text-white">Page Not Found</h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
                                    The page you're looking for doesn't exist or has been moved. Let's get you back on track to harnessing
                                    solar energy.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="grid gap-4 md:grid-cols-2 md:gap-8 max-w-md mx-auto">
                                <Link href="/">
                                    <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                                        <Home className="mr-2 h-4 w-4" />
                                        Back to Home
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button
                                        variant="outline"
                                        className="w-full dark:text-white dark:border-gray-700 dark:hover:bg-gray-800"
                                    >
                                        <Search className="mr-2 h-4 w-4" />
                                        Contact Support
                                    </Button>
                                </Link>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="mt-12 space-y-6">
                                <h2 className="text-xl font-bold dark:text-white">Popular Pages</h2>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {[
                                        { href: "/services", label: "Services" },
                                        { href: "/projects", label: "Projects" },
                                        { href: "/blog", label: "Blog" },
                                        { href: "/about", label: "About Us" },
                                        { href: "/contact", label: "Contact" },
                                    ].map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="mt-12">
                                <Link
                                    href="javascript:history.back()"
                                    className="inline-flex items-center text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400"
                                >
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Go Back to Previous Page
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </div>
    )
}

