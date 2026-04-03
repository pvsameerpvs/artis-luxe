import Link from "next/link";

import { getServices } from "@/data/services";

export function Footer({ company }: { company: string }) {
  const isLuxe = company === "luxe";
  const services = getServices(company).slice(0, 4);

  return (
    <footer className="mt-20 border-t border-border/60 bg-muted/55">
      <div className="container mx-auto px-4 py-14">
        <div className="rounded-[2rem] border border-border/70 bg-background/88 p-8 shadow-[0_28px_72px_-42px_rgba(15,23,42,0.3)] md:p-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold text-foreground">
                {isLuxe ? "Artis Luxe Interiors" : "Artis Technical"}
              </h3>
              <p className="max-w-xs text-sm leading-7">
                {isLuxe
                  ? "Elevating spaces with premium interior design and meticulous execution."
                  : "Providing specialized technical and maintenance services with industrial precision."}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href={`/${company}`} className="hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={`/${company}/about`} className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href={`/${company}/services`} className="hover:text-primary">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href={`/${company}/contact`} className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4 md:col-span-2">
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">
                Top Services
              </h4>
              <ul className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/${company}/services/${service.slug}`}
                      className="inline-flex items-center gap-2 leading-6 hover:text-primary"
                    >
                      <span className="size-1.5 rounded-full bg-primary/55" />
                      <span className="line-clamp-1">{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-border/70 pt-6 text-sm md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} {isLuxe ? "Artis Luxe Interiors LLC" : "Artis Technical"}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="#" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
