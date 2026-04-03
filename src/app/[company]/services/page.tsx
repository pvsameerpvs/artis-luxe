import { ServiceShowcaseCard } from "@/components/services/ServiceShowcaseCard";
import { getServices } from "@/data/services";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ company: string }>;
}) {
  const { company } = await params;
  const isLuxe = company === "luxe";
  const services = getServices(company);

  return (
    <div className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mx-auto mb-6 h-px w-20 bg-primary/35" />
          <h1 className="text-5xl font-semibold md:text-6xl">Our Services</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground md:text-xl">
            {isLuxe
              ? "We offer a comprehensive suite of interior design and luxury implementation services to completely transform your environment."
              : "Explore our wide range of technical maintenance and expert installation services."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceShowcaseCard
              key={service.slug}
              company={company}
              service={service}
              index={index}
              buttonLabel="Service Details"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
