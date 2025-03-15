
import { useState } from 'react';
import { format } from 'date-fns';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSection from '@/components/NewsletterSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { CalendarIcon, Clock, ArrowRight, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string; // ISO format
  readingTime: number;
  author: {
    name: string;
    avatar: string;
  };
  featured?: boolean;
  categories: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Art of Crafting the Perfect Croissant',
    excerpt: 'Discover the secrets behind our perfectly flaky, buttery croissants and the traditional French techniques we use.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    coverImage: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    date: '2023-05-15T09:00:00Z',
    readingTime: 5,
    author: {
      name: 'Maria Rossi',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    featured: true,
    categories: ['Baking', 'Techniques'],
  },
  {
    id: 2,
    title: 'From Bean to Cup: Our Coffee Sourcing Journey',
    excerpt: 'Learn about our recent trip to the coffee farms of Colombia and the sustainable practices behind our premium blends.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    coverImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    date: '2023-06-02T14:30:00Z',
    readingTime: 7,
    author: {
      name: 'Paolo Rossi',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    categories: ['Coffee', 'Sustainability'],
  },
  {
    id: 3,
    title: 'Summer Gelato Flavors Have Arrived',
    excerpt: 'Introducing our new seasonal gelato menu featuring fresh berries, tropical fruits, and refreshing herb infusions.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    coverImage: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    date: '2023-06-21T11:15:00Z',
    readingTime: 4,
    author: {
      name: 'Elena Moretti',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    featured: true,
    categories: ['Gelato', 'Seasonal'],
  },
  {
    id: 4,
    title: 'Traditional Italian Easter Breads and Pastries',
    excerpt: 'Explore the rich tradition of Easter baking in Italy and the special holiday treats we offer.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    coverImage: 'https://images.unsplash.com/photo-1523294587484-bae6cc870010?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    date: '2023-04-05T10:00:00Z',
    readingTime: 6,
    author: {
      name: 'Maria Rossi',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    categories: ['Baking', 'Traditions', 'Holidays'],
  },
  {
    id: 5,
    title: 'Meet the Team: Behind the Counter Stories',
    excerpt: 'Get to know the passionate people who create your favorite treats and serve your perfect cup of coffee.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    date: '2023-05-28T15:45:00Z',
    readingTime: 8,
    author: {
      name: 'Marco Bianchi',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    categories: ['Team', 'Behind the Scenes'],
  },
  {
    id: 6,
    title: 'Hosting Your Perfect Event at Dolce V',
    excerpt: 'From intimate gatherings to corporate meetings, discover how we can make your event special with our catering services.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    coverImage: 'https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    date: '2023-06-10T08:30:00Z',
    readingTime: 5,
    author: {
      name: 'Elena Moretti',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    categories: ['Events', 'Catering'],
  },
];

const categories = [
  'All',
  'Baking',
  'Coffee',
  'Gelato',
  'Seasonal',
  'Techniques',
  'Sustainability',
  'Team',
  'Events',
];

const FeaturedPost = ({ post }: { post: BlogPost }) => {
  return (
    <div className="relative overflow-hidden rounded-xl h-[500px] card-hover">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url(${post.coverImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/50 to-transparent" />
      
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
        <div className="mb-4">
          {post.categories.map((category) => (
            <Badge 
              key={category} 
              variant="secondary" 
              className="mr-2 mb-2 bg-terracotta/90 text-white hover:bg-terracotta"
            >
              {category}
            </Badge>
          ))}
        </div>
        
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">{post.title}</h2>
        
        <p className="text-white/90 mb-6 line-clamp-2">{post.excerpt}</p>
        
        <div className="flex items-center text-white/80 mb-6">
          <div className="flex items-center mr-6">
            <CalendarIcon size={18} className="mr-2" />
            <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
          </div>
          <div className="flex items-center">
            <Clock size={18} className="mr-2" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
        
        <div>
          <Button asChild className="bg-terracotta hover:bg-terracotta/90 text-white">
            <Link to={`/blog/${post.id}`}>
              Read Article
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const PostCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          {post.categories.slice(0, 2).map((category) => (
            <Badge 
              key={category} 
              variant="secondary" 
              className="mr-2 bg-terracotta/10 text-terracotta"
            >
              {category}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-xl font-serif mb-3 line-clamp-2">
          <Link to={`/blog/${post.id}`} className="hover:text-terracotta transition-colors">
            {post.title}
          </Link>
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-8 h-8 rounded-full mr-2 object-cover" 
            />
            <span className="text-sm text-muted-foreground">{post.author.name}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock size={14} className="mr-1" />
            <span>{post.readingTime} min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || post.categories.includes(activeCategory);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-pastry">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">News & Updates</h1>
            <p className="text-lg text-muted-foreground">
              Stay up to date with our latest offerings, baking tips, and stories from behind the counter.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Post Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif mb-8">Featured Story</h2>
            <FeaturedPost post={featuredPosts[0]} />
          </div>
        </section>
      )}
      
      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              <div className="sticky top-32 space-y-8">
                {/* Search */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-medium mb-4">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full border rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta"
                    />
                    <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>
                
                {/* Categories */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-medium mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                          "block w-full text-left py-2 px-3 rounded-md transition-colors",
                          activeCategory === category
                            ? "bg-terracotta/10 text-terracotta font-medium"
                            : "hover:bg-gray-100 text-muted-foreground"
                        )}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Posts Grid */}
            <div className="w-full md:w-3/4">
              <h2 className="text-2xl md:text-3xl font-serif mb-8">Latest Articles</h2>
              
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {filteredPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl p-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    No articles found matching your search criteria.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('All');
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Blog;
