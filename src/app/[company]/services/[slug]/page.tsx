import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";
import { buttonVariants } from "@/components/ui/button-variants";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";


export default async function ServiceDetailPage({ 
  params 
}: { 
  params: Promise<{ company: string; slug: string }> 
}) {
  const { company, slug } = await params;
  const service = getServiceBySlug(company, slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href={`/${company}/services`} className={buttonVariants({ variant: "ghost", className: "mb-8 pl-0 hover:bg-transparent hover:text-primary flex items-center gap-2" })}>
          <ArrowLeft className="w-4 h-4" />
          Back to All Services
        </Link>

        <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
          {/* Placeholder Image Header */}
          <div className="h-64 md:h-80 w-full bg-muted flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <span className="text-muted-foreground z-0 opacity-50 text-xl font-medium">Service Image Placeholder</span>
            <div className="absolute bottom-6 left-6 md:left-10 z-20">
              <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-3 inline-block">
                Expertise
              </span>
              <h1 className="text-3xl md:text-4xl text-white font-bold leading-tight max-w-2xl">
                {service.title}
              </h1>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6">Service Overview</h2>
            <p className="text-lg text-foreground leading-relaxed mb-8">
              {service.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold border-b pb-2">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Industry-leading experts with years of practical experience</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>High-quality materials and strict adherence to safety standards</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Cost-effective and timely project completion</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold border-b pb-2">Our Process</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">1</span>
                    <span>Initial Consultation and Requirement Gathering</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">2</span>
                    <span>Customized Strategy and Planning</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">3</span>
                    <span>Professional Execution and Quality Check</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-xl text-center mt-10">
              <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us today to discuss your {service.title.toLowerCase()} needs.
              </p>
              <Link href={`/${company}/contact`} className={buttonVariants({ size: "lg", className: "bg-primary hover:bg-primary-hover text-white" })}>
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
