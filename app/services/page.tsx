import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Home, Building2, Factory, Zap, Battery, BarChart3, Wrench } from "lucide-react"

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-blue-50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Solar Services</h1>
                            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                Comprehensive solar solutions tailored to your specific needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Tabs */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                <div className="container px-4 md:px-6">
                    <Tabs defaultValue="residential" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-8">
                            <TabsTrigger value="residential" className="text-sm sm:text-base">
                                Residential
                            </TabsTrigger>
                            <TabsTrigger value="commercial" className="text-sm sm:text-base">
                                Commercial
                            </TabsTrigger>
                            <TabsTrigger value="industrial" className="text-sm sm:text-base">
                                Industrial
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="residential">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                                <div className="flex items-center justify-center">
                                    <Image
                                        src="/placeholder.svg?height=550&width=550"
                                        alt="Residential solar installation"
                                        width={550}
                                        height={550}
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <div className="inline-flex items-center rounded-md bg-green-100 px-3 py-1 text-sm text-green-800">
                                            <Home className="mr-1 h-4 w-4" /> Residential
                                        </div>
                                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Home Solar Solutions</h2>
                                        <p className="text-gray-500 md:text-xl">
                                            Power your home with clean, renewable energy. Our residential solar solutions are designed to
                                            maximize efficiency and savings.
                                        </p>
                                    </div>
                                    <ul className="grid gap-2">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span>Rooftop solar panel installation</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span>Home battery storage systems</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span>Smart energy monitoring</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span>Solar roof tiles</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span>EV charging stations</span>
                                        </li>
                                    </ul>
                                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                        <Link href="/contact">
                                            <Button className="bg-green-600 hover:bg-green-700">Get a Quote</Button>
                                        </Link>
                                        <Link href="/projects?category=residential">
                                            <Button variant="outline">View Residential Projects</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="commercial">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                                <div className="flex items-center justify-center">
                                    <Image
                                        src="/placeholder.svg?height=550&width=550"
                                        alt="Commercial solar installation"
                                        width={550}
                                        height={550}
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <div className="inline-flex items-center rounded-md bg-blue-100 px-3 py-1 text-sm text-blue-800">
                                            <Building2 className="mr-1 h-4 w-4" /> Commercial
                                        </div>
                                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Business Solar Solutions</h2>
                                        <p className="text-gray-500 md:text-xl">
                                            Reduce operating costs and achieve sustainability goals with our commercial solar solutions.
                                        </p>
                                    </div>
                                    <ul className="grid gap-2">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span>Commercial rooftop installations</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span>Carport solar systems</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span>Commercial energy storage</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span>Power purchase agreements (PPAs)</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span>Energy management systems</span>
                                        </li>
                                    </ul>
                                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                        <Link href="/contact">
                                            <Button className="bg-green-600 hover:bg-green-700">Request Consultation</Button>
                                        </Link>
                                        <Link href="/projects?category=commercial">
                                            <Button variant="outline">View Commercial Projects</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="industrial">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                                <div className="flex items-center justify-center">
                                    <Image
                                        src="/placeholder.svg?height=550&width=550"
                                        alt="Industrial solar installation"
                                        width={550}
                                        height={550}
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <div className="inline-flex items-center rounded-md bg-amber-100 px-3 py-1 text-sm text-amber-800">
                                            <Factory className="mr-1 h-4 w-4" /> Industrial
                                        </div>
                                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Industrial Solar Solutions</h2>
                                        <p className="text-gray-500 md:text-xl">
                                            Large-scale solar solutions for industrial facilities and utility-scale projects.
                                        </p>
                                    </div>
                                    <ul className="grid gap-2">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span>Ground-mounted solar arrays</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span>Solar farms and utility-scale projects</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span>Microgrids and off-grid solutions</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span>Industrial energy storage systems</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span>Custom energy solutions for manufacturing</span>
                                        </li>
                                    </ul>
                                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                        <Link href="/contact">
                                            <Button className="bg-green-600 hover:bg-green-700">Schedule Meeting</Button>
                                        </Link>
                                        <Link href="/projects?category=industrial">
                                            <Button variant="outline">View Industrial Projects</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Additional Services */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Additional Services</h2>
                            <p className="max-w-[700px] text-gray-500 md:text-xl">
                                Beyond solar panel installation, we offer a range of complementary services.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <Zap className="h-10 w-10 text-green-600 mb-2" />
                                <CardTitle>Energy Efficiency Audits</CardTitle>
                                <CardDescription>
                                    Comprehensive assessment of your energy usage to identify opportunities for improvement.
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Link href="/services/energy-audits" className="text-green-600 hover:underline">
                                    Learn more
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Battery className="h-10 w-10 text-green-600 mb-2" />
                                <CardTitle>Battery Storage Solutions</CardTitle>
                                <CardDescription>Store excess energy for use during peak hours or power outages.</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Link href="/services/battery-storage" className="text-green-600 hover:underline">
                                    Learn more
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <BarChart3 className="h-10 w-10 text-green-600 mb-2" />
                                <CardTitle>Energy Monitoring</CardTitle>
                                <CardDescription>Real-time monitoring of your energy production and consumption.</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Link href="/services/energy-monitoring" className="text-green-600 hover:underline">
                                    Learn more
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Wrench className="h-10 w-10 text-green-600 mb-2" />
                                <CardTitle>Maintenance & Repairs</CardTitle>
                                <CardDescription>
                                    Regular maintenance and prompt repairs to keep your system running efficiently.
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Link href="/services/maintenance" className="text-green-600 hover:underline">
                                    Learn more
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Process</h2>
                            <p className="max-w-[700px] text-gray-500 md:text-xl">
                                From consultation to installation, we make going solar simple and straightforward.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col items-center text-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                                <span className="text-xl font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-bold">Consultation</h3>
                            <p className="text-gray-500 mt-2">We assess your energy needs and discuss your goals for going solar.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                                <span className="text-xl font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-bold">Design</h3>
                            <p className="text-gray-500 mt-2">
                                Our engineers design a custom solar solution tailored to your specific needs.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                                <span className="text-xl font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-bold">Installation</h3>
                            <p className="text-gray-500 mt-2">
                                Our experienced team installs your solar system with minimal disruption.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                                <span className="text-xl font-bold">4</span>
                            </div>
                            <h3 className="text-xl font-bold">Activation</h3>
                            <p className="text-gray-500 mt-2">We handle all permits and inspections, then activate your system.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                Ready to Harness the Power of the Sun?
                            </h2>
                            <p className="max-w-[600px] md:text-xl">
                                Contact us today for a free consultation and quote. Start your journey to energy independence.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link href="/contact">
                                <Button className="bg-white text-green-600 hover:bg-gray-100">Get Started Today</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

