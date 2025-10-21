"use client";

import { useState } from "react";
import { Search, Grid3x3, List } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export interface FilterState {
  search: string;
  minRating: string;
  regulator: string;
  sortBy: string;
  viewMode: "grid" | "list";
}

interface BrokerFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  brokerCount: number;
}

const BrokerFilters = ({ filters, onFilterChange, brokerCount }: BrokerFiltersProps) => {
  const handleSearchChange = (value: string) => {
    onFilterChange({ ...filters, search: value });
  };

  const handleMinRatingChange = (value: string) => {
    onFilterChange({ ...filters, minRating: value });
  };

  const handleRegulatorChange = (value: string) => {
    onFilterChange({ ...filters, regulator: value });
  };

  const handleSortByChange = (value: string) => {
    onFilterChange({ ...filters, sortBy: value });
  };

  const handleViewModeChange = (mode: "grid" | "list") => {
    onFilterChange({ ...filters, viewMode: mode });
  };

  return (
    <div className="mb-8">
      {/* Filters Row */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* Search */}
          <div className="lg:col-span-1">
            <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
              Search
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search brokers, regulators, or features..."
                value={filters.search}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 h-11 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Min Rating */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
              Min Rating
            </label>
            <Select value={filters.minRating} onValueChange={handleMinRatingChange}>
              <SelectTrigger className="h-11 rounded-lg border-gray-300">
                <SelectValue placeholder="Minimum rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="3.0">3.0+</SelectItem>
                <SelectItem value="3.5">3.5+</SelectItem>
                <SelectItem value="4.0">4.0+</SelectItem>
                <SelectItem value="4.5">4.5+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Regulator */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
              Regulator
            </label>
            <Select value={filters.regulator} onValueChange={handleRegulatorChange}>
              <SelectTrigger className="h-11 rounded-lg border-gray-300">
                <SelectValue placeholder="Filter by regulator" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="FCA">FCA</SelectItem>
                <SelectItem value="CySEC">CySEC</SelectItem>
                <SelectItem value="ASIC">ASIC</SelectItem>
                <SelectItem value="FSCA">FSCA</SelectItem>
                <SelectItem value="FSA">FSA</SelectItem>
                <SelectItem value="FSC">FSC</SelectItem>
                <SelectItem value="DFSA">DFSA</SelectItem>
                <SelectItem value="NFA">NFA</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
              Sort by
            </label>
            <Select value={filters.sortBy} onValueChange={handleSortByChange}>
              <SelectTrigger className="h-11 rounded-lg border-gray-300">
                <SelectValue placeholder="Sort brokers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating-desc">Rating (high → low)</SelectItem>
                <SelectItem value="rating-asc">Rating (low → high)</SelectItem>
                <SelectItem value="name-asc">Name (A → Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z → A)</SelectItem>
                <SelectItem value="reviews-desc">Reviews (many → few)</SelectItem>
                <SelectItem value="reviews-asc">Reviews (few → many)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* View Toggle Row */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">{brokerCount}</span>
            <span className="text-sm text-gray-600">shown</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={filters.viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => handleViewModeChange("grid")}
              className={`w-10 h-10 p-0 rounded-lg ${
                filters.viewMode === "grid"
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "border-gray-300 text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Grid3x3 className="w-5 h-5" />
            </Button>
            <Button
              variant={filters.viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => handleViewModeChange("list")}
              className={`w-10 h-10 p-0 rounded-lg ${
                filters.viewMode === "list"
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "border-gray-300 text-gray-600 hover:bg-gray-50"
              }`}
            >
              <List className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerFilters;

