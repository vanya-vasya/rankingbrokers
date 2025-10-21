"use client";
import Link from "next/link";
import { GuestMobileSidebar } from "@/components/guest-mobile-sidebar";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const brokersReviewItems = [
  {
    name: "Forex Brokers",
    href: "/brokers-review/forex-broker",
  },
  {
    name: "Crypto Brokers",
    href: "/brokers/crypto",
  },
  {
    name: "Stock Brokers",
    href: "/brokers/stocks",
  },
  {
    name: "CFD Brokers",
    href: "/brokers/cfd",
  },
];

const routes = [
  {
    name: "Best Brokers",
    href: "/best-brokers",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/about",
  },
];

const Header = () => {
  const [isBrokersDropdownOpen, setIsBrokersDropdownOpen] = useState(false);

  const handleBrokersClick = () => {
    setIsBrokersDropdownOpen(!isBrokersDropdownOpen);
  };

  const handleDropdownClose = () => {
    setIsBrokersDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setIsBrokersDropdownOpen(false);
      }
    };

    if (isBrokersDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isBrokersDropdownOpen]);

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-6 gap-1">
        <div className="flex items-center">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image width={"98"} height={"39"} src="/logos/ranking-brokers-logo.png" alt="Ranking Brokers Logo"/>
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-x-2 ml-12">
          <div className="dropdown-container">
            <button
              onClick={handleBrokersClick}
              className="nav-link dropdown-trigger"
            >
              Brokers Review
            </button>
            {isBrokersDropdownOpen && (
              <div className="dropdown-menu">
                {brokersReviewItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="dropdown-item"
                    onClick={handleDropdownClose}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.href}
              className="nav-link"
            >
              {route.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3 lg:flex-1 lg:justify-end">
          {/* Search Icon */}
          <button 
            className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
          
          {/* Contact Us Button - Highlighted CTA */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="contact-cta-button"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
          
          <GuestMobileSidebar />
        </div>
      </nav>

      <style jsx global>{`
        :root {
          --nav-font: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          --contact-font: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        .nav-link {
          font-family: var(--nav-font);
          font-weight: 600;
          font-size: 16px;
          line-height: 1.5;
          letter-spacing: -0.01em;
          text-transform: none;
          color: #1f2937;
          padding: 10px 16px;
          border-radius: 8px;
          transition: all 200ms ease-in-out;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          background: transparent;
        }

        .nav-link:hover {
          background-color: #f3f4f6;
          color: #111827;
          text-decoration: none;
        }

        .contact-cta-button {
          font-family: var(--contact-font);
          font-weight: 600;
          font-size: 16px;
          line-height: 1.5;
          letter-spacing: -0.01em;
          text-transform: none;
          color: #ffffff;
          background-color: #059669;
          padding: 10px 24px;
          border-radius: 9999px;
          transition: all 200ms ease-in-out;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          border: none;
        }

        .contact-cta-button:hover {
          background-color: #047857;
          color: #ffffff;
          text-decoration: none;
        }

        .dropdown-container {
          position: relative;
        }

        .dropdown-trigger {
          cursor: pointer;
          background: none;
          border: none;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          padding: 8px;
          min-width: 200px;
          z-index: 50;
          margin-top: 4px;
          border: 1px solid #e5e7eb;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          font-family: var(--nav-font);
          font-weight: 600;
          font-size: 14px;
          color: #1f2937;
          text-decoration: none;
          border-radius: 8px;
          transition: all 200ms ease-in-out;
          width: 100%;
        }

        .dropdown-item:hover {
          background-color: #f3f4f6;
          color: #059669;
        }
      `}</style>
    </header>
  );
};

export default Header;
