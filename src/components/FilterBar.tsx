
import { useState } from "react";
import { Search } from "lucide-react";
import { 
  ElementCategory,
  ElementState,
  MetalType,
  categoryLabels,
  stateLabels,
  metalTypeLabels
} from "@/data/elementsData";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface FilterBarProps {
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: ElementCategory | "") => void;
  onStateChange: (value: ElementState | "") => void;
  onMetalTypeChange: (value: MetalType | "") => void;
  onResetFilters: () => void;
}

export function FilterBar({
  onSearchChange,
  onCategoryChange,
  onStateChange,
  onMetalTypeChange,
  onResetFilters
}: FilterBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  const handleCategoryChange = (value: string) => {
    onCategoryChange(value === "all" ? "" : value as ElementCategory);
  };

  const handleStateChange = (value: string) => {
    onStateChange(value === "all" ? "" : value as ElementState);
  };

  const handleMetalTypeChange = (value: string) => {
    onMetalTypeChange(value === "all" ? "" : value as MetalType);
  };

  const handleReset = () => {
    setSearchTerm("");
    onResetFilters();
  };

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
      <div className="relative flex-grow">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search by name, symbol or atomic number..."
          className="pl-9"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Select onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {Object.entries(categoryLabels).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={handleStateChange}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="State" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All States</SelectItem>
            {Object.entries(stateLabels).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={handleMetalTypeChange}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Metal Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {Object.entries(metalTypeLabels).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button variant="outline" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
}
