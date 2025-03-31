import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageTransition from "@/components/page-transition"
import FadeIn from "@/components/animations/fade-in"

export default function PrivacyPolicyPage() {
    return (
        <PageTransition>
            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="w-full py-10 md:py-16 lg:py-20 bg-gradient-to-b from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
                    <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-white">Privacy Policy</h1>
                                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Last updated:{" "}
                                    {new Date().toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Privacy Policy Content */}
                <section className="w-full py-10 md:py-16 lg:py-20 bg-white dark:bg-gray-950">
                    <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-4xl mx-auto">
                        <FadeIn>
                            <div className="prose max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300">
                                <h2>Introduction</h2>
                                <p>
                                    Ilanga Solar Solutions ("we", "our", or "us") respects your privacy and is committed to protecting
                                    your personal data. This privacy policy will inform you about how we look after your personal data
                                    when you visit our website and tell you about your privacy rights and how the law protects you.
                                </p>

                                <h2>The Data We Collect About You</h2>
                                <p>
                                    Personal data, or personal information, means any information about an individual from which that
                                    person can be identified. We may collect, use, store and transfer different kinds of personal data
                                    about you which we have grouped together as follows:
                                </p>
                                <ul>
                                    <li>
                                        <strong>Identity Data</strong> includes first name, last name, username or similar identifier,
                                        title.
                                    </li>
                                    <li>
                                        <strong>Contact Data</strong> includes billing address, delivery address, email address and
                                        telephone numbers.
                                    </li>
                                    <li>
                                        <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser
                                        type and version, time zone setting and location, browser plug-in types and versions, operating
                                        system and platform, and other technology on the devices you use to access this website.
                                    </li>
                                    <li>
                                        <strong>Usage Data</strong> includes information about how you use our website, products and
                                        services.
                                    </li>
                                    <li>
                                        <strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing
                                        from us and our third parties and your communication preferences.
                                    </li>
                                </ul>

                                <h2>How We Use Your Personal Data</h2>
                                <p>
                                    We will only use your personal data when the law allows us to. Most commonly, we will use your
                                    personal data in the following circumstances:
                                </p>
                                <ul>
                                    <li>
                                        Where we need to perform the contract we are about to enter into or have entered into with you.
                                    </li>
                                    <li>
                                        Where it is necessary for our legitimate interests (or those of a third party) and your interests
                                        and fundamental rights do not override those interests.
                                    </li>
                                    <li>Where we need to comply with a legal obligation.</li>
                                </ul>

                                <h2>Data Security</h2>
                                <p>
                                    We have put in place appropriate security measures to prevent your personal data from being
                                    accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we
                                    limit access to your personal data to those employees, agents, contractors and other third parties who
                                    have a business need to know.
                                </p>

                                <h2>Data Retention</h2>
                                <p>
                                    We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we
                                    collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or
                                    reporting requirements.
                                </p>

                                <h2>Your Legal Rights</h2>
                                <p>
                                    Under certain circumstances, you have rights under data protection laws in relation to your personal
                                    data, including the right to:
                                </p>
                                <ul>
                                    <li>Request access to your personal data.</li>
                                    <li>Request correction of your personal data.</li>
                                    <li>Request erasure of your personal data.</li>
                                    <li>Object to processing of your personal data.</li>
                                    <li>Request restriction of processing your personal data.</li>
                                    <li>Request transfer of your personal data.</li>
                                    <li>Right to withdraw consent.</li>
                                </ul>

                                <h2>Contact Us</h2>
                                <p>
                                    If you have any questions about this privacy policy or our privacy practices, please contact us at:
                                </p>
                                <p>
                                    <strong>Email:</strong> privacy@ilangasolar.co.za
                                    <br />
                                    <strong>Phone:</strong> +27 31 123 4567
                                    <br />
                                    <strong>Address:</strong> 123 Umhlanga Drive, Durban, 4319, South Africa
                                </p>
                            </div>

                            <div className="mt-10 flex justify-center">
                                <Link href="/contact">
                                    <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                                        Contact Us With Questions
                                    </Button>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}

