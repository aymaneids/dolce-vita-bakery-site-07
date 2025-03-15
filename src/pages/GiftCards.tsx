
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSection from '@/components/NewsletterSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CardCheckIcon, MailIcon, InfoIcon, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const giftCardAmounts = [25, 50, 75, 100];

const GiftCardOption = ({ 
  amount, 
  isSelected, 
  onSelect 
}: { 
  amount: number; 
  isSelected: boolean; 
  onSelect: () => void 
}) => {
  return (
    <div
      onClick={onSelect}
      className={cn(
        'relative cursor-pointer rounded-xl p-6 transition-all duration-300',
        isSelected 
          ? 'bg-terracotta/10 border-2 border-terracotta shadow-sm'
          : 'bg-white border-2 border-transparent hover:bg-terracotta/5'
      )}
    >
      <div className="text-center">
        <span className="block text-2xl md:text-3xl font-serif font-medium text-espresso mb-2">
          ${amount}
        </span>
        <span className="text-muted-foreground">Gift Card</span>
      </div>
      
      {isSelected && (
        <div className="absolute top-3 right-3 text-terracotta">
          <CheckCircle size={20} />
        </div>
      )}
    </div>
  );
};

const DeliveryOption = ({ 
  id, 
  icon: Icon, 
  title, 
  description 
}: { 
  id: string; 
  icon: any; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="flex items-start space-x-3 p-4">
      <RadioGroupItem value={id} id={id} className="mt-1" />
      <div className="flex flex-1">
        <div className="mr-4 mt-1">
          <div className="h-10 w-10 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta">
            <Icon size={20} />
          </div>
        </div>
        <div>
          <Label htmlFor={id} className="text-base font-medium cursor-pointer">
            {title}
          </Label>
          <p className="text-muted-foreground text-sm mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

const GiftCards = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('email');
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();

  const getFinalAmount = () => {
    if (selectedAmount) return selectedAmount;
    return customAmount ? parseFloat(customAmount) : 0;
  };

  const handleNextStep = () => {
    // Validate step 1
    if (formStep === 1) {
      if (!selectedAmount && !customAmount) {
        toast({
          title: "Please select an amount",
          description: "Choose a preset amount or enter a custom value.",
          variant: "destructive",
        });
        return;
      }
      
      if (customAmount && (parseFloat(customAmount) < 10 || parseFloat(customAmount) > 500)) {
        toast({
          title: "Invalid amount",
          description: "Custom amount must be between $10 and $500.",
          variant: "destructive",
        });
        return;
      }
    }
    
    // Validate step 2
    if (formStep === 2) {
      if (!recipientName) {
        toast({
          title: "Recipient name required",
          description: "Please enter the name of the person receiving this gift card.",
          variant: "destructive",
        });
        return;
      }
      
      if (deliveryMethod === 'email' && (!recipientEmail || !/^\S+@\S+\.\S+$/.test(recipientEmail))) {
        toast({
          title: "Valid email required",
          description: "Please enter a valid email address for the recipient.",
          variant: "destructive",
        });
        return;
      }
    }
    
    setFormStep(formStep + 1);
  };

  const handlePrevStep = () => {
    setFormStep(formStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Gift card purchased successfully!",
        description: deliveryMethod === 'email' 
          ? `Your gift card has been sent to ${recipientEmail}.` 
          : "Your gift card is ready to print.",
      });
      
      setIsSubmitting(false);
      setFormStep(4); // Success step
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-pastry">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Gift Cards</h1>
            <p className="text-lg text-muted-foreground">
              Share the sweet life with friends and family with a gift card from Dolce V.
            </p>
          </div>
        </div>
      </section>
      
      {/* Gift Card Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Step Indicators */}
            <div className="mb-10">
              <div className="flex justify-between">
                {[1, 2, 3].map((step) => (
                  <div 
                    key={step} 
                    className="flex flex-col items-center"
                    style={{ width: '33%' }}
                  >
                    <div 
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors",
                        formStep >= step 
                          ? "bg-terracotta text-white" 
                          : "bg-gray-200 text-gray-500"
                      )}
                    >
                      {step}
                    </div>
                    <span 
                      className={cn(
                        "text-sm transition-colors text-center",
                        formStep >= step ? "text-espresso" : "text-muted-foreground"
                      )}
                    >
                      {step === 1 ? "Choose Amount" : step === 2 ? "Recipient Info" : "Payment"}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative flex h-2 mt-4">
                <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
                <div 
                  className="absolute inset-y-0 left-0 bg-terracotta rounded-full" 
                  style={{ width: `${((formStep - 1) / 2) * 100}%` }}
                ></div>
              </div>
            </div>
            
            {/* Success Message */}
            {formStep === 4 ? (
              <div className="bg-white rounded-xl p-8 md:p-12 shadow-md text-center">
                <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif mb-4">Thank You!</h2>
                <p className="text-muted-foreground mb-6">
                  Your gift card purchase was successful. {deliveryMethod === 'email' 
                    ? `We've sent the gift card to ${recipientEmail}.` 
                    : `You can now print the gift card for ${recipientName}.`}
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <div className="text-lg font-medium mb-2">Purchase Summary</div>
                  <div className="flex justify-between mb-2">
                    <span>Gift Card Amount:</span>
                    <span className="font-medium">${getFinalAmount()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Recipient:</span>
                    <span className="font-medium">{recipientName}</span>
                  </div>
                </div>
                <div>
                  <Button 
                    onClick={() => {
                      // Reset form and go back to step 1
                      setSelectedAmount(null);
                      setCustomAmount('');
                      setRecipientName('');
                      setRecipientEmail('');
                      setMessage('');
                      setSenderName('');
                      setFormStep(1);
                    }}
                    className="bg-terracotta hover:bg-terracotta/90 text-white"
                  >
                    Purchase Another Gift Card
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 md:p-12 shadow-md">
                {/* Step 1: Choose Amount */}
                {formStep === 1 && (
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif mb-6">Select Gift Card Amount</h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {giftCardAmounts.map((amount) => (
                        <GiftCardOption 
                          key={amount}
                          amount={amount}
                          isSelected={selectedAmount === amount}
                          onSelect={() => {
                            setSelectedAmount(amount);
                            setCustomAmount('');
                          }}
                        />
                      ))}
                    </div>
                    
                    <div className="mb-8">
                      <Label htmlFor="custom-amount" className="mb-2 block">
                        Custom Amount (between $10 - $500)
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                          $
                        </span>
                        <Input 
                          id="custom-amount"
                          type="number" 
                          min="10"
                          max="500"
                          step="0.01"
                          placeholder="Enter custom amount"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setSelectedAmount(null);
                          }}
                          className="pl-8"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        type="button" 
                        onClick={handleNextStep}
                        className="bg-terracotta hover:bg-terracotta/90 text-white"
                      >
                        Next Step
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Recipient Information */}
                {formStep === 2 && (
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif mb-6">Recipient Information</h2>
                    
                    <div className="space-y-6 mb-8">
                      {/* Delivery Method */}
                      <div>
                        <Label className="mb-2 block">Delivery Method</Label>
                        <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                          <div className="bg-gray-50 rounded-xl overflow-hidden mb-4">
                            <DeliveryOption 
                              id="email" 
                              icon={MailIcon}
                              title="Email" 
                              description="Send the gift card directly to the recipient's email address." 
                            />
                          </div>
                          <div className="bg-gray-50 rounded-xl overflow-hidden">
                            <DeliveryOption 
                              id="print" 
                              icon={CardCheckIcon}
                              title="Print at Home" 
                              description="Get a printable version of the gift card that you can give in person." 
                            />
                          </div>
                        </RadioGroup>
                      </div>
                      
                      {/* Recipient Name */}
                      <div>
                        <Label htmlFor="recipient-name" className="mb-2 block">
                          Recipient's Name
                        </Label>
                        <Input 
                          id="recipient-name"
                          type="text" 
                          placeholder="Enter recipient's name"
                          value={recipientName}
                          onChange={(e) => setRecipientName(e.target.value)}
                          required
                        />
                      </div>
                      
                      {/* Recipient Email (if email delivery) */}
                      {deliveryMethod === 'email' && (
                        <div>
                          <Label htmlFor="recipient-email" className="mb-2 block">
                            Recipient's Email
                          </Label>
                          <Input 
                            id="recipient-email"
                            type="email" 
                            placeholder="Enter recipient's email address"
                            value={recipientEmail}
                            onChange={(e) => setRecipientEmail(e.target.value)}
                            required
                          />
                        </div>
                      )}
                      
                      {/* Personal Message */}
                      <div>
                        <Label htmlFor="message" className="mb-2 block">
                          Personal Message (Optional)
                        </Label>
                        <Textarea 
                          id="message"
                          placeholder="Add a personal message to the recipient"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={3}
                          maxLength={200}
                        />
                        <div className="text-xs text-muted-foreground mt-1 text-right">
                          {message.length}/200 characters
                        </div>
                      </div>
                      
                      {/* Sender's Name */}
                      <div>
                        <Label htmlFor="sender-name" className="mb-2 block">
                          Your Name
                        </Label>
                        <Input 
                          id="sender-name"
                          type="text" 
                          placeholder="Enter your name"
                          value={senderName}
                          onChange={(e) => setSenderName(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={handlePrevStep}
                      >
                        Back
                      </Button>
                      <Button 
                        type="button" 
                        onClick={handleNextStep}
                        className="bg-terracotta hover:bg-terracotta/90 text-white"
                      >
                        Next Step
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Payment Information */}
                {formStep === 3 && (
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif mb-6">Review & Pay</h2>
                    
                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                      <h3 className="text-lg font-medium mb-4">Order Summary</h3>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Gift Card Amount:</span>
                          <span className="font-medium">${getFinalAmount()}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span>Recipient:</span>
                          <span className="font-medium">{recipientName}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span>Delivery Method:</span>
                          <span className="font-medium capitalize">{deliveryMethod}</span>
                        </div>
                        
                        {deliveryMethod === 'email' && (
                          <div className="flex justify-between">
                            <span>Recipient Email:</span>
                            <span className="font-medium">{recipientEmail}</span>
                          </div>
                        )}
                        
                        {message && (
                          <div>
                            <span className="block font-medium mb-1">Message:</span>
                            <p className="text-muted-foreground bg-white p-3 rounded border text-sm italic">
                              "{message}"
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Payment Information */}
                    <div className="border-t pt-6 mb-8">
                      <div className="flex items-center mb-4">
                        <InfoIcon size={20} className="text-terracotta mr-2" />
                        <span className="text-muted-foreground">
                          For demo purposes, no actual payment will be processed.
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={handlePrevStep}
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit"
                        className="bg-terracotta hover:bg-terracotta/90 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : `Purchase Gift Card ($${getFinalAmount()})`}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            )}
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
              <div>
                <h3 className="text-lg font-medium mb-2">How do I redeem a gift card?</h3>
                <p className="text-muted-foreground">
                  Gift cards can be redeemed in-store by showing the digital card on your phone or 
                  presenting a printed gift card with the valid code.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Do gift cards expire?</h3>
                <p className="text-muted-foreground">
                  No, our gift cards never expire and have no additional fees.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Can I check my gift card balance?</h3>
                <p className="text-muted-foreground">
                  Yes, you can check your balance in-store or by calling our customer service at (415) 555-1234.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">What if the recipient doesn't receive the email?</h3>
                <p className="text-muted-foreground">
                  If the recipient doesn't receive the email within 24 hours, please contact us at hello@dolcev.com 
                  and we'll resend it or help troubleshoot the issue.
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

export default GiftCards;
