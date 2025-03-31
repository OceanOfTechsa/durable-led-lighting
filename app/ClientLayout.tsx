"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import { Sun, Menu, X, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import "./globals.css"
import ScrollToTop from "@/components/animations/scroll-to-top";
import {usePathname} from "next/navigation";
import {ThemeToggle} from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
                                         children,
                                     }: Readonly<{
    children: React.ReactNode
}>) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname()
    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        // Prevent scrolling when menu is open
        if (!isMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    }

    const menuItemVariants = {
        closed: { opacity: 0, x: 20 },
        open: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            },
        }),
    }

    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ]

    const isActive = (path: string) => {
        if (path === "/" && pathname === "/") return true
        return path !== "/" && pathname.startsWith(path);

    }
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <div className="flex flex-col min-h-screen">
                <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-5">
                    <div className="container flex h-16 items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Link href="/" className="flex items-center space-x-2">
                                <Sun className="h-6 w-6 text-green-600" />
                                <span className="font-bold text-xl">Durable LED Lighting</span>
                            </Link>
                        </div>
                        <nav className="hidden md:flex gap-6">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`text-sm font-medium transition-colors relative group ${isActive(item.href) ? "text-green-600 dark:text-green-500"
                                            : "text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500"
                                    }`}
                                >
                                    {item.label}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-600 dark:bg-green-500 transition-all ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
                                </Link>
                            ))}
                        </nav>
                        <div className="flex items-center gap-2">
                            <ThemeToggle />
                            <Link href="/contact" className="hidden md:inline-flex">
                                <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white cursor-pointer">
                                    Get a Quote
                                </Button>
                            </Link>
                            <Button variant="ghost" size="icon" className="md:hidden cursor-pointer" onClick={toggleMenu}>
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </div>
                    </div>
                </header>

                {/* Mobile Menu */}
                {mounted && (
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={menuVariants}
                                className="fixed inset-0 z-40 bg-white pt-16 px-4 md:hidden"
                            >
                                <div className="flex flex-col space-y-6 py-8">
                                    {menuItems.map((item, i) => (
                                        <motion.div
                                            key={item.label}
                                            custom={i}
                                            variants={menuItemVariants}
                                            initial="closed"
                                            animate="open"
                                            exit="closed"
                                        >
                                            <Link
                                                href={item.href}
                                                className="text-2xl font-medium hover:text-green-600 transition-colors"
                                                onClick={toggleMenu}
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                    <motion.div
                                        custom={menuItems.length}
                                        variants={menuItemVariants}
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                    >
                                        <Link href="/contact" onClick={toggleMenu}>
                                            <Button className="w-full bg-green-600 hover:bg-green-700">Get a Quote</Button>
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                )}

                <main className="flex-1">{children}</main>
                <footer className="border-t bg-gray-50">
                    <div className="container px-4 py-8 md:px-6 md:py-12">
                        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <Sun className="h-6 w-6 text-green-600" />
                                    <span className="font-bold text-xl dark:text-black">Durable LED Lighting</span>
                                </div>
                                <p className="text-sm text-gray-500">
                                    Sustainable energy solutions for homes and businesses. Reduce your carbon footprint and save on
                                    energy costs.
                                </p>
                                <div className="flex space-x-4">
                                    <Link href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                                        <Facebook className="h-5 w-5" />
                                        <span className="sr-only">Facebook</span>
                                    </Link>
                                    <Link href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                                        <Twitter className="h-5 w-5" />
                                        <span className="sr-only">Twitter</span>
                                    </Link>
                                    <Link href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                                        <Instagram className="h-5 w-5" />
                                        <span className="sr-only">Instagram</span>
                                    </Link>
                                    <Link href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                                        <Linkedin className="h-5 w-5" />
                                        <span className="sr-only">LinkedIn</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold dark:text-black">Quick Links</h3>
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li>
                                        <Link href="/" className="hover:text-green-600 transition-colors">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="hover:text-green-600 transition-colors">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services" className="hover:text-green-600 transition-colors">
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog" className="hover:text-green-600 transition-colors">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="hover:text-green-600 transition-colors">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold dark:text-black">Services</h3>
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li>
                                        <Link href="/services#residential" className="hover:text-green-600 transition-colors">
                                            Residential Solar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services#commercial" className="hover:text-green-600 transition-colors">
                                            Commercial Solar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services#industrial" className="hover:text-green-600 transition-colors">
                                            Industrial Solar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services#battery" className="hover:text-green-600 transition-colors">
                                            Battery Storage
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services#maintenance" className="hover:text-green-600 transition-colors">
                                            Maintenance
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold dark:text-black">Contact Us</h3>
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li className="flex items-start space-x-2">
                                        <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                                        <span>
                                          123 Solar Way
                                          <br />
                                          Sunshine City, SC 12345
                                          <br />
                                          United States
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <Phone className="h-5 w-5 text-green-600" />
                                        <span>(555) 123-4567</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <Mail className="h-5 w-5 text-green-600" />
                                        <span>info@solarpowersolutions.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500 dark:border-gray-200">
                            <p>Expertly crafted by <Link href="https://oceanoftechsa.com" target="_blank" className="text-sky-500">Ocean of Tech</Link>. © {new Date().getFullYear()} Durable LED Lighting. All rights reserved.</p>
                            <div className="mt-2 flex justify-center space-x-4">
                                <Link href="/privacy-policy" className="hover:text-green-600 transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms-of-service" className="hover:text-green-600 transition-colors">
                                    Terms of Service
                                </Link>
                                <Link href="/sitemap" className="hover:text-green-600 transition-colors">
                                    Sitemap
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
                <ScrollToTop />
            </div>
        </ThemeProvider>
        </body>
        </html>
    )
}

