
import { useState, useMemo } from "react";
import { ElementTile } from "@/components/ElementTile";
import { ElementCard } from "@/components/ElementCard";
import { FilterBar } from "@/components/FilterBar";
import { 
  Element, 
  ElementCategory,
  ElementState,
  MetalType,
  elements, 
  elementPositions, 
  categoryLabels 
} from "@/data/elementsData";
import { Pin, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [pinnedElements, setPinnedElements] = useState<Element[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<ElementCategory | "">("");
  const [stateFilter, setStateFilter] = useState<ElementState | "">("");
  const [metalTypeFilter, setMetalTypeFilter] = useState<MetalType | "">("");

  const filteredElements = useMemo(() => {
    return elements.filter((element) => {
      // Search filter
      const searchMatch =
        searchTerm === "" ||
        element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.atomicNumber.toString().includes(searchTerm);

      // Category filter
      const categoryMatch = categoryFilter === "" || element.category === categoryFilter;
      
      // State filter
      const stateMatch = stateFilter === "" || element.state === stateFilter;
      
      // Metal type filter
      const metalTypeMatch = metalTypeFilter === "" || element.metalType === metalTypeFilter;

      return searchMatch && categoryMatch && stateMatch && metalTypeMatch;
    });
  }, [searchTerm, categoryFilter, stateFilter, metalTypeFilter]);

  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
  };

  const handlePinElement = () => {
    if (!selectedElement) return;
    
    const isPinned = pinnedElements.some(
      (e) => e.atomicNumber === selectedElement.atomicNumber
    );
    
    if (isPinned) {
      setPinnedElements(
        pinnedElements.filter((e) => e.atomicNumber !== selectedElement.atomicNumber)
      );
    } else {
      setPinnedElements([...pinnedElements, selectedElement]);
    }
  };

  const resetFilters = () => {
    setSearchTerm("");
    setCategoryFilter("");
    setStateFilter("");
    setMetalTypeFilter("");
  };

  // Create a grid that includes all element positions
  const grid = Array(10).fill(null).map(() => Array(18).fill(null));
  
  // Place elements in the grid
  elementPositions.forEach(({ atomicNumber, x, y }) => {
    const element = elements.find((e) => e.atomicNumber === atomicNumber);
    if (element) {
      grid[y][x] = element;
    }
  });

  const isElementFiltered = (element: Element) => {
    return filteredElements.some((e) => e.atomicNumber === element.atomicNumber);
  };

  const isElementPinned = (element: Element) => {
    return pinnedElements.some((e) => e.atomicNumber === element.atomicNumber);
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Periodic Table of Elements</h1>
        <p className="text-muted-foreground">
          Explore the chemical elements organized by their properties.
        </p>
      </div>

      <FilterBar
        onSearchChange={setSearchTerm}
        onCategoryChange={setCategoryFilter}
        onStateChange={setStateFilter}
        onMetalTypeChange={setMetalTypeFilter}
        onResetFilters={resetFilters}
      />

      {/* Legend */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(categoryLabels).map(([category, label]) => (
          <Badge 
            key={category} 
            variant="outline"
            className={`bg-${category} bg-opacity-20 border-${category} border-opacity-50`}
          >
            {label}
          </Badge>
        ))}
      </div>

      {/* Pinned elements */}
      {pinnedElements.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Pinned Elements</h3>
          <div className="flex flex-wrap gap-2">
            {pinnedElements.map((element) => (
              <ElementTile
                key={element.atomicNumber}
                element={element}
                onClick={handleElementClick}
                isSelected={selectedElement?.atomicNumber === element.atomicNumber}
                isPinned
                className=""
              />
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        {/* Periodic Table Grid */}
        <div className="col-span-1 lg:col-span-5 overflow-auto">
          <div className="grid gap-1 w-full min-w-[900px]" 
               style={{ 
                 display: 'grid',
                 gridTemplateColumns: 'repeat(18, minmax(0, 1fr))',
                 gridTemplateRows: 'repeat(10, minmax(0, 1fr))'
               }}>
            {grid.map((row, rowIndex) => 
              row.map((element, colIndex) => (
                <div key={`${rowIndex}-${colIndex}`} className="aspect-square">
                  {element && (
                    <ElementTile 
                      element={element}
                      onClick={handleElementClick}
                      isSelected={selectedElement?.atomicNumber === element.atomicNumber}
                      isPinned={isElementPinned(element)}
                      className={
                        (searchTerm || categoryFilter || stateFilter || metalTypeFilter) &&
                        !isElementFiltered(element)
                          ? "opacity-30"
                          : ""
                      }
                    />
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Element Details Panel */}
        <div className="col-span-1 lg:col-span-2">
          {selectedElement ? (
            <div className="space-y-4">
              <ElementCard element={selectedElement} />
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePinElement}
                  className="flex items-center gap-2"
                >
                  <Pin className="h-4 w-4" />
                  {isElementPinned(selectedElement) ? "Unpin Element" : "Pin Element"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex h-40 items-center justify-center rounded-lg border border-dashed p-8 text-center">
              <div className="flex flex-col items-center space-y-2">
                <Info className="h-8 w-8 text-muted-foreground" />
                <h3 className="text-lg font-medium">No element selected</h3>
                <p className="text-sm text-muted-foreground">
                  Select an element to view its details
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
