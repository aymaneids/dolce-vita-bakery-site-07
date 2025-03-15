
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSection from '@/components/NewsletterSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  size?: 'sm' | 'md' | 'lg';
}

// Gallery images organized by category
const galleryImages: GalleryImage[] = [
  // Pastries
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Assorted pastries',
    category: 'pastries',
    size: 'lg',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Croissants',
    category: 'pastries',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1612548403247-aa2873e9422d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Pain au chocolat',
    category: 'pastries',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1586040861101-9d30e574d13d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Fruit Danish',
    category: 'pastries',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1517111497591-53eab30be243?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Cannoli',
    category: 'pastries',
  },
  
  // Cafe Interior
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Cafe interior',
    category: 'cafe',
    size: 'lg',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Coffee counter',
    category: 'cafe',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Seating area',
    category: 'cafe',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Espresso machine',
    category: 'cafe',
  },
  
  // Gelato
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Gelato display',
    category: 'gelato',
    size: 'lg',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1629385974788-abcb9ea33ba1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Pistachio gelato',
    category: 'gelato',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Strawberry gelato',
    category: 'gelato',
  },
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1638172696631-593c75fbf574?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Gelato with waffle cone',
    category: 'gelato',
  },
  
  // Coffee
  {
    id: 14,
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Coffee art',
    category: 'coffee',
    size: 'lg',
  },
  {
    id: 15,
    src: 'https://images.unsplash.com/photo-1515283709260-ee29296f1534?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Cappuccino',
    category: 'coffee',
  },
  {
    id: 16,
    src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Espresso',
    category: 'coffee',
  },
  {
    id: 17,
    src: 'https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Coffee brewing',
    category: 'coffee',
  },
  
  // Events
  {
    id: 18,
    src: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Celebration event',
    category: 'events',
    size: 'lg',
  },
  {
    id: 19,
    src: 'https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Catering setup',
    category: 'events',
  },
  {
    id: 20,
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    alt: 'Private event',
    category: 'events',
  },
];

// Filter categories
const categories = [
  { value: 'all', label: 'All' },
  { value: 'pastries', label: 'Pastries' },
  { value: 'cafe', label: 'Cafe' },
  { value: 'gelato', label: 'Gelato' },
  { value: 'coffee', label: 'Coffee' },
  { value: 'events', label: 'Events' },
];

const GalleryImage = ({ image, onImageClick }: { image: GalleryImage; onImageClick: (img: GalleryImage) => void }) => {
  return (
    <div 
      className={cn(
        'relative overflow-hidden rounded-xl cursor-pointer card-hover',
        image.size === 'lg' ? 'col-span-2 row-span-2' : 'col-span-1',
      )}
      onClick={() => onImageClick(image)}
    >
      <div 
        className="aspect-square w-full bg-cover bg-center transition-transform duration-500 hover:scale-110"
        style={{ backgroundImage: `url(${image.src})` }}
      />
      <div className="absolute inset-0 bg-espresso/10 hover:bg-espresso/0 transition-colors" />
    </div>
  );
};

const LightboxModal = ({ image, onClose }: { image: GalleryImage | null; onClose: () => void }) => {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="max-w-5xl max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={image.src} 
          alt={image.alt} 
          className="max-w-full max-h-[90vh] object-contain"
        />
        <button 
          className="absolute top-4 right-4 text-white hover:text-terracotta bg-black/40 hover:bg-black/60 rounded-full p-2 transition-colors"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
          <p className="text-lg font-serif">{image.alt}</p>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-pastry">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Gallery</h1>
            <p className="text-lg text-muted-foreground">
              Browse through images of our delicious creations and inviting atmosphere.
            </p>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs 
            defaultValue="all" 
            value={activeCategory} 
            onValueChange={setActiveCategory}
            className="w-full"
          >
            <div className="max-w-3xl mx-auto mb-12">
              <TabsList className="w-full bg-latte/50 p-1">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.value} 
                    value={category.value}
                    className={cn(
                      "flex-1 py-3 data-[state=active]:bg-white data-[state=active]:text-terracotta data-[state=active]:shadow-sm",
                      "data-[state=inactive]:text-espresso/70 data-[state=inactive]:hover:text-espresso/90"
                    )}
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent 
              value={activeCategory} 
              className="mt-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredImages.map((image) => (
                  <GalleryImage 
                    key={image.id} 
                    image={image} 
                    onImageClick={handleImageClick}
                  />
                ))}
              </div>
              
              {filteredImages.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No images found in this category.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <LightboxModal image={selectedImage} onClose={closeLightbox} />
      )}
      
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Gallery;
