"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function CompanyToggle({ company }: { company: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleToggle = (newCompany: string) => {
    // Replace the current company in the pathname with the new one
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0) {
      segments[0] = newCompany;
      router.push(`/${segments.join('/')}`);
    } else {
      router.push(`/${newCompany}`);
    }
  };

  return (
    <div className="flex bg-muted p-1 rounded-lg items-center gap-1">
      <Button
        variant={company === "luxe" ? "default" : "ghost"}
        className="text-sm font-semibold h-8"
        onClick={() => handleToggle("luxe")}
      >
        Artis Luxe Interiors
      </Button>
      <Button
        variant={company === "technical" ? "default" : "ghost"}
        className="text-sm font-semibold h-8"
        onClick={() => handleToggle("technical")}
      >
        Artis Technical
      </Button>
    </div>
  );
}
