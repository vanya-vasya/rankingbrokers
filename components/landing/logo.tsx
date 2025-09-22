"use client";

import Image from "next/image";

const Logo = () => {
  // App platform data
  const platforms = [
    {
      id: "android",
      title: "Android App Coming Soon",
      subtitle: "Get ready for the ultimate nutrition tracking experience",
      bgColor: "from-green-100 to-green-50",
      textColor: "text-green-800",
      accentColor: "text-green-600",
      logoSrc: "/logos/google-play-badge.png",
      logoAlt: "Get it on Google Play",
      action: () => {
        // Placeholder for future Google Play Store link
        console.log("Google Play Store - Coming Soon");
      }
    },
    {
      id: "ios", 
      title: "iOS App Coming Soon",
      subtitle: "Seamless nutrition tracking on your iPhone",
      bgColor: "from-blue-100 to-blue-50", 
      textColor: "text-blue-800",
      accentColor: "text-blue-600",
      logoSrc: "/logos/app-store-badge.png",
      logoAlt: "Download on the App Store",
      action: () => {
        // Placeholder for future App Store link
        console.log("App Store - Coming Soon");
      }
    }
  ];

  return (
    <section id="coming-soon-apps" className="bg-white py-8 sm:py-12">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get Our App
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Experience seamless nutrition tracking on your mobile device
          </p>
        </div>

        {/* Platform blocks container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Platform block */}
              <div className={`bg-gradient-to-br ${platform.bgColor} p-8 sm:p-10 lg:p-12 h-full min-h-[400px] flex flex-col justify-between`}>
                <div className="text-center">
                  {/* Title */}
                  <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${platform.textColor} mb-6`}>
                    {platform.title}
                  </h2>
                  
                  {/* Subtitle */}
                  <p className={`text-base sm:text-lg ${platform.accentColor} font-medium opacity-90 mb-8`}>
                    {platform.subtitle}
                  </p>
                  
                  {/* Coming soon badge */}
                  <div className="mb-8">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${platform.textColor} bg-white/30 backdrop-blur-sm`}>
                      ⏰ Coming Soon
                    </span>
                  </div>
                </div>

                {/* App Store/Google Play Badge */}
                <div className="mt-auto flex justify-center">
                  <button
                    onClick={platform.action}
                    className="transition-transform duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg"
                    aria-label={`${platform.logoAlt} - Coming soon`}
                  >
                    <Image
                      src={platform.logoSrc}
                      alt={platform.logoAlt}
                      width={200}
                      height={60}
                      className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
                      priority
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        /* Ensure proper backdrop blur support */
        @supports (backdrop-filter: blur(4px)) {
          .backdrop-blur-sm {
            backdrop-filter: blur(4px);
          }
        }

        /* Improve text readability on gradient backgrounds */
        .platform-block {
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        /* Custom hover effects for platform blocks */
        .platform-block:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        /* Responsive adjustments for very small screens */
        @media (max-width: 480px) {
          .platform-block {
            min-height: 350px;
            padding: 1.5rem;
          }
          
          .platform-title {
            font-size: 1.5rem;
          }
          
          .platform-subtitle {
            font-size: 0.875rem;
          }

          .platform-icon {
            font-size: 4rem;
          }
        }

        /* Ensure grid layout works properly on all devices */
        @media (max-width: 1023px) {
          .platform-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Focus styles for accessibility */
        .logo-placeholder:focus {
          outline: 2px solid rgba(255, 255, 255, 0.8);
          outline-offset: 2px;
        }
      `}</style>
    </section>
  );
};

export default Logo;
