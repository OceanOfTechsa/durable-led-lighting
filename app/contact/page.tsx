"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // In a real application, you would handle the form submission here
        setFormSubmitted(true)
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-blue-50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                Have questions about solar energy? We're here to help. Reach out to our team today.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form and Info */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-6">
                        {/* Contact Form */}
                        <div>
                            <Card className="border-none shadow-lg">
                                <CardContent className="p-6">
                                    {formSubmitted ? (
                                        <div className="flex flex-col items-center justify-center space-y-4 text-center py-12">
                                            <CheckCircle className="h-16 w-16 text-green-600" />
                                            <h2 className="text-2xl font-bold">Thank You!</h2>
                                            <p className="text-gray-500">Your message has been received. We'll get back to you shortly.</p>
                                            <Button onClick={() => setFormSubmitted(false)} className="bg-green-600 hover:bg-green-700">
                                                Send Another Message
                                            </Button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="space-y-2">
                                                <h2 className="text-2xl font-bold">Get in Touch</h2>
                                                <p className="text-gray-500">
                                                    Fill out the form below and our team will get back to you as soon as possible.
                                                </p>
                                            </div>
                                            <div className="grid gap-4 sm:grid-cols-2">
                                                <div className="space-y-2">
                                                    <Label htmlFor="first-name">First name</Label>
                                                    <Input id="first-name" placeholder="John" required />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="last-name">Last name</Label>
                                                    <Input id="last-name" placeholder="Doe" required />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email</Label>
                                                <Input id="email" type="email" placeholder="john.doe@example.com" required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone</Label>
                                                <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>I'm interested in:</Label>
                                                <RadioGroup defaultValue="residential">
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="residential" id="residential" />
                                                        <Label htmlFor="residential">Residential Solar</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="commercial" id="commercial" />
                                                        <Label htmlFor="commercial">Commercial Solar</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="industrial" id="industrial" />
                                                        <Label htmlFor="industrial">Industrial Solar</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="other" id="other" />
                                                        <Label htmlFor="other">Other Services</Label>
                                                    </div>
                                                </RadioGroup>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="how-heard">How did you hear about us?</Label>
                                                <Select>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select an option" />
                                                    </SelectTrigger>
                                                    <SelectContent className="w-full">
                                                        <SelectItem value="search">Search Engine</SelectItem>
                                                        <SelectItem value="social">Social Media</SelectItem>
                                                        <SelectItem value="friend">Friend/Family</SelectItem>
                                                        <SelectItem value="ad">Advertisement</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="message">Message</Label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Tell us about your project or any questions you have..."
                                                    className="min-h-[120px]"
                                                    required
                                                />
                                            </div>
                                            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                                                Send Message
                                            </Button>
                                        </form>
                                    )}
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Information */}
                        <div className="flex flex-col space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold">Contact Information</h2>
                                <p className="text-gray-500">
                                    Have questions or need assistance? Reach out to us using any of the methods below.
                                </p>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2">
                                <Card className="border-none shadow-md">
                                    <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                                        <MapPin className="h-10 w-10 text-green-600 mb-2" />
                                        <h3 className="text-lg font-bold">Our Location</h3>
                                        <p className="text-gray-500">
                                            123 Solar Way
                                            <br />
                                            Sunshine City, SC 12345
                                            <br />
                                            United States
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="border-none shadow-md">
                                    <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                                        <Phone className="h-10 w-10 text-green-600 mb-2" />
                                        <h3 className="text-lg font-bold">Phone</h3>
                                        <p className="text-gray-500">
                                            (555) 123-4567
                                            <br />
                                            Monday - Friday, 8am - 6pm
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="border-none shadow-md">
                                    <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                                        <Mail className="h-10 w-10 text-green-600 mb-2" />
                                        <h3 className="text-lg font-bold">Email</h3>
                                        <p className="text-gray-500">
                                            info@solarpowersolutions.com
                                            <br />
                                            support@solarpowersolutions.com
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="border-none shadow-md">
                                    <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                                        <Clock className="h-10 w-10 text-green-600 mb-2" />
                                        <h3 className="text-lg font-bold">Business Hours</h3>
                                        <p className="text-gray-500">
                                            Monday - Friday: 8am - 6pm
                                            <br />
                                            Saturday: 9am - 2pm
                                            <br />
                                            Sunday: Closed
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-lg font-bold mb-4">Our Location</h3>
                                <div className="rounded-lg overflow-hidden h-[300px] w-full bg-gray-200">
                                    <Image
                                        src="/placeholder.svg?height=600&width=800"
                                        alt="Map location"
                                        width={800}
                                        height={600}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <p className="text-sm text-gray-500 mt-2">
                                    Interactive map would be embedded here in a production environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                            <p className="max-w-[700px] text-gray-500 md:text-xl">
                                Find answers to common questions about solar energy and our services.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-bold mb-2">How much does a solar system cost?</h3>
                                <p className="text-gray-500">
                                    The cost of a solar system depends on various factors including system size, equipment, and
                                    installation requirements. We offer free consultations to provide you with an accurate quote based on
                                    your specific needs.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-bold mb-2">How long does installation take?</h3>
                                <p className="text-gray-500">
                                    Most residential installations can be completed in 1-3 days, while commercial projects may take longer
                                    depending on the system size and complexity.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-bold mb-2">What incentives are available for solar?</h3>
                                <p className="text-gray-500">
                                    There are various federal, state, and local incentives available, including the Federal Investment Tax
                                    Credit (ITC), state rebates, and net metering programs. Our team can help you identify all available
                                    incentives.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-bold mb-2">Do solar panels work during power outages?</h3>
                                <p className="text-gray-500">
                                    Standard grid-tied solar systems will shut down during a power outage for safety reasons. However,
                                    systems with battery backup can continue to provide power during outages.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Solar Journey?</h2>
                            <p className="max-w-[600px] md:text-xl">
                                Contact us today for a free consultation and quote. Our team is ready to help you harness the power of
                                the sun.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button className="bg-white text-green-600 hover:bg-gray-100">Get a Free Quote</Button>
                            <Button variant="outline" className="text-white border-white hover:bg-green-700">
                                Learn More About Solar
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

