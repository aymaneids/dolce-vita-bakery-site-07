
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSection from '@/components/NewsletterSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  popular?: boolean;
  new?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  vegetarian?: boolean;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

const pastries: MenuCategory = {
  name: 'Pastries',
  items: [
    {
      name: 'Classic Croissant',
      description: 'Buttery, flaky layers with a golden crust.',
      price: '$4.50',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      popular: true,
    },
    {
      name: 'Chocolate Croissant',
      description: 'Our classic croissant filled with premium chocolate.',
      price: '$5.25',
      image: 'https://images.unsplash.com/photo-1521368939796-436b315ad570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    },
    {
      name: 'Almond Croissant',
      description: 'Twice-baked croissant with almond cream and sliced almonds.',
      price: '$5.50',
      image: 'https://images.unsplash.com/photo-1588612608835-a699673a08c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    },
    {
      name: 'Cinnamon Roll',
      description: 'Soft, swirled dough with cinnamon sugar and cream cheese glaze.',
      price: '$5.75',
      image: 'https://images.unsplash.com/photo-1616966800404-4ebaec011882?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      popular: true,
    },
    {
      name: 'Fruit Danish',
      description: 'Seasonal fruit nestled in a buttery, flaky danish with vanilla custard.',
      price: '$5.50',
      image: 'https://images.unsplash.com/photo-1586040861101-9d30e574d13d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    },
    {
      name: 'Sfogliatella',
      description: 'Traditional Italian "lobster tail" pastry with citrus-infused ricotta filling.',
      price: '$5.75',
      image: 'https://images.unsplash.com/photo-1650507938091-9aaa8abfdc3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      new: true,
    },
    {
      name: 'Cannoli',
      description: 'Crisp pastry tubes filled with sweetened ricotta cream and chocolate chips.',
      price: '$4.75',
      image: 'https://images.unsplash.com/photo-1517111497591-53eab30be243?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      popular: true,
    },
    {
      name: 'Tiramisu',
      description: 'Classic Italian dessert with layers of espresso-soaked ladyfingers and mascarpone.',
      price: '$6.50',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    },
  ],
};

const savory: MenuCategory = {
  name: 'Savory',
  items: [
    {
      name: 'Prosciutto & Cheese Croissant',
      description: 'Flaky croissant filled with imported prosciutto and fontina cheese.',
      price: '$6.75',
      image: 'https://images.unsplash.com/photo-1682401091908-94686661457b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      popular: true,
    },
    {
      name: 'Spinach & Feta Pastry',
      description: 'Savory pastry filled with spinach, feta, and herbs.',
      price: '$5.95',
      image: 'https://images.unsplash.com/photo-1622941367978-37705f83abf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      vegetarian: true,
    },
    {
      name: 'Caprese Panini',
      description: 'Fresh mozzarella, tomato, basil, and balsamic glaze on housemade focaccia.',
      price: '$10.50',
      image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      vegetarian: true,
    },
    {
      name: 'Italian Sandwich',
      description: 'Salami, mortadella, provolone, and olive tapenade on a crusty baguette.',
      price: '$12.50',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      popular: true,
    },
    {
      name: 'Margherita Flatbread',
      description: 'Thin crust flatbread with San Marzano tomatoes, fresh mozzarella, and basil.',
      price: '$11.95',
      image: 'https://images.unsplash.com/photo-1594007654729-407eedc4fe0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      vegetarian: true,
    },
    {
      name: 'Quiche Lorraine',
      description: 'Classic quiche with bacon, Gruyère cheese, and caramelized onions in a buttery crust.',
      price: '$8.95',
      image: 'https://images.unsplash.com/photo-1623246123320-0d6636755796?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    },
  ],
};

const gelato: MenuCategory = {
  name: 'Gelato',
  items: [
    {
      name: 'Stracciatella',
      description: 'Creamy vanilla gelato with fine chocolate shavings.',
      price: '$5.75 / $7.50',
      image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      popular: true,
    },
    {
      name: 'Pistachio',
      description: 'Rich gelato made with imported Sicilian pistachios.',
      price: '$5.75 / $7.50',
      image: 'https://images.unsplash.com/photo-1621797060108-6e42aaf2f3d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      popular: true,
    },
    {
      name: 'Seasonal Fruit Sorbetto',
      description: 'Dairy-free sorbet made with fresh seasonal fruits.',
      price: '$5.50 / $7.25',
      image: 'https://images.unsplash.com/photo-1531240062960-4842b265a1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      vegan: true,
      glutenFree: true,
    },
    {
      name: 'Hazelnut',
      description: 'Creamy gelato with premium roasted hazelnuts.',
      price: '$5.75 / $7.50',
      image: 'https://images.unsplash.com/photo-1563589486313-6f6c59db19a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    },
    {
      name: 'Tiramisu',
      description: 'Coffee-infused gelato with mascarpone and cocoa.',
      price: '$5.75 / $7.50',
      image: 'https://images.unsplash.com/photo-1631856321053-3785afa3c146?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      new: true,
    },
    {
      name: 'Affogato',
      description: 'Vanilla gelato "drowned" with a shot of hot espresso.',
      price: '$6.95',
      image: 'https://images.unsplash.com/photo-1638172695580-7ed85aa825b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      popular: true,
    },
  ],
};

const coffee: MenuCategory = {
  name: 'Coffee & Drinks',
  items: [
    {
      name: 'Espresso',
      description: 'Rich, intense shot of our premium Italian coffee blend.',
      price: '$3.50',
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    },
    {
      name: 'Cappuccino',
      description: 'Perfect balance of espresso, steamed milk, and velvety foam.',
      price: '$4.75',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      popular: true,
    },
    {
      name: 'Caffè Latte',
      description: 'Smooth, creamy espresso with steamed milk and a light layer of foam.',
      price: '$4.95',
      image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    },
    {
      name: 'Cold Brew',
      description: 'Smooth, low-acidity coffee steeped for 18 hours.',
      price: '$4.95',
      image: 'https://images.unsplash.com/photo-1618207319353-5db1dbe89feb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    },
    {
      name: 'Italian Hot Chocolate',
      description: 'Thick, rich European-style drinking chocolate.',
      price: '$5.25',
      image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      popular: true,
    },
    {
      name: 'Fresh Juice',
      description: 'Freshly squeezed seasonal fruits.',
      price: '$6.50',
      image: 'https://images.unsplash.com/photo-1622597467836-f3e6705f5e7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      vegan: true,
      glutenFree: true,
    },
  ],
};

const MenuItemCard = ({ item }: { item: MenuItem }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      {item.image && (
        <div className="w-full md:w-1/4 h-40 md:h-auto rounded-lg overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="flex-1">
        <div className="flex flex-wrap items-start justify-between mb-1">
          <h3 className="text-xl font-serif text-espresso">{item.name}</h3>
          <div className="text-lg font-medium text-terracotta">{item.price}</div>
        </div>
        
        <p className="text-muted-foreground mb-3">{item.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {item.popular && (
            <Badge variant="secondary" className="bg-terracotta/10 text-terracotta font-medium">
              Popular
            </Badge>
          )}
          {item.new && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-medium">
              New
            </Badge>
          )}
          {item.vegetarian && (
            <Badge variant="secondary" className="bg-green-100 text-green-700 font-medium">
              Vegetarian
            </Badge>
          )}
          {item.vegan && (
            <Badge variant="secondary" className="bg-green-100 text-green-700 font-medium">
              Vegan
            </Badge>
          )}
          {item.glutenFree && (
            <Badge variant="secondary" className="bg-amber-100 text-amber-700 font-medium">
              Gluten Free
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('pastries');
  const categories = [
    { value: 'pastries', label: 'Pastries', data: pastries },
    { value: 'savory', label: 'Savory', data: savory },
    { value: 'gelato', label: 'Gelato', data: gelato },
    { value: 'coffee', label: 'Coffee & Drinks', data: coffee },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-pastry">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Our Menu</h1>
            <p className="text-lg text-muted-foreground">
              Discover our handcrafted pastries, savory bites, authentic gelato, and premium coffee.
            </p>
          </div>
        </div>
      </section>
      
      {/* Menu Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs 
            defaultValue="pastries" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="max-w-4xl mx-auto">
              <TabsList className="w-full mb-8 h-auto flex flex-wrap justify-center bg-latte/50 p-1">
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
            
            {categories.map((category) => (
              <TabsContent 
                key={category.value} 
                value={category.value} 
                className="mt-0 focus-visible:outline-none focus-visible:ring-0"
              >
                <div className="max-w-4xl mx-auto space-y-10">
                  <div>
                    <h2 className="text-3xl font-serif mb-8 text-center">
                      {category.data.name}
                    </h2>
                    
                    <div className="space-y-6">
                      {category.data.items.map((item) => (
                        <MenuItemCard key={item.name} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gelato-mint">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Want to Share the Sweet Life?</h2>
            <p className="text-muted-foreground mb-8">
              Our gift cards make the perfect present for any occasion.
            </p>
            <div className="inline-block">
              <a 
                href="/gift-cards"
                className="inline-flex items-center px-6 py-3 bg-terracotta text-white rounded-md hover:bg-terracotta/90 transition-colors"
              >
                Purchase Gift Cards
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Menu;
