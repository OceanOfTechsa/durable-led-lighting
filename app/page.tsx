import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Sun, Battery, BarChart3 } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import SolarPulse from "@/components/animations/solar-pulse"
import ParallaxSection from "@/components/animations/parallax-section"
import PageTransition from "@/components/page-transition"
import CountUp from "@/components/animations/count-up"

export default function HomePage() {
  return (
      <PageTransition>
        <div className="flex flex-col min-h-screen">
          {/* Hero Section */}
          <section className="w-full py-10 md:py-20 lg:py-28 xl:py-36 bg-gradient-to-b from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
            <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
                <FadeIn direction="right" duration={0.7}>
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none dark:text-white">
                        Harness the Power of the African Sun
                      </h1>
                      <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                        Sustainable energy solutions for homes and businesses across South Africa. Reduce your carbon
                        footprint and save on energy costs with our premium solar installations.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Link href="/contact">
                        <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 cursor-pointer text-white">
                          Get a Free Quote
                        </Button>
                      </Link>
                      <Link href="/services">
                        <Button variant="outline" className="dark:text-white dark:border-gray-700 dark:hover:bg-gray-800 cursor-pointer">
                          Explore Services
                        </Button>
                      </Link>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn direction="left" duration={0.7} delay={0.2}>
                  <div className="flex items-center justify-center relative">
                    <div className="absolute -top-10 -right-10 opacity-30">
                      <SolarPulse size="xl" />
                    </div>
                    <Image
                        src="/placeholder.svg?height=550&width=550"
                        alt="Solar panels on a modern South African home"
                        width={550}
                        height={550}
                        className="rounded-lg object-cover relative z-10"
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
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm text-green-800 dark:text-green-400">
                      Why Choose Us
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-white">
                      Clean Energy for a Better South Africa
                    </h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Our solar solutions are designed to maximize efficiency and minimize environmental impact while
                      addressing South Africa's energy challenges.
                    </p>
                  </div>
                </div>
              </FadeIn>
              <StaggerChildren className="mx-auto grid max-w-5xl items-center gap-6 py-10 lg:grid-cols-3 lg:gap-12">
                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 dark:bg-gray-900 dark:shadow-gray-900/30">
                  <CardHeader>
                    <Sun className="h-10 w-10 text-green-600 dark:text-green-500" />
                    <CardTitle className="dark:text-white">Renewable Energy</CardTitle>
                    <CardDescription className="dark:text-gray-400">
                      Harness clean, renewable energy from the abundant South African sun to power your home or business.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 dark:bg-gray-900 dark:shadow-gray-900/30">
                  <CardHeader>
                    <Battery className="h-10 w-10 text-green-600 dark:text-green-500" />
                    <CardTitle className="dark:text-white">Energy Storage</CardTitle>
                    <CardDescription className="dark:text-gray-400">
                      Store excess energy with our advanced battery solutions to keep your power on during load shedding.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 dark:bg-gray-900 dark:shadow-gray-900/30">
                  <CardHeader>
                    <BarChart3 className="h-10 w-10 text-green-600 dark:text-green-500" />
                    <CardTitle className="dark:text-white">Energy Monitoring</CardTitle>
                    <CardDescription className="dark:text-gray-400">
                      Track your energy production and consumption with our smart monitoring systems.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </StaggerChildren>
            </div>
          </section>

          {/* Benefits Section */}
          <ParallaxSection className="w-full py-10 md:py-16 lg:py-24 bg-gray-50 dark:bg-gray-900" speed={0.1}>
            <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <FadeIn direction="right">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                        Benefits of Solar Energy in South Africa
                      </h2>
                      <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Switching to solar power offers numerous advantages for South African homeowners and businesses.
                      </p>
                    </div>
                    <StaggerChildren>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500" />
                          <span className="dark:text-gray-300">Protection from load shedding and power outages</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500" />
                          <span className="dark:text-gray-300">Reduce or eliminate your Eskom electricity bills</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500" />
                          <span className="dark:text-gray-300">Take advantage of tax incentives for businesses</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500" />
                          <span className="dark:text-gray-300">Increase property value</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500" />
                          <span className="dark:text-gray-300">Reduce carbon footprint</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500" />
                          <span className="dark:text-gray-300">Energy independence and security</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500" />
                          <span className="dark:text-gray-300">Low maintenance costs</span>
                        </li>
                      </ul>
                    </StaggerChildren>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Link href="/services">
                        <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 cursor-pointer text-white">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn direction="left" delay={0.2}>
                  <div className="flex items-center justify-center">
                    <Image
                        src="/placeholder.svg?height=550&width=550"
                        alt="Solar panel installation on a South African home"
                        width={550}
                        height={550}
                        className="rounded-lg object-cover"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </ParallaxSection>

          {/* Parallax Technology Section */}
          <section className="relative w-full py-8 md:py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-blue-900 to-green-900 dark:from-gray-950 dark:to-green-950 text-white">
            {/* Parallax Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <ParallaxSection speed={0.2} direction="up" className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 opacity-10">
                  <SolarPulse size="xl" color="text-yellow-300" />
                </div>
                <div className="absolute top-1/4 right-1/4 opacity-10">
                  <SolarPulse size="lg" color="text-yellow-300" />
                </div>
                <div className="absolute bottom-1/3 left-1/3 opacity-10">
                  <SolarPulse size="md" color="text-yellow-300" />
                </div>
                <div className="absolute bottom-1/4 right-1/5 opacity-10">
                  <SolarPulse size="lg" color="text-yellow-300" />
                </div>
              </ParallaxSection>
              <ParallaxSection speed={0.1} direction="down" className="absolute top-0 left-0 w-full h-full">
                <div className="grid grid-cols-6 gap-8 opacity-5">
                  {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="h-24 bg-white rounded-md"></div>
                  ))}
                </div>
              </ParallaxSection>
            </div>

            {/* Content */}
            <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto relative z-10">
              <div className="max-w-5xl mx-auto">
                <FadeIn>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
                    The Future of Energy in South Africa is Here
                  </h2>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-12 items-center mt-10">
                  <ParallaxSection speed={0.15} direction="right">
                    <div className="relative rounded-lg overflow-hidden shadow-2xl">
                      <Image
                          src="/placeholder.svg?height=600&width=600"
                          alt="Advanced solar panel technology"
                          width={600}
                          height={600}
                          className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white">Advanced Photovoltaic Technology</h3>
                          <p className="text-white/80 text-sm mt-2">
                            Our panels convert up to 23% of sunlight into electricity
                          </p>
                        </div>
                      </div>
                    </div>
                  </ParallaxSection>

                  <div className="space-y-6">
                    <FadeIn direction="left" delay={0.2}>
                      <h3 className="text-2xl font-bold text-green-300 dark:text-green-400">
                        Cutting-Edge Solar Technology
                      </h3>
                      <p className="text-white/80">
                        Our solar solutions utilize the latest advancements in photovoltaic technology, ensuring maximum
                        efficiency even in South Africa's varied climate conditions. With monocrystalline silicon cells
                        and anti-reflective coatings, our panels capture more sunlight throughout the day.
                      </p>
                    </FadeIn>

                    <StaggerChildren delay={0.4} staggerDelay={0.1}>
                      <div className="grid gap-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-green-500/20 p-2 rounded-full mt-1">
                            <CheckCircle className="h-5 w-5 text-green-300 dark:text-green-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-green-200 dark:text-green-300">High Efficiency Panels</h4>
                            <p className="text-white/70 text-sm">
                              Convert up to 23% of sunlight into usable electricity, perfect for South Africa's abundant
                              sunshine
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="bg-green-500/20 p-2 rounded-full mt-1">
                            <CheckCircle className="h-5 w-5 text-green-300 dark:text-green-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-green-200 dark:text-green-300">Weather Resistant</h4>
                            <p className="text-white/70 text-sm">
                              Engineered to withstand South Africa's diverse climate conditions including intense heat,
                              storms, and coastal environments
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="bg-green-500/20 p-2 rounded-full mt-1">
                            <CheckCircle className="h-5 w-5 text-green-300 dark:text-green-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-green-200 dark:text-green-300">Load Shedding Protection</h4>
                            <p className="text-white/70 text-sm">
                              Integrated battery systems to keep your power on during Eskom outages and load shedding
                            </p>
                          </div>
                        </div>
                      </div>
                    </StaggerChildren>
                  </div>
                </div>

                {/* Environmental Impact Stats */}
                <div className="mt-20 text-center">
                  <FadeIn>
                    <h3 className="text-2xl md:text-3xl font-bold mb-10">
                      Environmental Impact of Solar Energy in South Africa
                    </h3>
                  </FadeIn>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    <FadeIn delay={0.1}>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-gray-800/30">
                        <div className="text-4xl font-bold text-green-300 dark:text-green-400 mb-2">
                          <CountUp from={0} to={90} suffix="%" />
                        </div>
                        <p className="text-sm text-white/80">Reduction in carbon footprint compared to coal power</p>
                      </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-gray-800/30">
                        <div className="text-4xl font-bold text-green-300 dark:text-green-400 mb-2">
                          <CountUp from={0} to={25} suffix="+" />
                        </div>
                        <p className="text-sm text-white/80">Years of clean energy production</p>
                      </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-gray-800/30">
                        <div className="text-4xl font-bold text-green-300 dark:text-green-400 mb-2">
                          <CountUp from={0} to={1500} />
                        </div>
                        <p className="text-sm text-white/80">Trees equivalent saved per installation annually</p>
                      </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-gray-800/30">
                        <div className="text-4xl font-bold text-green-300 dark:text-green-400 mb-2">
                          <CountUp from={0} to={100} suffix="%" />
                        </div>
                        <p className="text-sm text-white/80">Recyclable components</p>
                      </div>
                    </FadeIn>
                  </div>
                </div>

                {/* CTA Button */}
                <FadeIn className="mt-14 text-center">
                  <Link href="/services">
                    <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg dark:bg-green-600 dark:hover:bg-green-700 cursor-pointer">
                      Explore Our Solar Technology
                    </Button>
                  </Link>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Recent Projects */}
          <section className="w-full py-10 md:py-16 lg:py-24 bg-white dark:bg-gray-950">
            <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
              <FadeIn>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-white">Recent Projects</h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Take a look at some of our recent solar installations across South Africa.
                    </p>
                  </div>
                </div>
              </FadeIn>
              <StaggerChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group dark:bg-gray-900 dark:border-gray-800 pt-0">
                  <div className="overflow-hidden">
                    <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Residential solar installation in Durban"
                        width={400}
                        height={300}
                        className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold dark:text-white">Residential Installation</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">10kW system in Umhlanga, Durban</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      This residential installation provides enough power for the entire home and includes battery backup
                      for load shedding protection.
                    </p>
                    <Link
                        href="/projects/residential-umhlanga"
                        className="text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400 text-sm mt-3 inline-flex items-center group"
                    >
                      View Project <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group dark:bg-gray-900 dark:border-gray-800 pt-0">
                  <div className="overflow-hidden">
                    <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Commercial solar installation in Johannesburg"
                        width={400}
                        height={300}
                        className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold dark:text-white">Commercial Project</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">50kW system for business in Sandton</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      This commercial installation helps reduce operating costs and provides energy security during load
                      shedding.
                    </p>
                    <Link
                        href="/projects/commercial-sandton"
                        className="text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400 text-sm mt-3 inline-flex items-center group"
                    >
                      View Project <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group dark:bg-gray-900 dark:border-gray-800 pt-0">
                  <div className="overflow-hidden">
                    <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Solar farm installation in Western Cape"
                        width={400}
                        height={300}
                        className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold dark:text-white">Solar Farm</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      2MW community solar project in Western Cape
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      This community solar farm provides clean energy to hundreds of homes in the area through a
                      subscription model.
                    </p>
                    <Link href="/projects/solar-farm-western-cape"
                        className="text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400 text-sm mt-3 inline-flex items-center group"
                    >
                      View Project <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </StaggerChildren>
              <FadeIn>
                <div className="flex justify-center mt-8">
                  <Link href="/projects">
                    <Button variant="outline" className="gap-1 group dark:text-white dark:border-gray-700 dark:hover:bg-gray-800 cursor-pointer">
                      View All Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 cursor-pointer" />
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-10 md:py-16 lg:py-24 bg-green-600 dark:bg-green-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
              <SolarPulse size="xl" color="text-white" />
            </div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 opacity-10">
              <SolarPulse size="xl" color="text-white" />
            </div>
            <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto relative z-10">
              <FadeIn>
                <div className="flex flex-col items-center justify-center space-y-4 text-center py-0">
                  <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Go Solar?</h2>
                    <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                      Contact us today for a free consultation and quote. Start your journey to energy independence and
                      say goodbye to load shedding.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/contact">
                      <Button className="bg-white text-green-600 hover:bg-gray-100 dark:bg-white dark:text-green-900 cursor-pointer">
                        Get Started Today
                      </Button>
                    </Link>
                    {/*<Link href="/about">*/}
                    {/*  <Button variant="outline" className="text-white border-white hover:bg-green-700 dark:hover:bg-green-800"*/}
                    {/*  >*/}
                    {/*    Learn More About Us*/}
                    {/*  </Button>*/}
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