"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 500,
  threshold = 0.1,
  once = true,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once, threshold])

  const directionClasses = {
    up: "translate-y-8",
    down: "translate-y-[-8px]",
    left: "translate-x-8",
    right: "translate-x-[-8px]",
    none: "",
  }

  const animationStyles = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate(0, 0)" : "",
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`,
  }

  return (
    <div
      ref={ref}
      className={cn("transition-all", !isVisible && directionClasses[direction], className)}
      style={animationStyles}
    >
      {children}
    </div>
  )
}
