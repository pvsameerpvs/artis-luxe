import { Button } from "@/components/ui/button";

export default async function ContactPage({ params }: { params: Promise<{ company: string }> }) {
  const { company } = await params;
  const isLuxe = company === "luxe";
  const companyName = isLuxe ? "Artis Luxe Interiors LLC" : "Artis Technical";

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with {companyName} today to discuss how we can help with your next project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm border space-y-8 h-full">
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Office</h3>
                <p className="text-foreground text-lg">
                  123 Business Avenue, Suite 400<br />
                  Business District, City<br />
                  Country, Postal Code
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Call Us</h3>
                <p className="text-foreground text-lg">
                  +1 (555) 123-4567<br />
                  <span className="text-muted-foreground text-sm">Mon-Fri: 9:00 AM - 6:00 PM</span>
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Email Us</h3>
                <p className="text-foreground text-lg">
                  hello@{company}.example.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-card p-8 rounded-2xl shadow-sm border">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <input type="text" className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <input type="text" className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea className="w-full flex min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="How can we help you?"></textarea>
              </div>
              
              <Button type="button" size="lg" className="w-full bg-primary hover:bg-primary-hover text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
