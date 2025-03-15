
import Hero from '@/components/Hero';
import FeaturedCategories from '@/components/FeaturedCategories';
import AboutSection from '@/components/AboutSection';
import Gallery from '@/components/Gallery';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import NewsletterSection from '@/components/NewsletterSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <AboutSection />
      <Gallery />
      <TestimonialsSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
