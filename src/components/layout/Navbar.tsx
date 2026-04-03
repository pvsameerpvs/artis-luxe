"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CompanyToggle } from "./CompanyToggle";

export function Navbar({ company }: { company: string }) {
  const isLuxe = company === "luxe";
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: `/${company}` },
    { label: "About", href: `/${company}/about` },
    { label: "Services", href: `/${company}/services` },
    { label: "Contact", href: `/${company}/contact` },
  ];

  return (
    <header className="fixed top-0 z-[100] w-full px-4 pt-4">
      <div className="container mx-auto">
        <div className="rounded-[1.9rem] border border-border/70 bg-background/85 px-4 py-3 shadow-[0_28px_70px_-42px_rgba(15,23,42,0.45)] backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <Link href={`/${company}`} className="flex items-center gap-4 group">
              <div className="relative size-16 md:size-20 overflow-hidden">
                <Image src="/logo.png" alt="Artis Logo" fill className="object-contain" />
              </div>
              <span className="block font-heading text-2xl md:text-3xl leading-none tracking-tight">
                {isLuxe ? "Artis Luxe" : "Artis Technical"}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-foreground/80 hover:bg-muted hover:text-foreground transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="ml-4 h-6 w-px bg-border/50" />
              <CompanyToggle company={company} />
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              className="flex size-11 items-center justify-center rounded-full bg-muted md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 top-[4.5rem] z-[-1] min-h-screen bg-background p-8 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col gap-6 py-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-4xl font-bold tracking-tight hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}<span className="text-primary">.</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-12 border-t border-border/40">
           <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">Contact us</p>
           <p className="text-lg font-medium">info@artis{company}.com</p>
        </div>
      </div>
    </header>
  );
}
