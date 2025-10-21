"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import BrokerCard from "@/components/brokers/broker-card";
import BrokerFilters, { FilterState } from "@/components/brokers/broker-filters";
import { forexBrokers } from "@/components/brokers/broker-data";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    minRating: "any",
    regulator: "any",
    sortBy: "rating-desc",
    viewMode: "grid",
  });

  const filteredAndSortedBrokers = useMemo(() => {
    let result = [...forexBrokers];

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (broker) =>
          broker.name.toLowerCase().includes(searchLower) ||
          broker.description.toLowerCase().includes(searchLower) ||
          broker.tags.some((tag) => tag.toLowerCase().includes(searchLower)) ||
          String(broker.multipliers.regulator.value).toLowerCase().includes(searchLower)
      );
    }

    // Apply min rating filter
    if (filters.minRating !== "any") {
      const minRating = parseFloat(filters.minRating);
      result = result.filter((broker) => broker.rating >= minRating);
    }

    // Apply regulator filter
    if (filters.regulator !== "any") {
      result = result.filter((broker) =>
        String(broker.multipliers.regulator.value).includes(filters.regulator)
      );
    }

    // Apply sorting
    switch (filters.sortBy) {
      case "rating-desc":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "rating-asc":
        result.sort((a, b) => a.rating - b.rating);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return result;
  }, [filters]);

  return (
    <section 
      id="home" 
      className="py-16 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Broker Reviews
          </h1>
          <p className="text-base text-gray-600 max-w-3xl">
            Curated list of trading brokers with live filters. Transparent ratings. Fast navigation to deep‑dives.
          </p>
        </div>

        {/* Filters */}
        <BrokerFilters
          filters={filters}
          onFilterChange={setFilters}
          brokerCount={filteredAndSortedBrokers.length}
        />

        {/* Broker Grid */}
        <div className={`grid gap-6 mb-8 ${
          filters.viewMode === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        }`}>
          {filteredAndSortedBrokers.map((broker) => (
            <BrokerCard key={broker.id} broker={broker} />
          ))}
        </div>

        {/* View More Button */}
        {filteredAndSortedBrokers.length > 0 && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base font-semibold rounded-xl border-2 border-gray-300 hover:bg-gray-50 text-gray-900 transition-all duration-200"
            >
              View more
            </Button>
          </div>
        )}

        {/* No Results Message */}
        {filteredAndSortedBrokers.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600">
              No brokers found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;

