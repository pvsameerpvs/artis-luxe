import Link from "next/link";

import { buttonVariants } from "@/components/ui/button-variants";

interface HeroVideoProps {
  company: string;
  videoUrl: string;
  title: string;
  description: string;
}

export function HeroVideo({ company, videoUrl, title, description }: HeroVideoProps) {
  const isLuxe = company === "luxe";

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-muted" />

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-[linear-gradient(94deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.56)_34%,rgba(0,0,0,0.34)_62%,rgba(0,0,0,0.5)_100%)]" />
      <div
        className={
          isLuxe
            ? "absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(255,255,255,0.14),transparent_25%)]"
            : "absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(255,255,255,0.1),transparent_25%)]"
        }
      />

      <div className="relative z-10 container mx-auto flex min-h-[100dvh] items-center px-4 pt-24 md:pt-28">
        <div className="max-w-[40rem] animate-in fade-in slide-in-from-left-8 duration-700">
          <h1 className="text-5xl leading-[0.9] font-black tracking-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl">
            {title}
            <span className="text-primary">.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
            {description}
          </p>
          <Link
            href={`/${company}/contact`}
            className={buttonVariants({
              size: "lg",
              className:
                "mt-8 h-12 rounded-md border-none bg-primary px-7 text-base font-semibold text-primary-foreground hover:bg-primary-hover",
            })}
          >
            Get A Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
