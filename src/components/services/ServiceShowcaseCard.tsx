import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button-variants";
import type { Service } from "@/data/services";

import { getServiceVisual } from "./service-visuals";

export function ServiceShowcaseCard({
  company,
  service,
  index,
  buttonLabel,
}: {
  company: string;
  service: Service;
  index: number;
  buttonLabel: string;
}) {
  const visual = getServiceVisual(company, index);
  const Icon = visual.icon;

  return (
    <div className="group relative h-[420px] overflow-hidden rounded-none border border-border/40 bg-card">
      {/* Background Image */}
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-8 z-10">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-none bg-primary/90 text-white backdrop-blur-sm">
            <Icon className="h-6 w-6" />
          </div>
          <span className="text-sm font-bold tracking-widest text-white/60">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed line-clamp-3 mb-6 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {service.description}
          </p>
          
          <Link
            href={`/${company}/services/${service.slug}`}
            className={buttonVariants({
              variant: "outline",
              className: "w-fit rounded-none border-white/20 bg-white/5 text-white hover:bg-primary hover:border-primary transition-all duration-300",
            })}
          >
            {buttonLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Border (Bottom) */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-700 group-hover:w-full" />
    </div>
  );
}
