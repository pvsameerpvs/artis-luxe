import Link from "next/link";

import { HeroVideo } from "@/components/layout/HeroVideo";
import { ServiceShowcaseCard } from "@/components/services/ServiceShowcaseCard";
import { buttonVariants } from "@/components/ui/button-variants";
import { getServices } from "@/data/services";

export default async function CompanyHome({
  params,
}: {
  params: Promise<{ company: string }>;
}) {
  const { company } = await params;
  const isLuxe = company === "luxe";
  const services = getServices(company).slice(0, 3);

  const videoUrl = isLuxe
    ? "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    : "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";

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

      <section className="container mx-auto px-4 py-20 md:py-24">
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
          <div className="mx-auto mb-6 h-px w-20 bg-primary/35" />
          <h2 className="text-4xl font-semibold md:text-5xl">Our Featured Services</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            Discover a selection of our top-tier services, delivered with unparalleled expertise and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceShowcaseCard
              key={service.slug}
              company={company}
              service={service}
              index={index}
              buttonLabel="Learn More"
            />
          ))}
        </div>

        <div className="mt-12 text-center md:mt-14">
          <Link
            href={`/${company}/services`}
            className={buttonVariants({
              size: "lg",
              className: "bg-primary text-white hover:bg-primary-hover",
            })}
          >
            View All Services
          </Link>
        </div>
      </section>

      <section className="bg-muted/70 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-[2.1rem] border border-border/70 bg-background/82 p-8 text-center shadow-[0_28px_72px_-42px_rgba(15,23,42,0.28)] md:p-12">
            <div className="mx-auto mb-6 h-px w-20 bg-primary/35" />
            <h2 className="text-4xl font-semibold md:text-5xl">
              Why Choose {isLuxe ? "Artis Luxe Interiors" : "Artis Technical"}?
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-muted-foreground">
              {isLuxe
                ? "With years of expertise in luxury design and flawless implementation, we transform ordinary spaces into breathtaking environments."
                : "We provide reliable, highly specialized maintenance and technical installations ensuring your infrastructure is built to last."}
            </p>
            <div className="mt-8">
              <Link
                href={`/${company}/about`}
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "bg-background",
                })}
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
