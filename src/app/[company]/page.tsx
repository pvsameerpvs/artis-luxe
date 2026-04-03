import Link from "next/link";
import { MoveRight, Play } from "lucide-react";

import { HeroVideo } from "@/components/layout/HeroVideo";
import { buttonVariants } from "@/components/ui/button-variants";

const luxeData = {
  heroVideoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  heroTitle: "Artis Luxe",
  heroDesc: "Elevating Spaces to Premium Destinations with bespoke interior designs.",
  stats: [
    { value: "200+", label: "Luxury Projects" },
    { value: "50+", label: "Palaces & Villas" },
    { value: "30+", label: "Design Awards" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "12+", label: "Years in UAE" },
  ],
  servicesTitle: "Services we offer",
  services: ["Luxury Fit-Out", "Bespoke Design", "Premium Furnishing"],
  serviceImages: [
    { title: "Luxury Fit-Out", src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" },
    { title: "Bespoke Design", src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" },
    { title: "Premium Furnishing", src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop" }
  ],
  bannerImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
  bannerTitle: "Crafting Exquisite Environments",
  bannerDesc: "Where luxury meets unparalleled attention to detail",
  whyUsDesc1: "At Artis Luxe, we specialize in delivering high-end, bespoke interior design and luxury fit-out solutions for exclusive clients in the UAE.",
  whyUsDesc2: "Our portfolio focuses on opulent residential properties, premium boutiques, fine dining restaurants, and exclusive boutique hotels.",
  sectors: [
    { title: "Luxury Villas", src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop" },
    { title: "Fine Dining", src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop" },
    { title: "Boutique Hotels", src: "https://images.unsplash.com/photo-1542314831-c6a4d14d231de?q=80&w=600&auto=format&fit=crop" },
    { title: "High-end Retail", src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop" },
    { title: "Palaces", src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=600&auto=format&fit=crop" },
    { title: "Private Yachts", src: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=600&auto=format&fit=crop" }
  ],
  videoImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  trustTitle: "Trusted by the best global brands.",
  projectsDesc: "Explore a selection of our magnificent interior transformations across high-net-worth residential and premium commercial sectors.",
  projects: [
    { title: "Palm Jumeirah Villa", src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
    { title: "Downtown Penthouse", src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop" }
  ],
  featureMain: {
    title: "Timeless Elegance: The Return of Classic Marble in Modern Homes",
    src: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=1200&auto=format&fit=crop"
  },
  featuresListDesc: "Keep up to date with Artis Luxe's latest design trends, premium materials, and luxury features.",
  features: [
    { title: "Selecting The Perfect Ambient Lighting For Villas", src: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=400&auto=format&fit=crop" },
    { title: "Bespoke Furniture: A Mark of Distiction", src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=400&auto=format&fit=crop" },
    { title: "Integrating Smart Tech in Classic Interiors", src: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=400&auto=format&fit=crop" }
  ]
};

const technicalData = {
  heroVideoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  heroTitle: "Artis Technical",
  heroDesc: "Precision Industrial & Commercial Solutions for large-scale infrastructure.",
  stats: [
    { value: "500+", label: "Facilities Managed" },
    { value: "150+", label: "Corporate Partners" },
    { value: "300+", label: "Field Experts" },
    { value: "10M+", label: "SqFt Covered" },
    { value: "24/7", label: "Support Available" },
  ],
  servicesTitle: "Core Services",
  services: ["MEP Works", "Civil & Contracting", "Facility Upkeep"],
  serviceImages: [
    { title: "MEP Works", src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop" },
    { title: "Civil Contracting", src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" },
    { title: "Facility Upkeep", src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop" }
  ],
  bannerImage: "https://images.unsplash.com/photo-1541889813583-8a303649479b?q=80&w=2000&auto=format&fit=crop",
  bannerTitle: "Engineering Reliable Infrastructure",
  bannerDesc: "Excellence in Maintenance & Electromechanical Services",
  whyUsDesc1: "At Artis Technical, we specialize in delivering robust, high-quality technical installations and civil works across the industrial and commercial sectors in the UAE.",
  whyUsDesc2: "Our extensive portfolio includes warehouses, large-scale commercial buildings, factories, infrastructure developments, and healthcare facilities.",
  sectors: [
    { title: "Commercial", src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600&auto=format&fit=crop" },
    { title: "Industrial", src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" },
    { title: "Healthcare", src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop" },
    { title: "Warehouses", src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop" },
    { title: "Education", src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop" },
    { title: "Infrastructure", src: "https://images.unsplash.com/photo-1541889813583-8a303649479b?q=80&w=600&auto=format&fit=crop" }
  ],
  videoImage: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop",
  trustTitle: "Trusted by the world's leading industries.",
  projectsDesc: "Explore a selection of our large-scale civil and maintenance structures spanning specialized operational complexes.",
  projects: [
    { title: "Dubai Logistics Center", src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop" },
    { title: "Multi-story Healthcare Facility", src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" }
  ],
  featureMain: {
    title: "Optimizing HVAC Systems for Massive Commercial Spaces",
    src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop"
  },
  featuresListDesc: "Keep up to date with Artis Technical's innovations, safety standards, and operational guidelines.",
  features: [
    { title: "Safety Protocols in High-Voltage Facilities", src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&auto=format&fit=crop" },
    { title: "The Rise of Automated Facility Management", src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop" },
    { title: "Preventative vs. Reactive Maintenance", src: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=400&auto=format&fit=crop" }
  ]
};

export default async function CompanyHome({
  params,
}: {
  params: Promise<{ company: string }>;
}) {
  const { company } = await params;
  const isLuxe = company === "luxe";
  const data = isLuxe ? luxeData : technicalData;

  return (
    <div className="bg-background">
      <HeroVideo
        company={company}
        videoUrl={data.heroVideoUrl}
        title={data.heroTitle}
        description={data.heroDesc}
      />

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 md:py-20 border-b border-border/40">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 text-center">
          {data.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center space-y-2">
              <span className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</span>
              <span className="text-sm md:text-base font-medium text-foreground/80">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services We Offer */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          <div className="lg:w-1/4">
            <h2 className="text-4xl leading-tight font-bold tracking-tight mb-8">
              {data.servicesTitle.split(' ').map((word, i, arr) => 
                i === arr.length - 1 ? (
                  <span key={i}>
                    <br className="hidden lg:block"/>
                    {word}<span className="text-primary">.</span>
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </h2>
            <ul className="space-y-4">
              {data.services.map((service) => (
                <li key={service} className="flex items-center justify-between group cursor-pointer hover:text-primary transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="w-3 h-3 bg-primary block" />
                    <span className="text-lg font-medium">{service}</span>
                  </div>
                  <MoveRight className="w-5 h-5 text-primary opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-transform" />
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.serviceImages.map((img, i) => (
                <div key={i} className="group relative h-64 md:h-80 overflow-hidden">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                    <h3 className="text-white text-2xl font-semibold translate-y-2 group-hover:translate-y-0 transition-transform">{img.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="container mx-auto px-4 py-8">
        <div className="relative w-full h-[22rem] overflow-hidden flex items-center">
          <img 
            src={data.bannerImage} 
            alt="Banner Image" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 w-full px-8 md:px-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{data.bannerTitle}</h2>
              <p className="text-lg text-white/80">{data.bannerDesc}</p>
            </div>
            <Link
              href={`/${company}/contact`}
              className={buttonVariants({
                size: "lg",
                className: "bg-primary text-white hover:bg-primary-hover border-none font-semibold w-fit shrink-0",
              })}
            >
              Get A Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us / Sectors */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          <div className="lg:w-1/3">
            <h2 className="text-4xl leading-tight font-bold tracking-tight mb-6">
              Why {data.heroTitle}<span className="text-primary">?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {data.whyUsDesc1}
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {data.whyUsDesc2}
            </p>
            <Link
              href={`/${company}/about`}
              className={buttonVariants({
                size: "lg",
                className: "bg-primary text-white hover:bg-primary-hover border-none font-semibold px-8",
              })}
            >
              Know More About Us
            </Link>
          </div>
          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {data.sectors.map((sector, i) => (
                <div key={i} className="group relative h-40 md:h-48 overflow-hidden">
                  <img src={sector.src} alt={sector.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <h3 className="text-white text-lg font-medium">{sector.title}<span className="text-primary group-hover:opacity-100 opacity-0 transition-opacity">.</span></h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video w-full overflow-hidden group cursor-pointer">
              <img 
                src={data.videoImage} 
                alt="Video thumbnail" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
                  <Play className="w-6 h-6 text-foreground ml-1" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              {data.trustTitle.split(' ').map((word, i, arr) => 
                i === arr.length - 2 || i === arr.length - 3 ? (
                  <span key={i} className="text-primary">{word} </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </h2>
          </div>
        </div>
      </section>

      {/* Delivering Results */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 mb-12">
          <div className="lg:w-1/3">
            <h2 className="text-4xl leading-tight font-bold tracking-tight mb-6">
              Delivering Results<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed pr-8">
              {data.projectsDesc}
            </p>
            <Link
              href={`/${company}/services`}
              className={buttonVariants({
                size: "lg",
                className: "bg-primary text-white hover:bg-primary-hover border-none font-semibold px-8",
              })}
            >
              View All Projects
            </Link>
          </div>
          <div className="lg:w-2/3">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {data.projects.map((project, i) => (
                 <div key={i} className="group relative aspect-[4/3] overflow-hidden">
                   <img src={project.src} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                   <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                     <h3 className="text-white text-2xl font-semibold mb-2">{project.title}</h3>
                     <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">View Project Specs</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Latest Features */}
      <section className="container mx-auto px-4 py-16 md:py-24 border-t border-border/40">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-1/2">
             <div className="group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden mb-6">
                  <img src={data.featureMain.src} alt={data.featureMain.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4 group-hover:text-primary transition-colors">
                  {data.featureMain.title}
                </h3>
             </div>
          </div>
          <div className="lg:w-1/2 flex flex-col">
            <div className="mb-10">
              <h2 className="text-4xl leading-tight font-bold tracking-tight mb-4">
                Latest Features<span className="text-primary">.</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                {data.featuresListDesc}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {data.features.map((article, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-video overflow-hidden mb-4 rounded-sm">
                    <img src={article.src} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h4 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors line-clamp-3">
                    {article.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
