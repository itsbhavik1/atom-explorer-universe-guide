
import { Element } from "@/data/elementsData";
import { cn } from "@/lib/utils";

interface ElementTileProps {
  element: Element;
  onClick: (element: Element) => void;
  isSelected?: boolean;
  isPinned?: boolean;
  className?: string;
}

export function ElementTile({ 
  element, 
  onClick, 
  isSelected = false,
  isPinned = false,
  className
}: ElementTileProps) {
  return (
    <button
      className={cn(
        "relative flex h-16 w-16 flex-col items-center justify-center rounded-md border p-1 text-center transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        `bg-${element.category} bg-opacity-20 border-${element.category} border-opacity-50`,
        isSelected && "ring-2 ring-primary ring-offset-2",
        isPinned && "border-2 border-primary",
        className
      )}
      onClick={() => onClick(element)}
      title={element.name}
    >
      <span className="absolute top-0.5 left-1 text-xs opacity-70">
        {element.atomicNumber}
      </span>
      <span className="text-xl font-bold">{element.symbol}</span>
      <span className="text-[10px] leading-tight line-clamp-1">
        {element.name}
      </span>
    </button>
  );
}
