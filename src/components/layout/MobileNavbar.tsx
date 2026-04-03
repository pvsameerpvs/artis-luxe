"use client";

import { CompanyToggle } from "./CompanyToggle";

export function MobileNavbar({ company }: { company: string }) {
  return (
    <div className="fixed bottom-10 left-1/2 z-[100] -translate-x-1/2 md:hidden">
      <div className="rounded-full shadow-2xl backdrop-blur-2xl">
         <CompanyToggle company={company} />
      </div>
    </div>
  );
}
