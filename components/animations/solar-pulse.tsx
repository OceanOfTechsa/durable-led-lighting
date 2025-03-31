"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Sun } from "lucide-react"

interface SolarPulseProps {
    size?: "sm" | "md" | "lg" | "xl"
    color?: string
    className?: string
}

export default function SolarPulse({ size = "md", color = "text-yellow-400", className = "" }: SolarPulseProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const sizeMap = {
        sm: "h-8 w-8",
        md: "h-12 w-12",
        lg: "h-16 w-16",
        xl: "h-24 w-24",
    }

    const rayVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: {
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.1, 0.8],
            transition: {
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            },
        },
    }

    const coreVariants = {
        initial: { scale: 0.9 },
        animate: {
            scale: [0.9, 1.05, 0.9],
            transition: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            },
        },
    }

    return (
        <div className={`relative ${className}`}>
            <motion.div
                variants={rayVariants}
                initial="initial"
                animate="animate"
                className="absolute inset-0 rounded-full bg-yellow-300 opacity-30 blur-md"
            />
            <motion.div variants={coreVariants} initial="initial" animate="animate">
                <Sun className={`${sizeMap[size]} ${color}`} />
            </motion.div>
        </div>
    )
}

