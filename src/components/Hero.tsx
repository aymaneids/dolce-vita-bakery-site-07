
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section
      className={cn(
        'min-h-screen flex items-center relative overflow-hidden bg-pastry-pattern',
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-pan-background"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1612548403247-aa2873e9422d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2873&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/40 to-espresso/10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="max-w-3xl opacity-0 animate-fade-up-slow" style={{ animationDelay: '300ms' }}>
          <div className="glass-panel rounded-xl p-8 md:p-12">
            <div className="inline-block px-4 py-1 rounded-full bg-terracotta/20 text-terracotta font-medium text-sm md:text-base mb-4">
              Cafe · Bakery · Gelato
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
              Indulge in the{' '}
              <span className="text-terracotta italic">Sweet Life</span>
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
              Experience the authentic taste of Italian craftsmanship with our freshly baked pastries, 
              savory delights, and handcrafted gelato at New Paradise Dolce V.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta/90 text-white">
                <Link to="/menu">
                  View Our Menu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/contact">Find Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <span className="text-sm font-medium mb-2">Scroll to explore</span>
        <div className="w-0.5 h-8 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-white h-1/3 animate-[slide-down_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
