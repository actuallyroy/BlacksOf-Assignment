"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY
      
      // Show header when scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } 
      // Hide header when scrolling down
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlHeader)
    return () => window.removeEventListener("scroll", controlHeader)
  }, [lastScrollY])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white px-6 py-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center">
          <div className="flex items-center">
            <Image
              src="/images/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg"
              alt="Supreme Group Logo"
              width={148}
              height={44}
              priority
            />
          </div>
        </div>
      </div>
    </header>
  )
} 