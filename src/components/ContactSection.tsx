
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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

const ContactSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="section-heading mb-6">Visit Us</h2>
          <p className="text-muted-foreground text-lg">
            Stop by our bakery to experience the sweet life in person.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Map or Image */}
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
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

          {/* Contact Information */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <ContactInfo
                icon={MapPin}
                title="Address"
                content={
                  <address className="not-italic">
                    123 Bakery Street<br />
                    Hayes Valley, San Francisco<br />
                    CA 94102
                  </address>
                }
              />
              
              <ContactInfo
                icon={Phone}
                title="Phone"
                content={
                  <a href="tel:+14155551234" className="hover:text-terracotta transition-colors">
                    (415) 555-1234
                  </a>
                }
              />
              
              <ContactInfo
                icon={Mail}
                title="Email"
                content={
                  <a href="mailto:hello@dolcev.com" className="hover:text-terracotta transition-colors">
                    hello@dolcev.com
                  </a>
                }
              />
              
              <ContactInfo
                icon={Clock}
                title="Hours"
                content={
                  <div>
                    <div>Monday - Friday: 7am - 7pm</div>
                    <div>Saturday - Sunday: 8am - 8pm</div>
                  </div>
                }
              />
            </div>
            
            <div className="mt-8">
              <Button asChild className="bg-terracotta hover:bg-terracotta/90 text-white">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
