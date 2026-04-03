import Link from "next/link";
import { CompanyToggle } from "./CompanyToggle";

export function Navbar({ company }: { company: string }) {
  const isLuxe = company === "luxe";
  
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href={`/${company}`} className="flex items-center space-x-2">
            <span className="text-xl font-bold uppercase tracking-wide">
              {isLuxe ? "Artis Luxe" : "Artis Technical"}
            </span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href={`/${company}`} className="transition-colors hover:text-primary">
              Home
            </Link>
            <Link href={`/${company}/about`} className="transition-colors hover:text-primary">
              About
            </Link>
            <Link href={`/${company}/services`} className="transition-colors hover:text-primary">
              Services
            </Link>
            <Link href={`/${company}/contact`} className="transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <CompanyToggle company={company} />
        </div>
      </div>
    </header>
  );
}
