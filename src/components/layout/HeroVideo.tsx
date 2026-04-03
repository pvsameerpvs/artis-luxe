import { buttonVariants } from "@/components/ui/button-variants";
import Link from "next/link";

interface HeroVideoProps {
  company: string;
  videoUrl: string;
  title: string;
  description: string;
}

export function HeroVideo({ company, videoUrl, title, description }: HeroVideoProps) {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Fallback background */}
      <div className="absolute inset-0 bg-muted z-0"></div>
      
      {/* Video element */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ color: "white" }}>
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            {description}
          </p>
          <div className="flex gap-4 pt-4">
            <Link href={`/${company}/services`} className={buttonVariants({ size: "lg", className: "bg-primary hover:bg-primary-hover text-primary-foreground border-none" })}>
              Our Services
            </Link>
            <Link href={`/${company}/contact`} className={buttonVariants({ size: "lg", variant: "outline", className: "bg-transparent text-white border-white hover:bg-white hover:text-black" })}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
