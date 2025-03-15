
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-pastry">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
                alt="Inside our bakery"
                className="w-full object-cover h-[500px]"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gelato-mint rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-gelato-pink rounded-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="section-heading mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Welcome to New Paradise Dolce V, where passion for authentic Italian flavors meets 
              the art of traditional baking. Our journey began with a simple vision: to bring 
              the genuine taste of the sweet life to our community.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every morning, our master bakers and gelato artisans craft fresh delights using 
              only the finest ingredients. From flaky croissants to rich, creamy gelato, each 
              creation tells a story of craftsmanship and love for Italian culinary traditions.
            </p>
            
            <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta/90 text-white">
              <Link to="/about">
                Read Our Full Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
