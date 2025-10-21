"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

const routes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Our Story",
    href: "/story",
  },
  {
    label: "Pricing",
    href: "/#pricing",
  },
];

export const GuestMobileSidebar = () => {
  return (
    <Sheet>
    <SheetTrigger asChild>
      <Button variant="sidebar" size="icon" className="lg:hidden text-green-600">
        <Menu stroke="currentColor" />
      </Button>
    </SheetTrigger>
      <SheetContent side="left" className="p-0 border-r-0">
        <div className="space-y-4 py-6 px-6 flex flex-col h-full bg-white sm:ring-1 sm:ring-[#3c3c77] text-white border-none">
          <div className="px-3 py-2 flex-1">
            <Link href="/" className="flex items-center pl-3 mb-14">
              <Image width={"150"} height={"60"} className="mr-4" alt="Ranking Brokers Logo" src="/logos/ranking-brokers-logo.png" />
            </Link>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#a1aac9] hover:text-white"
                    >
                      <div className="flex items-center flex-1">
                        {route.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
