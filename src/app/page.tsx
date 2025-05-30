"use client"

import { useEffect, useRef, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import ContactForm from "@/components/ContactForm"

const data = {
  passenger: {
    videoUrls: {
      "Complete body": {"url" : "/videos/Passenger Alpha.bc06b347f5b526ad9a60.mp4",
        "thumbnail": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACMCAMAAAB23NoyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALxUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9wLB8UAAAD6dFJOUwAK7/4/2/0gBAII5/v49l/HARP1vwZvGRT3HJvhCSHulEAH4xGfDN+v8vEQ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"
      },
      "Front": {
        "url": "/videos/Front.8f5fda304d3095ab6b02.mp4",
        "thumbnail": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACMCAMAAAB23NoyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALuUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////0cNUIUAAAD5dFJOUwD2Cvs//QECBCAI5wbHDO9A/hCH918Z4fib42/09Z/oCdHfBYuUtdQHrBHyCyHe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"
      },
      "Cabin": {
        "url": "/videos/Cabin.3260d3e4f52b3804dae5.mp4",
        "thumbnail": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACMCAMAAAB23NoyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAL0UExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7AI5DgAAAD7dFJOUwD+9goE/fsCID/xAcdv5/cD9Qi/4+hV4V/X7xj6+AnfXfzuGVqbFfnt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"
      },
      "Trunk": {
        "url": "/videos/Trunk.54bfaa734c0395172c08.mp4",
        "thumbnail": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACMCAMAAAB23NoyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALuUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////0cNUIUAAAD5dFJOUwD2Cv0/x/sgAgRfCPUUCW8B+JTn9xnjIeEc6PoQOBi/DPR/A/HRN6jv19UGB/Pl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"
      },
      "Exterior": {
        "url": "/videos/Exterior.a127ebb308e655c7e32c.mp4",
        "thumbnail": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACMCAMAAAB23NoyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAL6UExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3RO3yAAAAD9dFJOUwAICvv9PwECBCD4z/bvBgP+9fEHV18kx+eUGZvtFOO/3gxv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"
      }
    }
  },
  commercial: {
    videoUrls: {
      "Complete body": {
        "url": "/videos/Commercial Alpha.92c92d40f9116c837d1d.mp4",
        "thumbnail": "/images/commercial-body.497c72f2daf47ca41c4fd25f86191b69.svg"
      },
      "Cabin": {
        "url": "/videos/Commercial Alpha.92c92d40f9116c837d1d.mp4",
        "thumbnail": "/images/commercial-cabin.7981ee5cadcf17dbe57012daa413c584.svg"
      },
      "Engine": {
        "url": "/videos/Commercial Alpha.92c92d40f9116c837d1d.mp4",
        "thumbnail": "/images/commercial-engine.474985507c936157fc7a6daa457d4f04.svg"
      }
    }
  }
}

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [activeVehicleType, setActiveVehicleType] = useState<"passenger" | "commercial">("passenger")
  const [passengerVideoUrl, setPassengerVideoUrl] = useState("/videos/Passenger Alpha.bc06b347f5b526ad9a60.mp4")
  const [commercialVideoUrl, setCommercialVideoUrl] = useState("/videos/Commercial Alpha.92c92d40f9116c837d1d.mp4")
  const [passengerProgress, setPassengerProgress] = useState(0)
  const [commercialProgress, setCommercialProgress] = useState(0)
  const [isPassengerPlaying, setIsPassengerPlaying] = useState(true)
  const [isCommercialPlaying, setIsCommercialPlaying] = useState(true)
  const [isManualSwitch, setIsManualSwitch] = useState(false)

  const passengerVideoRef = useRef<HTMLVideoElement | null>(null)
  const commercialVideoRef = useRef<HTMLVideoElement | null>(null)

  // Calculate scroll progress for the solutions section
  const heroHeight = typeof window !== "undefined" ? window.innerHeight : 800
  const solutionsStart = heroHeight
  const solutionsHeight = heroHeight
  const scrollProgress = Math.max(0, Math.min(1, (scrollY - solutionsStart) / solutionsHeight))

  // Animation phases - adjusted for smoother transitions
  const headerAnimationProgress = Math.max(0, Math.min(1, scrollProgress * 2))
  const subsectionProgress = Math.max(0, Math.min(1, scrollProgress))

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-switch between vehicle types after header animation completes
  useEffect(() => {
    if (isManualSwitch) return; // Skip auto-switching if manual switch is active

    // While header is animating, always show passenger
    if (headerAnimationProgress < 0.8) {
      setActiveVehicleType("passenger")
      return
    }
    // After header anim, switch to commercial beyond 80% of section
    if (subsectionProgress > 0.8) {
      setActiveVehicleType("commercial")
    } else {
      setActiveVehicleType("passenger")
    }
  }, [headerAnimationProgress, subsectionProgress, isManualSwitch])

  // Handle manual vehicle type selection with smooth scrolling
  const handleVehicleTypeChange = (type: "passenger" | "commercial") => {
    setIsManualSwitch(true); // Prevent auto-switching
    setActiveVehicleType(type)
    
    if(type === "passenger"){
      passengerVideoRef.current?.play()
    } else {
      commercialVideoRef.current?.play()
    }
    
    // Scroll to appropriate position
    const targetScroll = solutionsStart + solutionsHeight * (type === "commercial" ? 0.85 : 0.6)
    
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    })

    // Reset manual switch after animation completes
    setTimeout(() => {
      setIsManualSwitch(false);
    }, 1000); // Match this with your transition duration
  }

  // Handle video time updates
  const handlePassengerTimeUpdate = () => {
    if (passengerVideoRef.current) {
      const progress = passengerVideoRef.current.currentTime / passengerVideoRef.current.duration
      setPassengerProgress(progress)
    }
  }

  const handleCommercialTimeUpdate = () => {
    if (commercialVideoRef.current) {
      const progress = commercialVideoRef.current.currentTime / commercialVideoRef.current.duration
      setCommercialProgress(progress)
    }
  }

  return (
    <div className="bg-white">
      <Header />
      <Hero />

      {/* Solutions Section */}
      <section className="relative bg-black min-h-[200vh]">
        <div className="sticky top-0 h-screen overflow-hidden w-full">
          {/* Main Header - Single Element that Transforms */}
          <div
            className="absolute transition-all duration-1000 ease-out"
            style={{
              left: "50%",
              top: headerAnimationProgress > 0 ? "60px" : "50%",
              transform: `translate(-50%, ${headerAnimationProgress > 0 ? "0%" : "-50%"}) scale(${
                1 - headerAnimationProgress * 0.4
              })`,
              zIndex: 10,
              width: "100%",
            }}
          >
            <div className="text-center">
              <h2 className="text-4xl font-light text-white md:text-5xl lg:text-6xl">
                Evolving the drive with <span className="font-bold">360-degree</span>
              </h2>
              <h3 className="mt-4 text-4xl font-light text-white md:text-5xl lg:text-6xl">comprehensive solutions</h3>
            </div>
          </div>

          {/* Main Content Container */}
          <div
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              headerAnimationProgress >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[200px]'
            }`}
          >
            <div className="h-full flex items-center justify-center px-12">
              {/* Left Sidebar - Vehicle Type Navigation */}
              <div className="w-2/5 pr-12">
                <div className="relative border-l-4 border-white/20 pl-8 space-y-12">
                  {/* Animated Slider */}
                  <div 
                    className="absolute left-[-2px] w-1 bg-white h-1/2 transition-transform duration-700"
                    style={{
                      transform: `translateY(${activeVehicleType === "commercial" ? "100%" : "0"})`
                    }}
                  />

                  {/* Passenger Vehicles Tab */}
                  <div
                    className={`cursor-pointer transition-all duration-700 ${
                      activeVehicleType === "passenger" 
                        ? "opacity-100 translate-x-0" 
                        : "opacity-30 hover:opacity-70 -translate-x-4"
                    }`}
                    onClick={() => handleVehicleTypeChange("passenger")}
                  >
                    <h3 className="mb-4 text-2xl font-bold text-white">Passenger vehicles</h3>
                    <p className="text-sm text-gray-300">
                      Rewiring up innovation from
                      <br />
                      interior to exterior.
                    </p>
                  </div>

                  {/* Commercial Vehicles Tab */}
                  <div
                    className={`cursor-pointer transition-all duration-700 ${
                      activeVehicleType === "commercial" 
                        ? "opacity-100 translate-x-0" 
                        : "opacity-30 hover:opacity-70 -translate-x-4"
                    }`}
                    onClick={() => handleVehicleTypeChange("commercial")}
                  >
                    <h3 className="mb-4 text-2xl font-bold text-white">Commercial vehicles</h3>
                    <p className="text-sm text-gray-300">
                      Advancing engineering
                      <br />
                      for heavy-duty vehicles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content - 3D Model Video Area */}
              <div className="w-3/6 flex items-center justify-center">
                <div className="relative w-full">
                  {/* 3D Model Container */}
                  <div className="relative h-[28rem]">
                    {/* Passenger Vehicle Section */}
                    <div
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        activeVehicleType === "passenger" 
                          ? "opacity-100 scale-100" 
                          : "opacity-0 scale-50"
                      }`}
                    >
                      <div className="h-96 w-full max-w-2xl rounded-lg overflow-hidden">
                      <video
                          ref={passengerVideoRef}
                          muted
                          loop
                          playsInline
                          autoPlay
                          onTimeUpdate={handlePassengerTimeUpdate}
                          onLoadedData={() => {
                            passengerVideoRef.current?.play();
                            setIsPassengerPlaying(true);
                          }}
                          className="h-full w-full object-cover rounded-lg"
                        >
                          <source src={passengerVideoUrl} type="video/mp4" />
                        </video>
                      </div>

                      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                        <div className="flex space-x-6">
                          {Object.keys(data.passenger.videoUrls).map((label) => (
                            <button
                              key={label}
                              aria-label={label}
                              className="flex flex-col items-center justify-center transition-opacity duration-300 hover:opacity-100 cursor-pointer group"
                              onClick={() => {
                                setPassengerVideoUrl(data.passenger.videoUrls[label as keyof typeof data.passenger.videoUrls].url)
                                if (passengerVideoRef.current) {
                                  passengerVideoRef.current.load();
                                  passengerVideoRef.current.play();
                                  setIsPassengerPlaying(true);
                                }
                              }}
                            >
                              <div className="w-12 h-12 flex items-center justify-center">
                                <img 
                                  src={data.passenger.videoUrls[label as keyof typeof data.passenger.videoUrls].thumbnail} 
                                  alt={label} 
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <span className="text-xs text-white/50 group-hover:text-white/100 transition-colors mt-2 w-28">
                                {label}
                              </span>
                            </button>
                          ))}
                        </div>

                        <button 
                          onClick={() => {
                            if (passengerVideoRef.current) {
                              if (passengerVideoRef.current.paused) {
                                passengerVideoRef.current.play();
                                setIsPassengerPlaying(true);
                              } else {
                                passengerVideoRef.current.pause();
                                setIsPassengerPlaying(false);
                              }
                            }
                          }}
                          className="relative ml-6 h-12 w-12"
                        >
                          <svg 
                            className="absolute inset-0 w-full h-full"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* Background Circle */}
                            <circle
                              cx="24"
                              cy="24"
                              r="22"
                              className="fill-white/20 transition-colors hover:fill-white/30"
                            />
                            
                            {/* Progress Ring */}
                            <g className="-rotate-90 origin-center">
                              <circle 
                                className="stroke-white/20"
                                strokeWidth="2"
                                fill="none"
                                r="22"
                                cx="24"
                                cy="24"
                              />
                              <circle 
                                className="stroke-white transition-all duration-300"
                                strokeWidth="2"
                                fill="none"
                                r="22"
                                cx="24"
                                cy="24"
                                strokeDasharray="138.2"
                                strokeDashoffset={138.2 * (1 - passengerProgress)}
                              />
                            </g>
                            
                            {/* Play/Pause Icon */}
                            {isPassengerPlaying ? (
                              <g>
                                <rect x="17" y="15" width="4" height="18" fill="white" rx="1" />
                                <rect x="27" y="15" width="4" height="18" fill="white" rx="1" />
                              </g>
                            ) : (
                              <path
                                d="M32 24L19 32V16L32 24Z"
                                fill="white"
                              />
                            )}
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Commercial Vehicle Section */}
                    <div
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        activeVehicleType === "commercial" 
                          ? "opacity-100 translate-y-0 delay-500" 
                          : "opacity-0 translate-y-[500px] delay-0"
                      }`}
                    >
                      <div className="h-96 w-full max-w-2xl rounded-lg overflow-hidden">
                      <video
                          ref={commercialVideoRef}
                          muted
                          loop
                          playsInline
                          autoPlay
                          onTimeUpdate={handleCommercialTimeUpdate}
                          onLoadedData={() => {
                            commercialVideoRef.current?.play();
                            setIsCommercialPlaying(true);
                          }}
                          className="h-full w-full object-cover rounded-lg"
                        >
                          <source src={commercialVideoUrl} type="video/mp4" />
                        </video>
                      </div>

                      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                        <div className="flex space-x-6">
                          {Object.keys(data.commercial.videoUrls).map((label) => (
                            <button 
                              key={label} 
                              aria-label={label} 
                              className="flex flex-col items-center justify-center transition-opacity duration-300 hover:opacity-100 cursor-pointer group"
                              onClick={() => {
                                setCommercialVideoUrl(data.commercial.videoUrls[label as keyof typeof data.commercial.videoUrls].url)
                                if (commercialVideoRef.current) {
                                  commercialVideoRef.current.load();
                                  commercialVideoRef.current.play();
                                  setIsCommercialPlaying(true);
                                }
                              }}
                            >
                              <div className="w-12 h-12 flex items-center justify-center">
                                <img 
                                  src={data.commercial.videoUrls[label as keyof typeof data.commercial.videoUrls].thumbnail} 
                                  alt={label} 
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <span className="text-xs text-white/50 group-hover:text-white/100 transition-colors mt-2 w-24">
                                {label}
                              </span>
                            </button>
                          ))}
                        </div>

                        <button 
                          onClick={() => {
                            if (commercialVideoRef.current) {
                              if (commercialVideoRef.current.paused) {
                                commercialVideoRef.current.play();
                                setIsCommercialPlaying(true);
                              } else {
                                commercialVideoRef.current.pause();
                                setIsCommercialPlaying(false);
                              }
                            }
                          }}
                          className="relative ml-6 h-12 w-12"
                        >
                          <svg 
                            className="absolute inset-0 w-full h-full"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* Background Circle */}
                            <circle
                              cx="24"
                              cy="24"
                              r="22"
                              className="fill-white/20 transition-colors hover:fill-white/30"
                            />
                            
                            {/* Progress Ring */}
                            <g className="-rotate-90 origin-center">
                              <circle 
                                className="stroke-white/20"
                                strokeWidth="2"
                                fill="none"
                                r="22"
                                cx="24"
                                cy="24"
                              />
                              <circle 
                                className="stroke-white transition-all duration-300"
                                strokeWidth="2"
                                fill="none"
                                r="22"
                                cx="24"
                                cy="24"
                                strokeDasharray="138.2"
                                strokeDashoffset={138.2 * (1 - commercialProgress)}
                              />
                            </g>
                            
                            {/* Play/Pause Icon */}
                            {isCommercialPlaying ? (
                              <g>
                                <rect x="17" y="15" width="4" height="18" fill="white" rx="1" />
                                <rect x="27" y="15" width="4" height="18" fill="white" rx="1" />
                              </g>
                            ) : (
                              <path
                                d="M32 24L19 32V16L32 24Z"
                                fill="white"
                              />
                            )}
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  )
}
