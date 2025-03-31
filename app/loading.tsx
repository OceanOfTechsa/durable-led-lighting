"use client"

import { useEffect, useState } from "react"
import { Sun } from "lucide-react"

export default function Loading() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(timer)
                    return 100
                }
                return prevProgress + 5
            })
        }, 100)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-blue-50">
            <div className="relative flex flex-col items-center">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <div className="relative">
                        <Sun className="h-20 w-20 text-yellow-400 animate-pulse" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-10 w-10 rounded-full bg-yellow-500 animate-ping" />
                        </div>
                    </div>
                </div>

                <div className="mt-24 flex flex-col items-center">
                    <div className="mb-4 grid grid-cols-4 gap-1">
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="h-12 w-12 rounded border-2 border-blue-200 bg-blue-100"
                                style={{
                                    opacity: progress > i * 12.5 ? 1 : 0.3,
                                    transform: progress > i * 12.5 ? "scale(1)" : "scale(0.9)",
                                    transition: "all 0.3s ease",
                                }}
                            />
                        ))}
                    </div>

                    <div className="h-2 w-64 overflow-hidden rounded-full bg-gray-200">
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-green-400 to-blue-500"
                            style={{ width: `${progress}%`, transition: "width 0.3s ease" }}
                        />
                    </div>

                    <p className="mt-4 text-lg font-medium text-gray-700">Harnessing solar power...</p>
                    <p className="text-sm text-gray-500">
                        {progress < 100 ? "Loading your sustainable future" : "Ready to shine!"}
                    </p>
                </div>
            </div>

            <div className="absolute bottom-10 flex flex-col items-center">
                <div className="flex items-center space-x-2">
                    <Sun className="h-6 w-6 text-green-600" />
                    <span className="font-bold text-xl">SolarPower Solutions</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">Powering a sustainable future</p>
            </div>
        </div>
    )
}

