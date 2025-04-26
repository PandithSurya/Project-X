"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const HeroSection = () => {
  const imageRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const imageElement = imageRef.current
    const sectionElement = sectionRef.current
    const textElements = sectionElement.querySelectorAll(".animate-on-scroll")

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const scrollThreshold = 100

      // Image parallax and scale effect
      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled")
      } else {
        imageElement.classList.remove("scrolled")
      }

      // Animate text elements based on scroll position
      textElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (elementPosition < windowHeight * 0.85) {
          element.classList.add("visible")
        }
      })
    }

    // Initial animation on load
    setTimeout(() => {
      textElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("visible")
        }, index * 200)
      })
    }, 300)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 lg:py-32 xl:py-48 hero-section">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-16 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-block rounded-full border border-accent-glow px-3 py-1 text-sm text-accent-glow mb-2 animate-on-scroll badge-glow animate-pulse-slow">
                Intelligent Finance
              </div>
              <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 dark-gradient-title font-bold tracking-tight animate-on-scroll">
                Manage Your <span className="text-accent-glow">Finances</span> <br /> with Intelligence
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl animate-on-scroll typewriter-text">
                An AI-powered financial management platform that helps you track.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row animate-on-scroll">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="px-8 py-6 text-lg bg-accent-glow text-black hover:bg-accent-glow/80 hover:scale-105 transition-all duration-300 shadow-glow"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div
              ref={imageRef}
              className="hero-image relative h-[350px] w-full max-w-[450px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-2xl border border-accent-glow/30 animate-on-scroll"
            >
              <div className="absolute inset-0 bg-gradient-radial from-accent-glow/20 to-transparent opacity-70 z-10 mix-blend-overlay"></div>
              <Image
                src="/banner.jpeg"
                alt="Dashboard Preview"
                className="object-cover transition-all duration-700 hover:scale-105"
                fill
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 z-20">
                  
              </div>
              <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
