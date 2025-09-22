"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <section id="app-store-logos" className="bg-white py-12 sm:py-16">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header and Description */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get Our App
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-600 mb-3">
              Experience seamless nutrition tracking on your mobile device.
            </p>
            <div 
              className="text-xl sm:text-2xl font-semibold text-green-600 tracking-wide uppercase"
              role="status"
              aria-label="Application status: Coming Soon"
            >
              Coming Soon
            </div>
          </div>
        </div>

        {/* App Store Logos - 3x Larger */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {/* App Store Logo - 3x Size */}
          <div className="flex-shrink-0">
            <Image
              src="/logos/app-store-badge.png"
              alt="Download on the App Store"
              width={600}
              height={180}
              className="h-32 sm:h-40 lg:h-48 w-auto object-contain"
              priority
            />
          </div>
          
          {/* Google Play Logo - 3x Size */}
          <div className="flex-shrink-0">
            <Image
              src="/logos/google-play-badge.png"
              alt="Get it on Google Play"
              width={600}
              height={180}
              className="h-32 sm:h-40 lg:h-48 w-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logo;
