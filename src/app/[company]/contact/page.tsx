import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

const fieldClassName =
  "w-full h-12 rounded-[1rem] border border-input bg-background/92 px-4 text-sm shadow-[0_14px_30px_-24px_rgba(15,23,42,0.2)] transition-all placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ company: string }>;
}) {
  const { company } = await params;
  const isLuxe = company === "luxe";
  const companyName = isLuxe ? "Artis Luxe Interiors LLC" : "Artis Technical";

  return (
    <div className="py-20 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 h-px w-20 bg-primary/35" />
          <h1 className="text-5xl font-semibold md:text-6xl">Contact Us</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground md:text-xl">
            Get in touch with {companyName} today to discuss how we can help with your next project.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <div className="space-y-8">
            <div className="h-full rounded-[2rem] border border-border/70 bg-card/96 p-8 shadow-[0_28px_72px_-42px_rgba(15,23,42,0.3)]">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-[1rem] bg-primary/10 text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                      Our Office
                    </h3>
                    <p className="text-lg leading-8 text-foreground">
                      123 Business Avenue, Suite 400<br />
                      Business District, City<br />
                      Country, Postal Code
                    </p>
                  </div>
                </div>

                <div className="h-px w-full bg-border/70" />

                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-[1rem] bg-primary/10 text-primary">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                      Call Us
                    </h3>
                    <p className="text-lg leading-8 text-foreground">
                      +1 (555) 123-4567<br />
                      <span className="text-sm text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM</span>
                    </p>
                  </div>
                </div>

                <div className="h-px w-full bg-border/70" />

                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-[1rem] bg-primary/10 text-primary">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                      Email Us
                    </h3>
                    <p className="text-lg leading-8 text-foreground">hello@{company}.example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-card/96 p-8 shadow-[0_28px_72px_-42px_rgba(15,23,42,0.3)]">
            <h2 className="text-3xl font-semibold mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <input type="text" className={fieldClassName} placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <input type="text" className={fieldClassName} placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" className={fieldClassName} placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  className={`${fieldClassName} min-h-[150px] py-3`}
                  placeholder="How can we help you?"
                />
              </div>

              <Button
                type="button"
                size="lg"
                className="w-full bg-primary hover:bg-primary-hover text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
