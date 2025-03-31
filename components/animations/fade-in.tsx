"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface FadeInProps {
    children: React.ReactNode
    direction?: "up" | "down" | "left" | "right"
    delay?: number
    duration?: number
    className?: string
    threshold?: number
    once?: boolean
}

export default function FadeIn({
                                   children,
                                   direction = "up",
                                   delay = 0,
                                   duration = 0.5,
                                   className = "",
                                   threshold = 0.1,
                                   once = true,
                               }: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    const getDirectionOffset = () => {
        switch (direction) {
            case "up":
                return { y: 40 }
            case "down":
                return { y: -40 }
            case "left":
                return { x: 40 }
            case "right":
                return { x: -40 }
            default:
                return { y: 0 }
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    if (once && ref.current) {
                        observer.unobserve(ref.current)
                    }
                } else if (!once) {
                    setIsVisible(false)
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
    }, [threshold, once])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...getDirectionOffset() }}
            animate={isVisible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getDirectionOffset() }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

