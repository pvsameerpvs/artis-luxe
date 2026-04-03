import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { notFound } from "next/navigation";

export default async function CompanyLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ company: string }>;
}) {
  const { company } = await params;
  
  // Validate company segment
  if (company !== "luxe" && company !== "technical") {
    notFound();
  }

  const themeClass = company === "luxe" ? "theme-luxe" : "theme-technical";

  return (
    <div className={`flex flex-col min-h-screen ${themeClass}`}>
      <Navbar company={company} />
      <main className="flex-1 bg-background text-foreground transition-colors duration-300">
        {children}
      </main>
      <Footer company={company} />
    </div>
  );
}
