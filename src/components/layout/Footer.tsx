import Link from "next/link";
import { getServices } from "@/data/services";

export function Footer({ company }: { company: string }) {
  const isLuxe = company === "luxe";
  const services = getServices(company).slice(0, 4); // Just taking top 4 for footer

  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              {isLuxe ? "Artis Luxe Interiors" : "Artis Technical"}
            </h3>
            <p className="text-sm leading-relaxed">
              {isLuxe 
                ? "Elevating spaces with premium interior design and meticulous execution."
                : "Providing specialized technical and maintenance services with industrial precision."}
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${company}`} className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href={`/${company}/about`} className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href={`/${company}/services`} className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href={`/${company}/contact`} className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4 md:col-span-2">
            <h4 className="font-semibold text-foreground">Top Services</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${company}/services/${service.slug}`} className="hover:text-primary transition-colors line-clamp-1">
                    • {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} {isLuxe ? "Artis Luxe Interiors LLC" : "Artis Technical"}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
