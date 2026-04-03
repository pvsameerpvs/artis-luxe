import Link from "next/link";
import { MoveRight, ExternalLink } from "lucide-react";
import { Facebook, Instagram, Linkedin, Youtube } from "@/components/ui/social-icons";
import { getServices } from "@/data/services";

export function Footer({ company }: { company: string }) {
  const isLuxe = company === "luxe";
  const services = getServices(company).slice(0, 3);

  return (
    <footer className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
          {/* Left Side: Large CTA */}
          <div className="flex flex-col justify-center">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-12 text-white">
              LET&apos;S<br />
              TALK<br />
              ABOUT<br />
              YOUR<br />
              PROJECT<span className="text-primary">.</span>
            </h2>
            <Link 
              href={`/${company}/contact`}
              className="group flex items-center gap-4 text-xl md:text-2xl font-bold tracking-widest uppercase hover:text-primary transition-colors"
            >
              Get a free consultation
              <div className="size-12 rounded-full border border-white flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all">
                <MoveRight className="size-6 text-white" />
              </div>
            </Link>
          </div>

          {/* Right Side: Services & Info */}
          <div className="flex flex-col space-y-12">
            <div>
              <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-8">
                SERVICES<span className="text-primary">.</span>
              </h3>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link 
                      href={`/${company}/services/${service.slug}`}
                      className="text-3xl md:text-4xl font-bold tracking-tight hover:text-primary transition-colors"
                    >
                      {service.title.split(' ')[0]}<span className="text-primary">.</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="text-gray-400 text-lg leading-relaxed max-w-md">
                Warehouse no. 06, Building no. 02, Goshi Warehouse City, Al Quoz<br />
                Industrial Area 3, Dubai, UAE
              </div>
              <div className="font-bold text-lg md:text-xl">
                +971 4 388 1163 | info@artis{company}.com
              </div>
              
              <div className="flex flex-wrap gap-8 pt-4">
                <Link href="#" className="flex items-center gap-2 group">
                  <div className="size-3 bg-primary" />
                  <span className="font-bold tracking-widest uppercase text-sm group-hover:text-primary transition-colors">Vendor Portal</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 group">
                  <div className="size-3 bg-primary" />
                  <span className="font-bold tracking-widest uppercase text-sm group-hover:text-primary transition-colors">Join the Team</span>
                </Link>
              </div>

              <div className="flex gap-6 pt-6">
                <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="size-6" /></Link>
                <Link href="#" className="hover:text-primary transition-colors"><Instagram className="size-6" /></Link>
                <Link href="#" className="hover:text-primary transition-colors"><Facebook className="size-6" /></Link>
                <Link href="#" className="hover:text-primary transition-colors"><Youtube className="size-6" /></Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium tracking-widest uppercase text-gray-500">
          <div>
             Artis {isLuxe ? "Luxe" : "Technical"} © {new Date().getFullYear()}
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy and Cookies Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Careers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
