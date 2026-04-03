import { getServices } from "@/data/services";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";

export default async function ServicesPage({ params }: { params: Promise<{ company: string }> }) {
  const { company } = await params;
  const isLuxe = company === "luxe";
  const services = getServices(company);

  return (
    <div className="py-20 container mx-auto px-4">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-muted-foreground">
          {isLuxe 
            ? "We offer a comprehensive suite of interior design and luxury implementation services to completely transform your environment." 
            : "Explore our wide range of technical maintenance and expert installation services."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.slug} className="flex flex-col h-full bg-card hover:shadow-lg transition-all duration-300 border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-xl leading-tight">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <CardDescription className="text-base text-foreground mb-8">
                {service.description}
              </CardDescription>
              <Link href={`/${company}/services/${service.slug}`} className={buttonVariants({ className: "w-full mt-auto bg-primary hover:bg-primary-hover text-white" })}>
                Service Details
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
