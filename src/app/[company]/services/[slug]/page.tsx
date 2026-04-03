import Link from "next/link";
import { ArrowLeft, CheckCircle2, MoveRight } from "lucide-react";
import { notFound } from "next/navigation";

import { getServiceVisual } from "@/components/services/service-visuals";
import { buttonVariants } from "@/components/ui/button-variants";
import { getServiceBySlug, getServices } from "@/data/services";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ company: string; slug: string }>;
}) {
  const { company, slug } = await params;
  const services = getServices(company);
  const service = getServiceBySlug(company, slug);

  if (!service) {
    notFound();
  }

  const serviceIndex = Math.max(
    services.findIndex((item) => item.slug === slug),
    0,
  );
  const visual = getServiceVisual(company, serviceIndex);
  const Icon = visual.icon;

  return (
    <div className="bg-background pt-24">
      {/* Header Section */}
      <section className="relative h-[60svh] w-full overflow-hidden">
        <img
          src={visual.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
        
        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <Link
            href={`/${company}/services`}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 decoration-primary/40 underline-offset-4 decoration-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold tracking-widest text-xs uppercase">Back to Services</span>
          </Link>
          
          <div className="max-w-4xl">
            <div className="size-16 bg-primary flex items-center justify-center mb-8">
              <Icon className="size-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-4">
              {service.title}<span className="text-primary">.</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              Premium {company} solutions delivered with precision and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Content Side */}
          <div className="lg:col-span-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Service Overview<span className="text-primary">.</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At {company === 'luxe' ? 'Artis Luxe' : 'Artis Technical'}, we understand that high-quality {service.title.toLowerCase()} requires both technical proficiency and an eye for detail. Our team of specialists works closely with you to ensure that every aspect of the project meets your exacting standards.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="p-8 border border-border/40 bg-muted/20">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {[
                    "Industry-leading experts with years of experience",
                    "High-quality materials and strict safety standards",
                    "Cost-effective and timely project completion",
                    "Tailored solutions for your specific needs"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-muted-foreground">
                      <CheckCircle2 className="size-5 shrink-0 text-primary mt-1" />
                      <span className="font-medium text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 border border-border/40 bg-muted/20">
                <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Consultation", desc: "Gathering requirements and vision." },
                    { step: "02", title: "Strategy", desc: "Customized planning and design." },
                    { step: "03", title: "Execution", desc: "Professional implementation and QC." }
                  ].map((p, i) => (
                    <div key={i} className="flex gap-6">
                      <span className="text-2xl font-bold text-primary/30 leading-none">{p.step}</span>
                      <div>
                        <h4 className="font-bold text-lg leading-none mb-2">{p.title}</h4>
                        <p className="text-sm text-muted-foreground">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Side */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 p-8 bg-black text-white">
              <h3 className="text-2xl font-bold mb-6 underline decoration-primary decoration-4 underline-offset-8">Ready to Start?</h3>
              <p className="text-white/70 mb-10 leading-relaxed font-medium">
                Our experts are ready to provide a detailed consultation for your {service.title.toLowerCase()} needs.
              </p>
              <Link
                href={`/${company}/contact`}
                className="inline-flex h-16 w-full items-center justify-center bg-primary px-10 text-lg font-bold text-white hover:bg-white hover:text-black transition-all"
              >
                Request a Quote <MoveRight className="ml-4 w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
