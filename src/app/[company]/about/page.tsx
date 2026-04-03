import { Building2, Sparkles, ShieldCheck } from "lucide-react";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ company: string }>;
}) {
  const { company } = await params;
  const isLuxe = company === "luxe";

  return (
    <div className="py-20 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 h-px w-20 bg-primary/35" />
          <h1 className="text-5xl font-semibold md:text-6xl">About Us</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground md:text-xl">
            {isLuxe
              ? "Crafting luxurious spaces that inspire and captivate."
              : "Delivering uncompromising quality in technical and industrial services."}
          </p>
        </div>

        <div className="mb-20 grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="relative h-80 overflow-hidden rounded-[2rem] border border-border/70 bg-muted shadow-[0_24px_60px_-36px_rgba(15,23,42,0.28)]">
            <div
              className={
                isLuxe
                  ? "absolute inset-0 bg-[linear-gradient(135deg,rgba(37,33,34,0.92)_0%,rgba(207,47,40,0.68)_48%,rgba(247,247,247,0.9)_100%)]"
                  : "absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.92)_0%,rgba(2,132,199,0.7)_48%,rgba(241,245,249,0.92)_100%)]"
              }
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.2)_100%)]" />
            <div className="absolute inset-6 rounded-[1.45rem] border border-white/18" />
            <div className="absolute inset-0 flex items-center justify-center text-lg font-medium text-white/85">
              About Image
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-semibold md:text-[2.8rem]">Our Story</h2>
            <p className="text-lg leading-8 text-foreground">
              {isLuxe
                ? "Artis Luxe Interiors LLC was founded on a singular vision: to bring exquisite, bespoke design to discerning clients. We believe that every space has a story waiting to be told, and our team of visionary designers and master craftsmen work tirelessly to bring those stories to life."
                : "Artis Technical was built to answer the growing demand for highly specialized, reliable, and efficient infrastructure and maintenance services. We pride ourselves on executing complex projects with precision, safety, and operational excellence."}
            </p>
            <p className="text-lg leading-8 text-foreground">
              Our commitment to excellence has made us a trusted partner in the industry, and we continue to push boundaries to deliver exceptional results for every client we serve.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border/70 bg-card/96 p-8 text-center shadow-[0_28px_72px_-42px_rgba(15,23,42,0.3)] md:p-10">
          <h2 className="text-4xl font-semibold md:text-5xl">Our Core Values</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            <div className="rounded-[1.5rem] border border-border/70 bg-background/78 p-6 shadow-[0_18px_42px_-32px_rgba(15,23,42,0.24)]">
              <div className="mx-auto flex size-12 items-center justify-center rounded-[1rem] bg-primary/10 text-primary">
                <Sparkles className="size-5" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-primary">Excellence</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                We never compromise on the quality of our materials or our execution.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-border/70 bg-background/78 p-6 shadow-[0_18px_42px_-32px_rgba(15,23,42,0.24)]">
              <div className="mx-auto flex size-12 items-center justify-center rounded-[1rem] bg-primary/10 text-primary">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-primary">Integrity</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Honesty, transparency, and ethical practices form the foundation of our business.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-border/70 bg-background/78 p-6 shadow-[0_18px_42px_-32px_rgba(15,23,42,0.24)]">
              <div className="mx-auto flex size-12 items-center justify-center rounded-[1rem] bg-primary/10 text-primary">
                <Building2 className="size-5" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-primary">Innovation</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                We continuously seek new technologies and methodologies to improve our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
