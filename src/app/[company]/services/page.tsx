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
    <div className="bg-background pt-24">
      {/* Header Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 border-b border-border/40">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center text-left">
          <div className="lg:w-1/2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Our Services<span className="text-primary">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
              {isLuxe
                ? "We offer a comprehensive suite of interior design and luxury implementation services to completely transform your environment."
                : "Explore our wide range of technical maintenance and expert installation services for large-scale facilities."}
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="flex flex-wrap gap-4">
              {services.slice(0, 4).map((s, i) => (
                <div key={i} className="px-4 py-2 bg-primary/10 text-primary font-semibold text-sm border border-primary/20">
                  {s.title.split(' ').slice(0, 2).join(' ')}
                </div>
              ))}
              <div className="px-4 py-2 bg-muted text-muted-foreground font-semibold text-sm">
                + Many More
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceShowcaseCard
              key={service.slug}
              company={company}
              service={service}
              index={index}
              buttonLabel="Explore Service"
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 border-t border-border/40">
        <div className="relative overflow-hidden bg-black py-24 px-8 md:px-16 text-center text-white">
           <img 
             src={isLuxe ? "/happy.jpg" : "/happy.jpg"} 
             className="absolute inset-0 h-full w-full object-cover opacity-40" 
             alt="CTA Background"
           />
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-bold mb-6">Need a custom solution for your property?</h2>
             <p className="text-lg text-white/80 mb-10 leading-relaxed">
               Our team specializes in bespoke projects tailored to specific technical or aesthetic requirements. Contact us today to discuss your vision.
             </p>
             <a
               href={`/${company}/contact`}
               className="inline-flex h-14 items-center justify-center bg-primary px-10 text-lg font-bold text-white hover:bg-primary/90 transition-colors"
             >
               Start Your Project
             </a>
           </div>
        </div>
      </section>
    </div>
  );
}
