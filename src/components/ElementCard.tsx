
import { Element } from "@/data/elementsData";
import { cn } from "@/lib/utils";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ElementCardProps {
  element: Element;
  className?: string;
}

export function ElementCard({ element, className }: ElementCardProps) {
  const formatValue = (value: number | null | undefined): string => {
    if (value === null || value === undefined) return "N/A";
    return value.toString();
  };

  return (
    <Card className={cn("w-full max-w-md animate-scale-up", className)}>
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div>
          <CardTitle className="text-2xl font-bold">{element.name}</CardTitle>
          <CardDescription>
            {element.atomicNumber} • {element.symbol}
          </CardDescription>
        </div>
        <div className="flex flex-col items-end">
          <span className={cn(
            "inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium",
            `bg-${element.category} bg-opacity-20 text-${element.category}`
          )}>
            {element.atomicWeight}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium text-muted-foreground">Electron Configuration</span>
            <span className="text-sm">{element.electronConfiguration}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium text-muted-foreground">Group</span>
            <span className="text-sm">{element.group || "N/A"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium text-muted-foreground">Period</span>
            <span className="text-sm">{element.period}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium text-muted-foreground">Block</span>
            <span className="text-sm">{element.block}</span>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium text-muted-foreground">State at room temp.</span>
            <span className="text-sm capitalize">{element.state}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium text-muted-foreground">Density</span>
            <span className="text-sm">{formatValue(element.density)} g/cm³</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium text-muted-foreground">Melting Point</span>
            <span className="text-sm">{formatValue(element.meltingPoint)} °C</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium text-muted-foreground">Boiling Point</span>
            <span className="text-sm">{formatValue(element.boilingPoint)} °C</span>
          </div>
        </div>

        {(element.discoveredBy || element.discoveryYear) && (
          <>
            <Separator />
            <div className="space-y-2">
              {element.discoveredBy && (
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Discovered By</span>
                  <span className="text-sm">{element.discoveredBy}</span>
                </div>
              )}
              {element.discoveryYear && (
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Discovery Year</span>
                  <span className="text-sm">{element.discoveryYear}</span>
                </div>
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
