"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface StaggerChildrenProps {
    children: React.ReactNode
    delay?: number
    staggerDelay?: number
    className?: string
    threshold?: number
}

export default function StaggerChildren({
                                            children,
                                            delay = 0.2,
                                            staggerDelay = 0.1,
                                            className = "",
                                            threshold = 0.1,
                                        }: StaggerChildrenProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    if (ref.current) {
                        observer.unobserve(ref.current)
                    }
                }
            },
            {
                threshold,
                rootMargin: "0px 0px -100px 0px",
            },
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [threshold])

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delay,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className={className}
        >
            {Array.isArray(children)
                ? children.map((child, index) => (
                    <motion.div key={index} variants={item}>
                        {child}
                    </motion.div>
                ))
                : children}
        </motion.div>
    )
}

