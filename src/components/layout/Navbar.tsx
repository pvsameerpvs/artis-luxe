import Link from "next/link";

import { CompanyToggle } from "./CompanyToggle";

export function Navbar({ company }: { company: string }) {
  const isLuxe = company === "luxe";

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4">
      <div className="container mx-auto">
        <div className="rounded-[1.9rem] border border-border/70 bg-background/82 px-4 py-3 shadow-[0_28px_70px_-42px_rgba(15,23,42,0.45)] backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:flex-1">
              <Link href={`/${company}`} className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-[1rem] border border-primary/15 bg-primary/8 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  {isLuxe ? "AL" : "AT"}
                </span>
                <span className="block font-heading text-[1.65rem] leading-none">
                  {isLuxe ? "Artis Luxe" : "Artis Technical"}
                </span>
              </Link>

              <div className="self-start sm:self-auto lg:hidden">
                <CompanyToggle company={company} />
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
              <nav className="hidden md:flex flex-wrap items-center gap-2 text-sm font-medium">
                <Link
                  href={`/${company}`}
                  className="rounded-full px-4 py-2 text-foreground/80 hover:bg-muted hover:text-foreground"
                >
                  Home
                </Link>
                <Link
                  href={`/${company}/about`}
                  className="rounded-full px-4 py-2 text-foreground/80 hover:bg-muted hover:text-foreground"
                >
                  About
                </Link>
                <Link
                  href={`/${company}/services`}
                  className="rounded-full px-4 py-2 text-foreground/80 hover:bg-muted hover:text-foreground"
                >
                  Services
                </Link>
                <Link
                  href={`/${company}/contact`}
                  className="rounded-full px-4 py-2 text-foreground/80 hover:bg-muted hover:text-foreground"
                >
                  Contact
                </Link>
              </nav>

              <div className="hidden lg:block">
                <CompanyToggle company={company} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
