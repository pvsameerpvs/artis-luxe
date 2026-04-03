import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className="flex h-full flex-col overflow-hidden border-border/70 bg-card/96 p-0">
      <div className="relative h-48 overflow-hidden" style={visual.style}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.26),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0.18)_58%,rgba(0,0,0,0.34)_100%)]" />
        <div className="absolute left-5 top-5 flex size-14 items-center justify-center rounded-[1.2rem] border border-white/18 bg-black/12 text-white shadow-[0_18px_40px_-24px_rgba(0,0,0,0.55)] backdrop-blur">
          <Icon className="size-6" />
        </div>
        <div className="absolute inset-x-5 bottom-5 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/30" />
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/78">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="line-clamp-2">{service.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col justify-between">
        <p className="text-base leading-7 text-foreground mb-8">{service.description}</p>
        <Link
          href={`/${company}/services/${service.slug}`}
          className={buttonVariants({
            variant: "outline",
            className: "mt-auto w-full justify-center",
          })}
        >
          {buttonLabel}
          <ArrowRight className="size-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
