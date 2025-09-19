"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Crown,
  Activity,
  Target,
  BookOpen,

  Menu,
  Banknote,
  CreditCard,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { UsageProgress } from "@/components/usage-progress";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image from "next/image";










// Product items matching the header
const productItems = [
  {
    name: "Master Chef",
    href: "/dashboard/conversation?toolId=master-chef",
    icon: Crown,
  },
  {
    name: "Master Nutritionist",
    href: "/dashboard/conversation?toolId=master-nutritionist",
    icon: Activity,
  },
  {
    name: "Cal Tracker",
    href: "/dashboard/conversation?toolId=cal-tracker",
    icon: Target,
  },
  {
    name: "Digest",
    href: "/dashboard",
    icon: BookOpen,
    comingSoon: true,
  },
];

// Page routes matching the header
const pageRoutes = [
  {
    name: "Our Story",
    href: "/story",
    icon: BookOpen,
  },
  {
    name: "Pricing",
    href: "/#pricing",
    icon: CreditCard,
  },
];

export function MobileNav({
  initialUsedGenerations,
  initialAvailableGenerations,
}: {
  initialUsedGenerations: number;
  initialAvailableGenerations: number;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [productsOpen, setProductsOpen] = React.useState(false);

  const pathname = usePathname();



  return (
    <div 
      style={{
        fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }}
    >
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden h-10 w-10 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-300"
            style={{
              fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
            }}
          >
            <Menu className="h-5 w-5 text-green-600" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[300px] p-0 bg-white border-r border-gray-200"
          style={{
            fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
          }}
        >
          <SheetHeader className="p-5 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <Image
                src="/logos/yum-mi-onigiri-logo.png"
                alt="Yum-mi Logo"
                width={98}
                height={39}
              />
            </div>
          </SheetHeader>

        <div className="flex flex-col h-[calc(100vh-4rem)]">
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              <div className="w-full mb-4">
                <UsageProgress
                  initialUsedGenerations={initialUsedGenerations}
                  initialAvailableGenerations={initialAvailableGenerations}
                />
              </div>
            </div>

            {/* Products Section - Matching Header */}
            <Collapsible
              open={productsOpen}
              onOpenChange={setProductsOpen}
              className="border-b border-gray-200"
            >
              <CollapsibleTrigger 
                className="flex w-full items-center justify-between p-4 font-medium text-black hover:bg-gray-50 transition-colors"
                style={{
                  fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}
              >
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-green-600" />
                  Products
                </div>
                <ChevronRight
                  className={cn(
                    "h-4 w-4 transition-transform duration-200 text-green-600",
                    productsOpen && "rotate-90"
                  )}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 p-2 bg-gray-50">
                {productItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-4 py-3 text-sm hover:bg-gray-100 transition-colors",
                      pathname === item.href
                        ? "bg-gray-100 text-black"
                        : "text-black"
                    )}
                    style={{
                      fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}
                  >
                    <div className="h-7 w-7 rounded-md bg-green-100 flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between flex-1">
                      <span>{item.name}</span>
                      {item.comingSoon && (
                        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Page Routes - Matching Header */}
            {pageRoutes.map((route) => (
              <Link
                key={route.name}
                href={route.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex w-full items-center p-4 font-medium text-black hover:bg-gray-50 transition-colors border-b border-gray-200",
                  pathname === route.href
                    ? "bg-gray-100 text-black"
                    : "text-black"
                )}
                style={{
                  fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}
              >
                <div className="h-7 w-7 rounded-md flex items-center mr-3">
                  <route.icon className="h-4 w-4 text-green-600" />
                </div>
                {route.name}
              </Link>
            ))}


            <Link
              href="/dashboard/billing/payment-history"
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex w-full items-center p-4 font-medium text-black hover:bg-gray-50 transition-colors",
                pathname === "/dashboard/billing/payment-history"
                  ? "bg-gray-100 text-black"
                  : "text-black"
              )}
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
              }}
            >
              <div className="h-7 w-7 rounded-md flex items-center mr-3">
                <Banknote className="h-4 w-4 text-green-600" />
              </div>
              Payments
            </Link>
          </div>

          {/* <div className="p-4 border-t border-gray-200">
            <div
              className="rounded-xl bg-gradient-to-r from-indigo-100 to-purple-100 p-4 cursor-pointer"
              onClick={() => {
                proModal.onOpen();
                setIsOpen(false);
              }}
            >
              <div className="flex items-center gap-2 text-indigo-600 mb-2">
                <Zap className="h-4 w-4" />
                <p className="text-sm font-medium">Creator Pro Plan</p>
              </div>
              <p className="text-xs text-gray-600">
                Unlimited access to all creative tools and priority rendering
              </p>
            </div>
          </div> */}
        </div>
      </SheetContent>
    </Sheet>
    </div>
  );
}
