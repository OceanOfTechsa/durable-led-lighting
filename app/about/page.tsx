import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Leaf } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import CountUp from "@/components/animations/count-up"
import SolarPulse from "@/components/animations/solar-pulse"
import PageTransition from "@/components/page-transition"

export default function AboutPage() {
    return (
        <PageTransition>
            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
                    <div className="container px-4 md:px-6">
                        <FadeIn>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Durable LED Lighting</h1>
                                    <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                        We're on a mission to accelerate the world's transition to sustainable energy.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Our Story */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                            <FadeIn direction="right">
                                <div className="flex items-center justify-center">
                                    <Image
                                        src="/placeholder.svg?height=550&width=550"
                                        alt="Our team installing solar panels"
                                        width={550}
                                        height={550}
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                            </FadeIn>
                            <FadeIn direction="left" delay={0.2}>
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                                        <p className="text-gray-500 md:text-xl">
                                            Founded in 2010, SolarPower Solutions began with a simple mission: to make clean, renewable energy
                                            accessible to everyone. What started as a small team of passionate engineers has grown into a
                                            leading provider of solar energy solutions.
                                        </p>
                                        <p className="text-gray-500 md:text-xl">
                                            Over the past decade, we've helped thousands of homeowners and businesses reduce their carbon
                                            footprint and energy costs through our innovative solar solutions. Our commitment to quality,
                                            sustainability, and customer satisfaction has made us a trusted name in the renewable energy
                                            industry.
                                        </p>
                                        <p className="text-gray-500 md:text-xl">
                                            We believe that the transition to renewable energy is not just an environmental necessity but also
                                            an economic opportunity. By harnessing the power of the sun, we can create a more sustainable and
                                            prosperous future for all.
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
                    <div className="container px-4 md:px-6">
                        <FadeIn>
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
                                    <p className="max-w-[700px] text-gray-500 md:text-xl">
                                        These core principles guide everything we do at SolarPower Solutions.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                        <StaggerChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
                            <Card className="flex flex-col items-center text-center py-6 px-3 hover:shadow-lg dark:bg-gray-950 hover:border hover:border-gray-100/30 transition-all duration-500 ease-in-out">
                                <Leaf className="h-12 w-12 text-green-600 mb-4" />
                                <h3 className="text-xl font-bold">Sustainability</h3>
                                <p className="text-gray-500 mt-2">
                                    We're committed to creating a cleaner, greener future for generations to come.
                                </p>
                            </Card>
                            <Card className="flex flex-col items-center text-center py-6 px-3 hover:shadow-lg dark:bg-gray-950 hover:border hover:border-gray-100/30 transition-all duration-500 ease-in-out">
                                <Award className="h-12 w-12 text-green-600 mb-4" />
                                <h3 className="text-xl font-bold">Excellence</h3>
                                <p className="text-gray-500 mt-2">
                                    We strive for excellence in every installation, product, and customer interaction.
                                </p>
                            </Card>
                            <Card className="flex flex-col items-center text-center py-6 px-3 hover:shadow-lg dark:bg-gray-950 hover:border hover:border-gray-100/30 transition-all duration-500 ease-in-out">
                                <Users className="h-12 w-12 text-green-600 mb-4" />
                                <h3 className="text-xl font-bold">Community</h3>
                                <p className="text-gray-500 mt-2">
                                    We believe in building stronger, more resilient communities through clean energy.
                                </p>
                            </Card>
                            <Card className="flex flex-col items-center text-center py-6 px-3 hover:shadow-lg dark:bg-gray-950 hover:border hover:border-gray-100/30 transition-all duration-500 ease-in-out">
                                <Clock className="h-12 w-12 text-green-600 mb-4" />
                                <h3 className="text-xl font-bold">Innovation</h3>
                                <p className="text-gray-500 mt-2">
                                    We continuously seek new technologies and methods to improve our solutions.
                                </p>
                            </Card>
                        </StaggerChildren>
                    </div>
                </section>

                {/* Our Team */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-900 to-green-900 dark:from-gray-950 dark:to-green-950 text-white pt-0 dark:bg-gray-950">
                    <div className="container px-4 md:px-6">
                        <FadeIn>
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
                                    <p className="max-w-[700px] text-gray-500 md:text-xl">
                                        Our experienced team of professionals is dedicated to providing the best solar solutions.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                        <StaggerChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                            <Card className="overflow-hidden group pt-0 dark:bg-gray-950">
                                <div className="overflow-hidden">
                                    <Image
                                        src="/placeholder.svg?height=400&width=400"
                                        alt="Team member - CEO"
                                        width={400}
                                        height={400}
                                        className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="text-xl font-bold">Sarah Johnson</h3>
                                    <p className="text-green-600">CEO & Founder</p>
                                    <p className="text-gray-500 mt-2">
                                        With over 15 years of experience in renewable energy, Sarah leads our company with vision and
                                        passion.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="overflow-hidden group pt-0 dark:bg-gray-950">
                                <div className="overflow-hidden">
                                    <Image
                                        src="/placeholder.svg?height=400&width=400"
                                        alt="Team member - CTO"
                                        width={400}
                                        height={400}
                                        className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="text-xl font-bold">Michael Chen</h3>
                                    <p className="text-green-600">Chief Technical Officer</p>
                                    <p className="text-gray-500 mt-2">
                                        Michael oversees all technical aspects of our solar installations, ensuring quality and efficiency.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="overflow-hidden group pt-0 dark:bg-gray-950">
                                <div className="overflow-hidden">
                                    <Image
                                        src="/placeholder.svg?height=400&width=400"
                                        alt="Team member - Operations Director"
                                        width={400}
                                        height={400}
                                        className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="text-xl font-bold">David Rodriguez</h3>
                                    <p className="text-green-600">Operations Director</p>
                                    <p className="text-gray-500 mt-2">
                                        David manages our day-to-day operations, ensuring smooth project execution and customer
                                        satisfaction.
                                    </p>
                                </CardContent>
                            </Card>
                        </StaggerChildren>
                    </div>
                </section>

                {/* Achievements */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-950">
                    <div className="container px-4 md:px-6">
                        <FadeIn>
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Achievements</h2>
                                    <p className="max-w-[700px] text-gray-500 md:text-xl">
                                        We're proud of the impact we've made in the renewable energy sector.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
                            <FadeIn delay={0.1}>
                                <div className="flex flex-col items-center text-center">
                                    <CountUp from={0} to={5000} suffix="+" className="text-4xl font-bold text-green-600" />
                                    <p className="text-gray-500">Installations Completed</p>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <div className="flex flex-col items-center text-center">
                                    <CountUp from={0} to={50} suffix="MW+" className="text-4xl font-bold text-green-600" />
                                    <p className="text-gray-500">Solar Capacity Installed</p>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.3}>
                                <div className="flex flex-col items-center text-center">
                                    <CountUp from={0} to={30000} suffix="+" className="text-4xl font-bold text-green-600" />
                                    <p className="text-gray-500">Tons of CO2 Offset Annually</p>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.4}>
                                <div className="flex flex-col items-center text-center">
                                    <CountUp from={0} to={15} suffix="+" className="text-4xl font-bold text-green-600" />
                                    <p className="text-gray-500">Industry Awards</p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full py-8 md:py-16 lg:py-24 bg-green-600 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
                        <SolarPulse size="xl" color="text-white" />
                    </div>
                    <div className="container px-4 md:px-6 relative z-10">
                        <FadeIn>
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                        Join Us in Creating a Sustainable Future
                                    </h2>
                                    <p className="max-w-[600px] md:text-xl">
                                        Ready to make the switch to clean, renewable energy? Contact us today to get started.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link href="/contact">
                                        <Button className="bg-white text-green-600 hover:bg-gray-100 cursor-pointer">Contact Us</Button>
                                    </Link>
                                    {/*<Link href="/services">*/}
                                    {/*    <Button variant="outline" className="text-white border-white hover:bg-green-700">*/}
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

