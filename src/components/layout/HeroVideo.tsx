import Link from "next/link";

import { buttonVariants } from "@/components/ui/button-variants";

interface HeroVideoProps {
  company: string;
  videoUrl: string;
  title: string;
  description: string;
}

export function HeroVideo({ company, videoUrl, title, description }: HeroVideoProps) {
  return (
    <section className="relative min-h-[82svh] w-full overflow-hidden">
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

      <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(0,0,0,0.74)_8%,rgba(0,0,0,0.46)_44%,rgba(0,0,0,0.68)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_28%)]" />

      <div className="relative z-10 container mx-auto flex min-h-[82svh] items-end px-4 pb-16 pt-32 md:pb-20">
        <div className="max-w-4xl rounded-[2.2rem] border border-white/14 bg-black/18 p-8 text-white shadow-[0_36px_90px_-36px_rgba(0,0,0,0.62)] backdrop-blur-md md:p-10">
          <div className="mb-6 h-px w-20 bg-white/70" />
          <h1 className="text-5xl font-semibold leading-[0.94] text-white md:text-7xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${company}/services`}
              className={buttonVariants({
                size: "lg",
                className: "border-none bg-primary text-primary-foreground hover:bg-primary-hover",
              })}
            >
              Our Services
            </Link>
            <Link
              href={`/${company}/contact`}
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className:
                  "border-white/25 bg-white/8 text-white hover:border-white hover:bg-white hover:text-black",
              })}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
