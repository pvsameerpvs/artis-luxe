import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
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
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link
          href={`/${company}/services`}
          className={buttonVariants({
            variant: "ghost",
            className:
              "mb-8 pl-0 pr-3 shadow-none hover:bg-transparent hover:text-primary",
          })}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Services
        </Link>

        <div className="overflow-hidden rounded-[2.2rem] border border-border/70 bg-card/96 shadow-[0_32px_80px_-42px_rgba(15,23,42,0.32)]">
          <div className="relative h-64 w-full md:h-80" style={visual.style}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.24),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0.16)_54%,rgba(0,0,0,0.56)_100%)]" />
            <div className="absolute inset-6 rounded-[1.55rem] border border-white/18" />
            <div className="absolute right-6 top-6 z-20 flex size-14 items-center justify-center rounded-[1.1rem] border border-white/20 bg-black/12 text-white shadow-[0_20px_42px_-28px_rgba(0,0,0,0.55)] backdrop-blur">
              <Icon className="size-6" />
            </div>
            <div className="absolute bottom-6 left-6 z-20 md:left-10">
              <span className="mb-3 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-primary-foreground">
                Expertise
              </span>
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-white md:text-5xl">
                {service.title}
              </h1>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <h2 className="mb-6 text-4xl font-semibold">Service Overview</h2>
            <p className="mb-8 text-lg leading-8 text-foreground">{service.description}</p>

            <div className="my-10 grid gap-8 md:grid-cols-2">
              <div className="rounded-[1.7rem] border border-border/70 bg-background/75 p-6 shadow-[0_18px_42px_-32px_rgba(15,23,42,0.22)]">
                <h3 className="border-b border-border/70 pb-3 text-2xl font-semibold">
                  Why Choose Us?
                </h3>
                <ul className="mt-5 space-y-4">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Industry-leading experts with years of practical experience</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>High-quality materials and strict adherence to safety standards</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Cost-effective and timely project completion</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-[1.7rem] border border-border/70 bg-background/75 p-6 shadow-[0_18px_42px_-32px_rgba(15,23,42,0.22)]">
                <h3 className="border-b border-border/70 pb-3 text-2xl font-semibold">
                  Our Process
                </h3>
                <ul className="mt-5 space-y-4">
                  <li className="flex gap-3 text-muted-foreground">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      1
                    </span>
                    <span>Initial Consultation and Requirement Gathering</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      2
                    </span>
                    <span>Customized Strategy and Planning</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      3
                    </span>
                    <span>Professional Execution and Quality Check</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-[1.8rem] border border-border/70 bg-muted/75 p-8 text-center shadow-[0_20px_48px_-34px_rgba(15,23,42,0.22)]">
              <h3 className="text-3xl font-semibold">Ready to start your project?</h3>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Contact us today to discuss your {service.title.toLowerCase()} needs.
              </p>
              <div className="mt-6">
                <Link
                  href={`/${company}/contact`}
                  className={buttonVariants({
                    size: "lg",
                    className: "bg-primary text-white hover:bg-primary-hover",
                  })}
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
