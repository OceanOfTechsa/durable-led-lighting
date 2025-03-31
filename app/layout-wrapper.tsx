"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sun, Menu, X, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ScrollToTop from "@/components/animations/scroll-to-top"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LayoutWrapper({
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
        if (path !== "/" && pathname.startsWith(path)) return true
        return false
    }

    return (
        <div className="flex flex-col min-h-screen dark:bg-gray-950">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-gray-950/95 dark:border-gray-800">
                <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center space-x-2">
                            <Sun className="h-6 w-6 text-green-600 dark:text-green-500" />
                            <span className="font-bold text-xl dark:text-white">Ilanga Solar Solutions</span>
                        </Link>
                    </div>
                    <nav className="hidden md:flex gap-6">
                        {menuItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`text-sm font-medium transition-colors relative group 
                  ${
                                    isActive(item.href)
                                        ? "text-green-600 dark:text-green-500"
                                        : "text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500"
                                }`}
                            >
                                {item.label}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-green-600 dark:bg-green-500 transition-all 
                    ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}`}
                                ></span>
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <Link href="/contact" className="hidden md:inline-flex">
                            <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                                Get a Quote
                            </Button>
                        </Link>
                        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
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
                            className="fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-16 px-4 md:hidden"
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
                                            className={`text-2xl font-medium transition-colors ${isActive(item.href) ? "text-green-600 dark:text-green-500"
                                                    : "text-gray-700 hover:text-green-600 dark:text-white dark:hover:text-green-500"
                                            }`}
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
                                        <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                                            Get a Quote
                                        </Button>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}

            <main className="flex-1">{children}</main>
            <footer className="border-t bg-gray-50 dark:bg-gray-900 dark:border-gray-800">
                <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto py-8 md:py-12">
                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Sun className="h-6 w-6 text-green-600 dark:text-green-500" />
                                <span className="font-bold text-xl dark:text-white">Ilanga Solar Solutions</span>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Sustainable energy solutions for homes and businesses. Reduce your carbon footprint and save on energy
                                costs.
                            </p>
                            <div className="flex space-x-4">
                                <Link
                                    href="#"
                                    className="text-gray-500 hover:text-green-600 transition-colors dark:text-gray-400 dark:hover:text-green-500"
                                >
                                    <Facebook className="h-5 w-5" />
                                    <span className="sr-only">Facebook</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-500 hover:text-green-600 transition-colors dark:text-gray-400 dark:hover:text-green-500"
                                >
                                    <Twitter className="h-5 w-5" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-500 hover:text-green-600 transition-colors dark:text-gray-400 dark:hover:text-green-500"
                                >
                                    <Instagram className="h-5 w-5" />
                                    <span className="sr-only">Instagram</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-500 hover:text-green-600 transition-colors dark:text-gray-400 dark:hover:text-green-500"
                                >
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold dark:text-white">Quick Links</h3>
                            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                <li>
                                    <Link href="/" className="hover:text-green-600 transition-colors dark:hover:text-green-500">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="hover:text-green-600 transition-colors dark:hover:text-green-500">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="hover:text-green-600 transition-colors dark:hover:text-green-500">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects" className="hover:text-green-600 transition-colors dark:hover:text-green-500">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="hover:text-green-600 transition-colors dark:hover:text-green-500">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-green-600 transition-colors dark:hover:text-green-500">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold dark:text-white">Services</h3>
                            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                <li>
                                    <Link
                                        href="/services/residential"
                                        className="hover:text-green-600 transition-colors dark:hover:text-green-500"
                                    >
                                        Residential Solar
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/commercial"
                                        className="hover:text-green-600 transition-colors dark:hover:text-green-500"
                                    >
                                        Commercial Solar
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/industrial"
                                        className="hover:text-green-600 transition-colors dark:hover:text-green-500"
                                    >
                                        Industrial Solar
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/battery-storage"
                                        className="hover:text-green-600 transition-colors dark:hover:text-green-500"
                                    >
                                        Battery Storage
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/maintenance"
                                        className="hover:text-green-600 transition-colors dark:hover:text-green-500"
                                    >
                                        Maintenance
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold dark:text-white">Contact Us</h3>
                            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                <li className="flex items-start space-x-2">
                                    <MapPin className="h-5 w-5 text-green-600 mt-0.5 dark:text-green-500" />
                                    <span>
                    123 Umhlanga Drive
                    <br />
                    Durban, 4319
                    <br />
                    South Africa
                  </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <Phone className="h-5 w-5 text-green-600 dark:text-green-500" />
                                    <span>+27 31 123 4567</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <Mail className="h-5 w-5 text-green-600 dark:text-green-500" />
                                    <span>info@ilangasolar.co.za</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                        <p>© {new Date().getFullYear()} Ilanga Solar Solutions. All rights reserved.</p>
                        <div className="mt-2 flex justify-center space-x-4">
                            <Link href="/privacy-policy" className="hover:text-green-600 transition-colors dark:hover:text-green-500">
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="hover:text-green-600 transition-colors dark:hover:text-green-500"
                            >
                                Terms of Service
                            </Link>
                            <Link href="/sitemap" className="hover:text-green-600 transition-colors dark:hover:text-green-500">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
            <ScrollToTop />
        </div>
    )
}

