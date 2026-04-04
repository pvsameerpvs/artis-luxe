"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function CompanyToggle({ company }: { company: string }) {
  const router = useRouter();

  const handleToggle = (newCompany: string) => {
    if (newCompany === company) return;
    
    // Always navigate to the home page of the selected company
    router.push(`/${newCompany}`);
  };

  return (
    <div className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-border/70 bg-background/92 p-1.5 shadow-[0_16px_36px_-26px_rgba(15,23,42,0.35)] backdrop-blur">
      <Button
        variant={company === "luxe" ? "default" : "ghost"}
        className="h-8 rounded-full px-3 text-[0.7rem] font-semibold shadow-none sm:px-3.5 sm:text-xs"
        onClick={() => handleToggle("luxe")}
      >
        Artis Luxe Interiors
      </Button>
      <Button
        variant={company === "technical" ? "default" : "ghost"}
        className="h-8 rounded-full px-3 text-[0.7rem] font-semibold shadow-none sm:px-3.5 sm:text-xs"
        onClick={() => handleToggle("technical")}
      >
        Artis Technical
      </Button>
    </div>
  );
}
