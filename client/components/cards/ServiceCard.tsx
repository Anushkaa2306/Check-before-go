import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, LucideIcon } from "lucide-react";

/**
 * Service Card Component
 * 
 * Reusable card component for displaying service pricing and features.
 * Used in the pricing section to show different inspection services.
 */

// Define the structure of service data
export interface ServiceData {
  title: string;
  price: string;
  originalPrice: string;
  discount: string;
  icon: LucideIcon;
  features: string[];
  isHighlighted?: boolean; // Optional: to highlight a popular service
}

// Component props interface
interface ServiceCardProps {
  service: ServiceData;
  onBookNow?: () => void; // Optional callback for book now button
}

export default function ServiceCard({ service, onBookNow }: ServiceCardProps) {
  const { title, price, originalPrice, discount, icon: IconComponent, features, isHighlighted } = service;

  return (
    <Card className={`relative border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-105 transform ${
      isHighlighted ? 'border-primary ring-2 ring-primary/20' : ''
    }`}>
      
      {/* Card Header */}
      <CardHeader className="text-center pb-4">
        {/* Service Icon */}
        <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary/20 hover:scale-110">
          <IconComponent className="h-8 w-8 text-primary transition-transform duration-300 hover:scale-110" />
        </div>
        
        {/* Service Title */}
        <CardTitle className="text-xl">{title}</CardTitle>
        
        {/* Discount Badge */}
        <CardDescription className="text-sm">
          <Badge variant="destructive" className="mb-2">
            {discount}
          </Badge>
        </CardDescription>
      </CardHeader>
      
      {/* Card Content */}
      <CardContent className="pt-0">
        {/* Pricing Display */}
        <div className="text-center mb-6">
          <div className="flex items-baseline justify-center space-x-2">
            <span className="text-3xl font-bold text-primary transition-all duration-300 hover:scale-110 inline-block">{price}</span>
            <span className="text-lg text-muted-foreground line-through transition-opacity duration-300 hover:opacity-70">{originalPrice}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">Starting price</p>
        </div>
        
        {/* Features List */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      {/* Card Footer */}
      <CardFooter>
        <Button
          className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
          variant={isHighlighted ? "default" : "outline"}
          onClick={onBookNow}
        >
          Book Now
        </Button>
      </CardFooter>
      
    </Card>
  );
}
