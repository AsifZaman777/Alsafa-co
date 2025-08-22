import { Button } from "@/components/ui/button";
import { ArrowRight, Ship, Truck, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Animated Counter Component
const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  suffix = "", 
  prefix = "" 
}: { 
  end: number; 
  duration?: number; 
  suffix?: string; 
  prefix?: string; 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);
      
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={countRef} className="text-2xl font-bold text-primary">
      {prefix}{count}{suffix}
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Gateway to
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Global Growth
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                ALSAFA Export Import Co. connects businesses worldwide with seamless 
                import and export solutions. Trust, reliability, and global reach.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-300"
              >
                Start Trading Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div className="text-center">
                <AnimatedCounter end={50} suffix="+" duration={2000} />
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <AnimatedCounter end={1000} suffix="+" duration={2500} />
                <div className="text-sm text-muted-foreground">Shipments</div>
              </div>
              <div className="text-center">
                <AnimatedCounter end={99} suffix="%" duration={2200} />
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Banner Image */}
          <div className="relative">
            <img 
              src="/assets/banner.png" 
              alt="ALSAFA Export Import" 
              className="w-full h-auto drop-shadow-2xl"
            />
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground p-3 rounded-full shadow-lg animate-bounce">
              <Ship className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg animate-bounce delay-300">
              <Truck className="w-6 h-6" />
            </div>
            <div className="absolute top-1/2 -right-8 bg-secondary text-secondary-foreground p-3 rounded-full shadow-lg animate-bounce delay-700">
              <Globe className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;