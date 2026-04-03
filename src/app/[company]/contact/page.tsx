import { Mail, MapPin, Phone, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fieldClassName =
  "w-full h-14 rounded-none border border-border/40 bg-muted/30 px-6 text-base outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-background";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ company: string }>;
}) {
  const { company } = await params;
  const isLuxe = company === "luxe";
  const companyName = isLuxe ? "Artis Luxe Interiors" : "Artis Technical";

  return (
    <div className="bg-background pt-24">
      {/* Header Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 border-b border-border/40">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center text-left">
          <div className="lg:w-1/2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Contact Us<span className="text-primary">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
              Get in touch with {companyName} today to discuss how we can help with your next high-end project.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 border border-border/40 bg-muted/20">
                <h3 className="text-sm font-bold tracking-widest text-primary mb-4">LOCATED IN</h3>
                <p className="text-lg font-medium">Dubai, UAE</p>
              </div>
              <div className="p-6 border border-border/40 bg-muted/20 text-primary">
                <h3 className="text-sm font-bold tracking-widest text-muted-foreground mb-4 font-normal">AVAILABILITY</h3>
                <p className="text-lg font-medium text-foreground">Open 24/7 for technical support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Info Side */}
          <div className="lg:col-span-4 space-y-12">
             <div>
                <h2 className="text-3xl font-bold mb-8">Reach Out<span className="text-primary">.</span></h2>
                <div className="space-y-10">
                   <div className="flex gap-6">
                      <div className="size-14 shrink-0 bg-primary/10 flex items-center justify-center border border-primary/20">
                        <MapPin className="size-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 underline decoration-primary/40 underline-offset-4 decoration-2">Find Us</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          123 Business Avenue, Suite 400<br />
                          Business District, Dubai, UAE
                        </p>
                      </div>
                   </div>

                   <div className="flex gap-6">
                      <div className="size-14 shrink-0 bg-primary/10 flex items-center justify-center border border-primary/20">
                        <Phone className="size-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 underline decoration-primary/40 underline-offset-4 decoration-2">Call Us</h4>
                        <p className="text-muted-foreground leading-relaxed">
                           +1 (555) 123-4567<br />
                           Mon-Fri: 9:00 AM - 6:00 PM
                        </p>
                      </div>
                   </div>

                   <div className="flex gap-6">
                      <div className="size-14 shrink-0 bg-primary/10 flex items-center justify-center border border-primary/20">
                        <Mail className="size-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 underline decoration-primary/40 underline-offset-4 decoration-2">Email Us</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          hello@{company}.example.com
                        </p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="p-8 bg-black text-white">
                <h3 className="text-2xl font-bold mb-4">Need an urgent quote?</h3>
                <p className="text-white/70 mb-6">Text us on WhatsApp for a faster response times regarding on-site inspections.</p>
                <div className="flex items-center gap-4 text-primary font-bold cursor-pointer group">
                   <span>WhatsApp Response</span>
                   <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-8 p-8 md:p-16 border border-border/40">
            <h2 className="text-4xl font-bold mb-10 tracking-tight">Send a Message<span className="text-primary">.</span></h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">First Name</label>
                  <input type="text" className={fieldClassName} placeholder="John" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Last Name</label>
                  <input type="text" className={fieldClassName} placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                <input type="email" className={fieldClassName} placeholder="john@example.com" />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                <input type="text" className={fieldClassName} placeholder="Project Inquiry" />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  className={`${fieldClassName} min-h-[160px] py-6`}
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="button"
                className="inline-flex h-16 w-full items-center justify-center bg-primary px-10 text-lg font-bold text-white hover:bg-black transition-all"
              >
                Send Your Message <MoveRight className="ml-4 w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
         <div className="h-[400px] bg-muted w-full border border-border/40 relative flex items-center justify-center overflow-hidden grayscale">
            <img src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Map View" />
            <div className="relative z-10 size-16 bg-primary rounded-full flex items-center justify-center shadow-2xl animate-pulse">
               <div className="size-4 bg-white rounded-full" />
            </div>
         </div>
      </section>
    </div>
  );
}
