
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CSSProperties } from 'react';

interface FeaturedCategoryProps {
  title: string;
  description: string;
  image: string;
  to: string;
  className?: string;
  style?: CSSProperties;
}

const categories = [
  {
    title: 'Pastries',
    description: 'Handcrafted daily with the finest ingredients',
    image: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    to: '/menu',
  },
  {
    title: 'Savory',
    description: 'Delicious bites to satisfy your cravings',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    to: '/menu',
  },
  {
    title: 'Gelato',
    description: 'Authentic Italian recipes in seasonal flavors',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    to: '/menu',
  },
  {
    title: 'Coffee',
    description: 'Premium blends and expert baristas',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    to: '/menu',
  },
];

const FeaturedCategory = ({ title, description, image, to, className, style }: FeaturedCategoryProps) => {
  return (
    <Link
      to={to}
      className={cn(
        'group relative overflow-hidden rounded-xl aspect-square card-hover',
        className
      )}
      style={style}
    >
      {/* Image */}
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
        style={{ backgroundImage: `url(${image})` }}>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/40 to-transparent"></div>
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <h3 className="text-2xl font-serif mb-2 group-hover:text-terracotta transition-colors">{title}</h3>
        <p className="text-white/80 mb-6">{description}</p>
        <div className="flex items-center text-sm font-medium text-white/90 group-hover:text-terracotta transition-colors">
          <span>Explore</span>
          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
};

const FeaturedCategories = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="section-heading mb-6">Our Specialties</h2>
          <p className="text-muted-foreground text-lg">
            Discover our range of handcrafted creations made fresh daily with the finest ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <FeaturedCategory
              key={category.title}
              {...category}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
