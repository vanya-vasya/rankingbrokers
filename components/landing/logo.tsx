"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Logo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // App platform slides
  const platformSlides = [
    {
      id: "android",
      title: "Android App Coming Soon",
      subtitle: "Get ready for the ultimate nutrition tracking experience",
      icon: "🤖",
      bgColor: "from-green-100 to-green-50",
      textColor: "text-green-800",
      accentColor: "text-green-600"
    },
    {
      id: "ios", 
      title: "iOS App Coming Soon",
      subtitle: "Seamless nutrition tracking on your iPhone",
      icon: "📱",
      bgColor: "from-blue-100 to-blue-50", 
      textColor: "text-blue-800",
      accentColor: "text-blue-600"
    }
  ];

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % platformSlides.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [platformSlides.length]);

  const handleSlideChange = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + platformSlides.length) % platformSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % platformSlides.length);
  };

  return (
    <section id="coming-soon-apps" className="bg-white py-8 sm:py-12">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Main slider container */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          {/* Slides container */}
          <div className="relative h-80 sm:h-96">
            {platformSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                role="tabpanel"
                aria-label={`Slide ${index + 1}: ${slide.title}`}
              >
                <div className={`h-full bg-gradient-to-br ${slide.bgColor} flex items-center justify-center p-8 sm:p-12`}>
                  <div className="text-center max-w-2xl">
                    {/* Icon */}
                    <div className="text-6xl sm:text-8xl mb-6" role="img" aria-label={`${slide.id} platform icon`}>
                      {slide.icon}
                    </div>
                    
                    {/* Title */}
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${slide.textColor} mb-4`}>
                      {slide.title}
                    </h2>
                    
                    {/* Subtitle */}
                    <p className={`text-lg sm:text-xl ${slide.accentColor} font-medium opacity-90`}>
                      {slide.subtitle}
                    </p>
                    
                    {/* Coming soon badge */}
                    <div className="mt-6">
                      <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${slide.textColor} bg-white/30 backdrop-blur-sm`}>
                        ⏰ Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {platformSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                index === currentSlide 
                  ? 'bg-blue-600 scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        /* Ensure smooth transitions for slider */
        .slider-transition {
          transition: transform 0.5s ease-in-out;
        }

        /* Custom focus styles for better accessibility */
        .slider-button:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Ensure proper backdrop blur support */
        @supports (backdrop-filter: blur(4px)) {
          .backdrop-blur-sm {
            backdrop-filter: blur(4px);
          }
        }

        /* Improve text readability on gradient backgrounds */
        .gradient-text-shadow {
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        /* Responsive adjustments for very small screens */
        @media (max-width: 480px) {
          .slider-container {
            height: 20rem;
          }
          
          .slider-title {
            font-size: 1.875rem;
          }
          
          .slider-subtitle {
            font-size: 1rem;
          }
        }

        /* Animation for slide indicators */
        @keyframes pulse-indicator {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .active-indicator {
          animation: pulse-indicator 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Logo;
