"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Calendar, User, ArrowRight } from "lucide-react"
import {useState} from "react";

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const blogPosts = [
        {
            id: 1,
            title: "The Benefits of Solar Energy for Homeowners",
            excerpt: "Discover how solar energy can save you money, increase your property value, and help the environment.",
            date: "March 15, 2023",
            author: "Sarah Johnson",
            category: "Residential",
            image: "/placeholder.svg?height=400&width=600",
            slug: "benefits-of-solar-energy-homeowners",
        },
        {
            id: 2,
            title: "How Solar Panels Work: A Simple Explanation",
            excerpt:
                "Learn about the science behind solar panels and how they convert sunlight into electricity for your home.",
            date: "April 2, 2023",
            author: "Michael Chen",
            category: "Technology",
            image: "/placeholder.svg?height=400&width=600",
            slug: "how-solar-panels-work",
        },
        {
            id: 3,
            title: "Solar Tax Credits and Incentives: What You Need to Know",
            excerpt:
                "A comprehensive guide to federal, state, and local incentives that can help reduce the cost of going solar.",
            date: "May 10, 2023",
            author: "David Rodriguez",
            category: "Finance",
            image: "/placeholder.svg?height=400&width=600",
            slug: "solar-tax-credits-incentives",
        },
        {
            id: 4,
            title: "Commercial Solar: Boosting Your Business's Bottom Line",
            excerpt:
                "How businesses can benefit from solar energy through reduced operating costs and enhanced sustainability.",
            date: "June 18, 2023",
            author: "Emily Wilson",
            category: "Commercial",
            image: "/placeholder.svg?height=400&width=600",
            slug: "commercial-solar-business-benefits",
        },
        {
            id: 5,
            title: "Solar Battery Storage: Is It Right for You?",
            excerpt:
                "Explore the advantages of adding battery storage to your solar system and determine if it's a good investment.",
            date: "July 7, 2023",
            author: "James Thompson",
            category: "Technology",
            image: "/placeholder.svg?height=400&width=600",
            slug: "solar-battery-storage-guide",
        },
        {
            id: 6,
            title: "Maintaining Your Solar Panels: Tips and Best Practices",
            excerpt: "Learn how to keep your solar panels operating at peak efficiency with these maintenance tips.",
            date: "August 22, 2023",
            author: "Lisa Patel",
            category: "Maintenance",
            image: "/placeholder.svg?height=400&width=600",
            slug: "solar-panel-maintenance-tips",
        },
    ]

    const categories = ["All", "Residential", "Commercial", "Technology", "Finance", "Maintenance"]

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-blue-50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Solar Energy Blog</h1>
                            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                Stay informed with the latest news, tips, and insights about solar energy and sustainable living.
                            </p>
                        </div>
                        <div className="w-full max-w-sm space-y-2">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                                <Input type="search" placeholder="Search articles..." className="w-full bg-white pl-8 shadow-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="w-full py-6 bg-white border-b">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer ${category === selectedCategory
                                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                        : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                                }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                                Featured Article
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Future of Solar Energy</h2>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
                        <div className="relative overflow-hidden rounded-lg">
                            <Image
                                src="/placeholder.svg?height=600&width=800"
                                alt="Solar panels on a modern building"
                                width={800}
                                height={600}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Calendar className="h-4 w-4" />
                                    <span>March 1, 2023</span>
                                    <span>•</span>
                                    <User className="h-4 w-4" />
                                    <span>Sarah Johnson</span>
                                </div>
                                <p className="text-gray-500 md:text-lg">
                                    Explore the exciting developments in solar technology that are shaping the future of renewable energy.
                                    From more efficient panels to innovative storage solutions, the solar industry is evolving rapidly.
                                </p>
                                <p className="text-gray-500 md:text-lg">
                                    In this comprehensive article, we discuss emerging trends, breakthrough technologies, and what these
                                    advancements mean for homeowners and businesses looking to invest in solar energy.
                                </p>
                            </div>
                            <div>
                                <Link href="/blog/future-of-solar-energy">
                                    <Button className="bg-green-600 hover:bg-green-700">Read Full Article</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest Articles</h2>
                            <p className="max-w-[700px] text-gray-500 md:text-xl">
                                Stay up-to-date with the latest news and insights from the world of solar energy.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post) => (
                            <Card key={post.id} className="overflow-hidden pt-0">
                                <div className="relative h-48">
                                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                                    <div className="absolute top-2 left-2">
                                        <span className="inline-block rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                          {post.category}
                                        </span>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle>{post.title}</CardTitle>
                                    <CardDescription className="flex items-center gap-2 text-sm">
                                        <Calendar className="h-3.5 w-3.5" />
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <User className="h-3.5 w-3.5" />
                                        <span>{post.author}</span>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-500">{post.excerpt}</p>
                                </CardContent>
                                <CardFooter>
                                    <Link href={`/blog/${post.slug}`} className="text-green-600 inline-flex items-center group">
                                        Read more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                    <div className="flex justify-center mt-12">
                        <Button variant="outline" className="cursor-pointer">Load More Articles</Button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
                            <p className="max-w-[600px] md:text-xl">
                                Stay informed with the latest solar news, tips, and special offers delivered directly to your inbox.
                            </p>
                        </div>
                        <div className="mx-auto w-full max-w-md space-y-2">
                            <form className="flex flex-col sm:flex-row gap-2">
                                <Input type="email" placeholder="Enter your email" className="bg-white flex-1" />
                                <Button type="submit" className="bg-white text-green-600 hover:bg-gray-100">
                                    Subscribe
                                </Button>
                            </form>
                            <p className="text-sm text-green-100">We respect your privacy. Unsubscribe at any time.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

