import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    // In a real application, you would fetch the blog post data based on the slug
    const post = {
        title: "The Benefits of Solar Energy for Homeowners",
        date: "March 15, 2023",
        author: "Sarah Johnson",
        authorRole: "CEO & Founder",
        authorImage: "/placeholder.svg?height=100&width=100",
        category: "Residential",
        image: "/placeholder.svg?height=600&width=1200",
        content: `
      <p>Solar energy has become increasingly popular among homeowners in recent years, and for good reason. The benefits of installing solar panels on your home extend far beyond just reducing your carbon footprint. In this article, we'll explore the many advantages of solar energy for homeowners.</p>
      
      <h2>Financial Benefits</h2>
      
      <p>One of the most compelling reasons to switch to solar energy is the potential for significant cost savings. Here's how solar can benefit you financially:</p>
      
      <ul>
        <li><strong>Lower electricity bills:</strong> By generating your own electricity, you can dramatically reduce or even eliminate your monthly electricity bills.</li>
        <li><strong>Protection against rising energy costs:</strong> Utility rates continue to rise each year. With solar, you lock in your energy costs and protect yourself from these increases.</li>
        <li><strong>Tax incentives and rebates:</strong> The federal government offers a 26% tax credit for solar systems installed through 2022, and many states and local utilities offer additional incentives.</li>
        <li><strong>Increased home value:</strong> Studies have shown that homes with solar panel systems sell for more than comparable homes without solar.</li>
      </ul>
      
      <h2>Environmental Benefits</h2>
      
      <p>Solar energy is clean, renewable, and abundant. By switching to solar, you're making a positive impact on the environment in several ways:</p>
      
      <ul>
        <li><strong>Reduced carbon footprint:</strong> Solar energy produces no harmful emissions or pollutants.</li>
        <li><strong>Conservation of natural resources:</strong> Unlike fossil fuels, solar energy is renewable and sustainable.</li>
        <li><strong>Reduced water usage:</strong> Traditional electricity production requires significant amounts of water, while solar does not.</li>
      </ul>
      
      <h2>Energy Independence</h2>
      
      <p>With solar panels on your roof, you become less dependent on the grid and utility companies:</p>
      
      <ul>
        <li><strong>Generate your own power:</strong> Produce electricity right where you use it.</li>
        <li><strong>Battery storage options:</strong> With battery systems, you can store excess energy for use during outages or at night.</li>
        <li><strong>Reduced vulnerability to outages:</strong> Systems with battery backup can keep essential appliances running during grid outages.</li>
      </ul>
      
      <h2>Low Maintenance</h2>
      
      <p>Solar panel systems require minimal maintenance:</p>
      
      <ul>
        <li><strong>No moving parts:</strong> This means less wear and tear and fewer things that can break.</li>
        <li><strong>Long warranties:</strong> Most solar panels come with 25-year warranties.</li>
        <li><strong>Simple cleaning:</strong> Occasional cleaning is typically all that's needed to keep your system running efficiently.</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>The benefits of solar energy for homeowners are clear: significant cost savings, environmental benefits, energy independence, and low maintenance requirements. With decreasing installation costs and generous incentives still available, there's never been a better time to consider making the switch to solar energy.</p>
      
      <p>If you're interested in learning more about how solar can benefit your specific situation, contact our team for a free consultation and personalized quote.</p>
    `,
        relatedPosts: [
            {
                title: "How Solar Panels Work: A Simple Explanation",
                excerpt:
                    "Learn about the science behind solar panels and how they convert sunlight into electricity for your home.",
                image: "/placeholder.svg?height=300&width=400",
                slug: "how-solar-panels-work",
            },
            {
                title: "Solar Tax Credits and Incentives: What You Need to Know",
                excerpt:
                    "A comprehensive guide to federal, state, and local incentives that can help reduce the cost of going solar.",
                image: "/placeholder.svg?height=300&width=400",
                slug: "solar-tax-credits-incentives",
            },
            {
                title: "Solar Battery Storage: Is It Right for You?",
                excerpt:
                    "Explore the advantages of adding battery storage to your solar system and determine if it's a good investment.",
                image: "/placeholder.svg?height=300&width=400",
                slug: "solar-battery-storage-guide",
            },
        ],
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-blue-50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <Link href="/blog" className="inline-flex items-center text-green-600 hover:text-green-700">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Blog
                        </Link>
                        <div className="space-y-2">
                            <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                                {post.category}
                            </div>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
                            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>{post.date}</span>
                                </div>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                    <User className="h-4 w-4" />
                                    <span>{post.author}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-10 overflow-hidden rounded-lg">
                            <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                width={1200}
                                height={600}
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="prose prose-green max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

                        {/* Share Section */}
                        <div className="mt-12 border-t pt-6">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={post.authorImage || "/placeholder.svg"}
                                        alt={post.author}
                                        width={60}
                                        height={60}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="font-bold">{post.author}</p>
                                        <p className="text-sm text-gray-500">{post.authorRole}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500">Share:</span>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <Facebook className="h-4 w-4" />
                                        <span className="sr-only">Share on Facebook</span>
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <Twitter className="h-4 w-4" />
                                        <span className="sr-only">Share on Twitter</span>
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <Linkedin className="h-4 w-4" />
                                        <span className="sr-only">Share on LinkedIn</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter">Related Articles</h2>
                            <p className="text-gray-500 md:text-xl">Continue exploring solar energy with these related articles.</p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {post.relatedPosts.map((relatedPost, index) => (
                            <Card key={index} className="overflow-hidden pt-0">
                                <div className="relative h-48">
                                    <Image
                                        src={relatedPost.image || "/placeholder.svg"}
                                        alt={relatedPost.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-bold">{relatedPost.title}</h3>
                                    <p className="text-sm text-gray-500 mt-2">{relatedPost.excerpt}</p>
                                    <Link
                                        href={`/blog/${relatedPost.slug}`}
                                        className="text-green-600 hover:underline text-sm mt-2 inline-block"
                                    >
                                        Read more
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-8 md:py-18 lg:py-24 bg-green-600 text-white">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Go Solar?</h2>
                            <p className="max-w-[600px] md:text-xl">
                                Contact us today for a free consultation and quote. Start your journey to energy independence.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link href="/contact">
                                <Button className="bg-white text-green-600 hover:bg-gray-100 cursor-pointer">Get a Free Quote</Button>
                            </Link>
                            {/*<Link href="/services">*/}
                            {/*    <Button variant="outline" className="text-white border-white hover:bg-green-700">*/}
                            {/*        Explore Our Services*/}
                            {/*    </Button>*/}
                            {/*</Link>*/}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

