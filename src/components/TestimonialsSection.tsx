
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sophia Martinez',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 5,
    text: 'The pastries at Dolce V are absolutely divine! The croissants are perfectly flaky, and their gelato flavors are so authentic. It reminds me of my summers in Italy.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 5,
    text: 'I stop by every morning for their espresso and a cannoli. The staff is always friendly, and the quality never disappoints. Best bakery in the neighborhood!'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 5,
    text: 'Their tiramisu is to die for! I ordered a cake for my mother\'s birthday, and everyone was asking where I found such a delicious dessert. Will definitely be back!'
  },
  {
    id: 4,
    name: 'David Johnson',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 4,
    text: 'Great atmosphere for meeting friends or getting some work done. Their savory options are just as good as their sweets, which is rare for a bakery. Highly recommend!'
  },
];

const TestimonialCard = ({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) => {
  return (
    <div 
      className={cn(
        'bg-white rounded-xl p-6 md:p-8 transition-all duration-500 shadow-md',
        isActive 
          ? 'opacity-100 scale-100 shadow-lg' 
          : 'opacity-30 scale-95'
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-espresso">{testimonial.name}</h4>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                fill={i < testimonial.rating ? "#E07A5F" : "none"} 
                className={cn(
                  "w-4 h-4", 
                  i < testimonial.rating ? "text-terracotta" : "text-gray-300"
                )} 
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground italic">{testimonial.text}</p>
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-latte">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="section-heading mb-6">What Our Customers Say</h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our customers have to say about their Dolce V experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop View: Show 3 cards side by side */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {[
              activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1,
              activeIndex,
              (activeIndex + 1) % testimonials.length
            ].map((index) => (
              <TestimonialCard 
                key={testimonials[index].id} 
                testimonial={testimonials[index]} 
                isActive={index === activeIndex}
              />
            ))}
          </div>

          {/* Mobile View: Show 1 card */}
          <div className="md:hidden">
            <TestimonialCard 
              testimonial={testimonials[activeIndex]} 
              isActive={true}
            />
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-colors",
                  index === activeIndex ? "bg-terracotta" : "bg-terracotta/30"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
