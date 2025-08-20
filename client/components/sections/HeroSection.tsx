import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";
import { useEffect, useState } from "react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

/**
 * Hero Section Component
 * 
 * This is the main hero section that appears at the top of the homepage.
 * It includes:
 * - Company branding and messaging
 * - Call-to-action button
 * - Trust indicators (statistics)
 * - Background image with car inspection theme
 */
export default function HeroSection() {
  // Animation state
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Trust indicators data
  const trustIndicators = [
    { value: "500+", label: "Inspections Completed" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "24h", label: "Report Delivery" }
  ];

  return (
    <section className="overflow-hidden" style={{ backgroundColor: '#2F4F4F' }}>
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="max-w-2xl">

            {/* Badges */}
            <div className={`flex items-center space-x-2 mb-6 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <Badge variant="secondary" className="bg-accent text-accent-foreground transition-transform hover:scale-105">
                Professional Inspections
              </Badge>
              <Badge variant="outline" className="border-white/20 text-white transition-transform hover:scale-105">
                Certified Experts
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className={`text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              Professional Vehicle Inspection Services
            </h1>

            {/* Tagline */}
            <p className={`text-xl text-gray-200 mb-8 leading-relaxed transition-all duration-700 ease-out delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <h2>We Check, You Go.</h2>
            </p>

            {/* Call to Action Button */}
            <div className="flex flex-col sm:flex-row gap-4">
            </div>
            <Button
              size="lg"
              className={`bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-all duration-500 ease-out delay-600 hover:scale-105 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ marginLeft: '8px' }}
            >
              <Shield className="mr-2 h-5 w-5" />
              <span style={{ marginLeft: '-5px' }}>
                <p>Our Services --&gt;</p>
              </span>
            </Button>
            
            {/* Trust Indicators */}
            <div className={`mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white transition-all duration-1000 ease-out delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {trustIndicators.map((indicator, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 ease-out hover:scale-110 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${1000 + index * 200}ms` }}
                >
                  <div className="text-3xl font-bold">
                    <AnimatedCounter
                      target={indicator.value}
                      isVisible={isVisible}
                      duration={1500}
                    />
                  </div>
                  <div className="text-gray-200">{indicator.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className={`relative transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 hover:scale-105 transform transition-transform duration-700">
              <img
                src="https://images.pexels.com/photos/13065692/pexels-photo-13065692.jpeg"
                alt="Professional car inspection - technician diagnosing vehicle"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
