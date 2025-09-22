"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <section id="app-store-logos" className="bg-white py-8 sm:py-12">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          {/* App Store Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logos/app-store-badge.png"
              alt="Download on the App Store"
              width={200}
              height={60}
              className="h-16 w-auto object-contain"
              priority
            />
          </div>
          
          {/* Google Play Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logos/google-play-badge.png"
              alt="Get it on Google Play"
              width={200}
              height={60}
              className="h-16 w-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logo;
