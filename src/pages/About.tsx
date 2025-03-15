
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSection from '@/components/NewsletterSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-pastry">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Our Story</h1>
            <p className="text-lg text-muted-foreground">
              Learn about our passion for authentic Italian flavors and dedication to quality.
            </p>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6">The Beginning</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                New Paradise Dolce V began with a simple dream: to bring the authentic flavors of Italy 
                to our neighborhood. Founded in 2010 by Maria and Paolo Rossi, two immigrants with a 
                passion for traditional recipes, our bakery started as a small corner shop.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Maria's grandmother was a renowned pastry chef in Milan, and she passed down her treasured 
                recipes and techniques through generations. Paolo's family owned a gelato shop in Sicily, 
                where he learned the art of creating perfectly balanced, creamy gelato using only the 
                freshest ingredients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Together, they combined their expertise and heritage to create a place where people could 
                experience the "dolce vita" – the sweet life – through exceptional pastries, authentic 
                gelato, and perfectly crafted coffee.
              </p>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
                  alt="Our founders"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gelato-pink rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-gelato-vanilla rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Principles Section */}
      <section className="py-16 md:py-24 bg-latte">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Principles</h2>
            <p className="text-muted-foreground">
              Every creation at New Paradise Dolce V is guided by our commitment to quality, 
              tradition, and the joy of sharing good food.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="h-16 w-16 bg-terracotta/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1509482560494-4126f8225994?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Quality Ingredients" 
                  className="h-10 w-10 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-serif text-center mb-4">Quality Ingredients</h3>
              <p className="text-muted-foreground text-center">
                We source only the finest ingredients, from locally-milled flour to seasonal fruits 
                and premium Italian imports, to ensure authentic flavor in every bite.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="h-16 w-16 bg-terracotta/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Traditional Methods" 
                  className="h-10 w-10 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-serif text-center mb-4">Traditional Methods</h3>
              <p className="text-muted-foreground text-center">
                We honor time-tested techniques passed down through generations, ensuring each 
                pastry and gelato flavor carries the authentic essence of Italian craftsmanship.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="h-16 w-16 bg-terracotta/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Community Connection" 
                  className="h-10 w-10 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-serif text-center mb-4">Community Connection</h3>
              <p className="text-muted-foreground text-center">
                We believe in creating a warm, welcoming space where neighbors become friends, 
                celebrating life's moments together over good food and conversation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Meet Our Team</h2>
            <p className="text-muted-foreground">
              The passionate individuals who bring our vision to life every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Maria Rossi",
                title: "Co-Founder & Master Baker",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Paolo Rossi",
                title: "Co-Founder & Gelato Artisan",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Elena Moretti",
                title: "Head Chef",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Marco Bianchi",
                title: "Head Barista",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gelato-mint">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Come Experience the Sweet Life</h2>
            <p className="text-muted-foreground mb-8">
              We'd love to welcome you to our bakery and share our passion for authentic Italian flavors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-terracotta hover:bg-terracotta/90 text-white">
                <Link to="/menu">View Our Menu</Link>
              </Button>
              <Button asChild variant="outline" className="border-terracotta text-terracotta hover:bg-terracotta/5">
                <Link to="/contact">Visit Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default About;
