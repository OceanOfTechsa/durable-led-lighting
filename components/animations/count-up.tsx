"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

interface CountUpProps {
    from: number
    to: number
    duration?: number
    delay?: number
    className?: string
    prefix?: string
    suffix?: string
    threshold?: number
}

export default function CountUp({
                                    from,
                                    to,
                                    duration = 2,
                                    delay = 0,
                                    className = "",
                                    prefix = "",
                                    suffix = "",
                                    threshold = 0.1,
                                }: CountUpProps) {
    const nodeRef = useRef<HTMLSpanElement>(null)
    const inView = useInView(nodeRef, { once: true, amount: threshold })
    const [hasAnimated, setHasAnimated] = useState(false)
    const count = useMotionValue(from)
    const roundedCount = useSpring(count, { duration: duration * 1000, bounce: 0 })
    const [displayValue, setDisplayValue] = useState(from)

    useEffect(() => {
        if (inView && !hasAnimated) {
            count.set(to)
            setHasAnimated(true)
        }
    }, [inView, count, to, hasAnimated])

    useEffect(() => {
        const unsubscribe = roundedCount.onChange((latest) => {
            setDisplayValue(Math.round(latest))
        })
        return unsubscribe
    }, [roundedCount])

    return (
        <motion.span
            ref={nodeRef}
            className={className}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay }}
        >
            {prefix}
            {displayValue}
            {suffix}
        </motion.span>
    )
}

