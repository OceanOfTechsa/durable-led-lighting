"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
    children: React.ReactNode
    className?: string
    speed?: number
    direction?: "up" | "down" | "left" | "right"
}

export default function ParallaxSection({
                                            children,
                                            className = "",
                                            speed = 0.2,
                                            direction = "up",
                                        }: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    let transformValue
    switch (direction) {
        case "up":
            transformValue = useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`])
            break
        case "down":
            transformValue = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])
            break
        case "left":
            transformValue = useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`])
            break
        case "right":
            transformValue = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])
            break
        default:
            transformValue = useTransform(scrollYProgress, [0, 1], ["0%", "0%"])
    }

    const transformProperty = direction === "left" || direction === "right" ? "x" : "y"

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.div style={{ [transformProperty]: transformValue }}>{children}</motion.div>
        </div>
    )
}

