
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

// Image grid with different sizes and layout
const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Assorted pastries display',
    size: 'lg',
  },
  {
    url: 'https://images.unsplash.com/photo-1575143490471-8024661fb6fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Coffee preparation',
    size: 'sm',
  },
  {
    url: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Chocolate cake with berries',
    size: 'sm',
  },
  {
    url: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Fresh bread assortment',
    size: 'sm',
  },
  {
    url: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Colorful gelato display',
    size: 'sm',
  },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(5);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setVisibleImages(3);
      } else {
        setVisibleImages(5);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update index periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="section-heading mb-6">Gallery</h2>
          <p className="text-muted-foreground text-lg">
            Feast your eyes on our delicious creations and the warm atmosphere of our cafe.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-10">
          {galleryImages.slice(0, visibleImages).map((image, index) => (
            <div
              key={index}
              className={cn(
                'rounded-xl overflow-hidden transition-all relative aspect-square',
                image.size === 'lg' ? 'col-span-2 row-span-2' : 'col-span-1',
                index === activeIndex && 'ring-4 ring-terracotta'
              )}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-espresso/20 hover:bg-espresso/0 transition-colors"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/gallery" 
            className="inline-flex items-center text-terracotta hover:text-terracotta/80 font-medium transition-colors"
          >
            View all photos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
