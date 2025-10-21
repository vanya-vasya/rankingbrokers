"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface MultiplierItem {
  label: string;
  value: string | number;
}

interface Multipliers {
  regulator: MultiplierItem;
  execution: MultiplierItem;
  spreadsFrom: MultiplierItem;
  instruments: MultiplierItem;
  minDeposit: MultiplierItem;
}

export interface BrokerData {
  id: string;
  name: string;
  logo: string;
  rating: number;
  badge?: "Pro" | "Popular" | "Verified";
  badgeColor?: string;
  multipliers: Multipliers;
  tags: string[];
  description: string;
  websiteUrl: string;
  reviewUrl: string;
}

interface BrokerCardProps {
  broker: BrokerData;
}

const BrokerCard = ({ broker }: BrokerCardProps) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="w-5 h-5 text-yellow-400"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id={`half-${broker.id}`}>
              <stop offset="50%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#E5E7EB" />
            </linearGradient>
          </defs>
          <path
            fill={`url(#half-${broker.id})`}
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
          />
        </svg>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-5 h-5 text-gray-300 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }

    return stars;
  };

  const getBadgeVariant = (badge?: string) => {
    switch (badge) {
      case "Pro":
        return "default";
      case "Popular":
        return "secondary";
      case "Verified":
        return "outline";
      default:
        return "default";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-3">
              <div className="relative w-full h-full">
                <span className="text-2xl font-bold text-blue-600">
                  {broker.logo}
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {broker.name}
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {renderStars(broker.rating)}
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  {broker.rating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
          {broker.badge && (
            <Badge
              variant={getBadgeVariant(broker.badge)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                broker.badge === "Pro"
                  ? "bg-indigo-100 text-indigo-700 border-indigo-200"
                  : broker.badge === "Popular"
                  ? "bg-amber-100 text-amber-700 border-amber-200"
                  : "bg-emerald-100 text-emerald-700 border-emerald-200"
              }`}
            >
              {broker.badge}
            </Badge>
          )}
        </div>

        {/* Multipliers Section */}
        <div className="mb-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">
                {broker.multipliers.regulator.label}
              </span>
              <span className="text-sm font-bold text-gray-900">
                {broker.multipliers.regulator.value}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">
                {broker.multipliers.execution.label}
              </span>
              <span className="text-sm font-bold text-gray-900">
                {broker.multipliers.execution.value}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">
                {broker.multipliers.spreadsFrom.label}
              </span>
              <span className="text-sm font-bold text-gray-900">
                {broker.multipliers.spreadsFrom.value}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">
                {broker.multipliers.instruments.label}
              </span>
              <span className="text-sm font-bold text-gray-900">
                {broker.multipliers.instruments.value}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">
                {broker.multipliers.minDeposit.label}
              </span>
              <span className="text-sm font-bold text-gray-900">
                {broker.multipliers.minDeposit.value}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {broker.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {broker.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            asChild
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-6 transition-all duration-200"
          >
            <Link href={broker.reviewUrl}>Read Review</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="flex-1 border-2 border-gray-300 hover:bg-gray-50 text-gray-900 font-semibold rounded-xl py-6 transition-all duration-200"
          >
            <Link href={broker.websiteUrl} target="_blank" rel="noopener noreferrer">
              Visit Website
            </Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default BrokerCard;


