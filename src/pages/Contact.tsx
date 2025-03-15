
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSection from '@/components/NewsletterSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: (
      <address className="not-italic">
        123 Bakery Street<br />
        Hayes Valley, San Francisco<br />
        CA 94102
      </address>
    ),
  },
  {
    icon: Phone,
    title: 'Phone',
    content: (
      <a href="tel:+14155551234" className="hover:text-terracotta transition-colors">
        (415) 555-1234
      </a>
    ),
  },
  {
    icon: Mail,
    title: 'Email',
    content: (
      <a href="mailto:hello@dolcev.com" className="hover:text-terracotta transition-colors">
        hello@dolcev.com
      </a>
    ),
  },
  {
    icon: Clock,
    title: 'Hours',
    content: (
      <div>
        <div>Monday - Friday: 7am - 7pm</div>
        <div>Saturday - Sunday: 8am - 8pm</div>
      </div>
    ),
  },
];

const ContactInfo = ({ icon: Icon, title, content }: { icon: any; title: string; content: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="mr-4 mt-1">
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
          <Icon size={20} />
        </div>
      </div>
      <div>
        <h3 className="text-base font-medium text-espresso">{title}</h3>
        <div className="mt-1 text-muted-foreground">{content}</div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('general');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Please fill out all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-pastry">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you. Get in touch with us for inquiries, feedback, or just to say hello.
            </p>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="h-[450px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0537235417463!2d-122.41941702393497!3d37.77492971698128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580989a43e76f%3A0x45f1b189ee3b07b3!2sHayes%20Valley%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1691794084525!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bakery Location Map"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif mb-10">Get in Touch</h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <ContactInfo 
                    key={index}
                    icon={info.icon}
                    title={info.title}
                    content={info.content}
                  />
                ))}
              </div>
              
              <div className="mt-10 p-6 bg-gelato-vanilla rounded-xl">
                <h3 className="text-lg font-medium mb-4">Catering & Events</h3>
                <p className="text-muted-foreground mb-4">
                  Planning a special event? We offer catering services for birthdays, weddings, 
                  corporate events, and more.
                </p>
                <p className="text-muted-foreground mb-4">
                  For catering inquiries, please email us at{' '}
                  <a href="mailto:catering@dolcev.com" className="text-terracotta hover:underline">
                    catering@dolcev.com
                  </a>{' '}
                  or call us at (415) 555-1235.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif mb-10">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-white rounded-xl p-8 shadow-sm text-center">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for contacting us. We've received your message and will get back to you shortly.
                  </p>
                  <Button 
                    onClick={() => {
                      setName('');
                      setEmail('');
                      setPhone('');
                      setSubject('general');
                      setMessage('');
                      setIsSubmitted(false);
                    }}
                    className="bg-terracotta hover:bg-terracotta/90 text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="mb-2 block">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input 
                        id="name"
                        type="text" 
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="mb-2 block">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input 
                        id="email"
                        type="email" 
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="mb-2 block">
                        Phone (Optional)
                      </Label>
                      <Input 
                        id="phone"
                        type="tel" 
                        placeholder="Your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label className="mb-2 block">
                        Subject <span className="text-red-500">*</span>
                      </Label>
                      <RadioGroup value={subject} onValueChange={setSubject}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="general" id="general" />
                            <Label htmlFor="general" className="cursor-pointer">General Inquiry</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="feedback" id="feedback" />
                            <Label htmlFor="feedback" className="cursor-pointer">Feedback</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="catering" id="catering" />
                            <Label htmlFor="catering" className="cursor-pointer">Catering</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other" className="cursor-pointer">Other</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="mb-2 block">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea 
                        id="message"
                        placeholder="How can we help you?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button 
                      type="submit"
                      className="w-full bg-terracotta hover:bg-terracotta/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-latte">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium mb-2">Do you offer delivery?</h3>
                <p className="text-muted-foreground">
                  We currently do not offer delivery for individual orders, but we do provide delivery 
                  for catering orders above $200 within San Francisco.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium mb-2">Can I place a special order?</h3>
                <p className="text-muted-foreground">
                  Yes! We accept special orders for cakes, pastry platters, and custom desserts with at 
                  least 48 hours notice. Please call us or send an email with your request.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium mb-2">Are your products nut-free?</h3>
                <p className="text-muted-foreground">
                  We do use nuts in many of our products, and our kitchen processes all ingredients in the 
                  same facility. If you have severe allergies, please contact us to discuss options.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium mb-2">Do you have gluten-free or vegan options?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer a selection of gluten-free and vegan pastries daily. Our gelato selection 
                  also includes dairy-free sorbetto options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Contact;
