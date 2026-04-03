import { HeroVideo } from "@/components/layout/HeroVideo";
import { getServices } from "@/data/services";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";

export default async function CompanyHome({ params }: { params: Promise<{ company: string }> }) {
  const { company } = await params;
  const isLuxe = company === "luxe";
  const services = getServices(company).slice(0, 3); // Featured services

  const videoUrl = isLuxe 
    ? "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" 
    : "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"; // Placeholder royalty-free demo videos

  const title = isLuxe 
    ? "Elevating Spaces to Premium Destinations" 
    : "Precision Industrial & Commercial Solutions";
    
  const description = isLuxe
    ? "We specialize in crafting sophisticated, bespoke interiors tailored exactly to your lifestyle and architectural aspirations."
    : "Your trusted partner in large-scale maintenance, contracting, and specialized electromechanical infrastructure.";

  return (
    <div>
      <HeroVideo 
        company={company}
        videoUrl={videoUrl}
        title={title}
        description={description}
      />

      {/* Featured Services Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover a selection of our top-tier services, delivered with unparalleled expertise and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.slug} className="flex flex-col h-full bg-card hover:shadow-lg transition-shadow border-none shadow-md">
              <CardHeader>
                <CardTitle className="line-clamp-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <CardDescription className="text-base text-foreground mb-6 line-clamp-3">
                  {service.description}
                </CardDescription>
                <Link href={`/${company}/services/${service.slug}`} className={buttonVariants({ variant: "outline", className: "w-full mt-auto" })}>
                  Learn More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href={`/${company}/services`} className={buttonVariants({ size: "lg", className: "bg-primary hover:bg-primary-hover text-white line-clamp-none" })}>
            View All Services
          </Link>
        </div>
      </section>
      
      {/* Short About Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Why Choose {isLuxe ? "Artis Luxe Interiors" : "Artis Technical"}?</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            {isLuxe 
              ? "With years of expertise in luxury design and flawless implementation, we transform ordinary spaces into breathtaking environments." 
              : "We provide reliable, highly specialized maintenance and technical installations ensuring your infrastructure is built to last."}
          </p>
          <Link href={`/${company}/about`} className={buttonVariants({ variant: "outline", size: "lg", className: "bg-background" })}>
            About Us
          </Link>
        </div>
      </section>
    </div>
  );
}
