import { Building2, Sparkles, ShieldCheck, MoveRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";

const luxeData = {
  title: "Artis Luxe",
  subtitle: "Crafting luxurious spaces that inspire and captivate.",
  story1: "Artis Luxe Interiors LLC was founded on a singular vision: to bring exquisite, bespoke design to discerning clients.",
  story2: "We believe that every space has a story waiting to be told, and our team of visionary designers and master craftsmen work tirelessly to bring those stories to life. Our portfolio focuses on opulent residential properties, premium boutiques, fine dining restaurants, and exclusive boutique hotels.",
  image1: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
  image2: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop"
};

const technicalData = {
  title: "Artis Technical",
  subtitle: "Delivering uncompromising quality in technical and industrial services.",
  story1: "Artis Technical was built to answer the growing demand for highly specialized, reliable, and efficient infrastructure and maintenance services.",
  story2: "We pride ourselves on executing complex projects with precision, safety, and operational excellence. Our extensive portfolio includes warehouses, large-scale commercial buildings, factories, infrastructure developments, and healthcare facilities.",
  image1: "https://images.unsplash.com/photo-1541889813583-8a303649479b?q=80&w=800&auto=format&fit=crop",
  image2: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ company: string }>;
}) {
  const { company } = await params;
  const isLuxe = company === "luxe";
  const data = isLuxe ? luxeData : technicalData;

  return (
    <div className="bg-background pt-24">
      {/* Header Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 border-b border-border/40">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
          <div className="lg:w-1/2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              About Us<span className="text-primary">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
              {data.subtitle}
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
               <img src={data.image1} alt="About Us" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Our Story<span className="text-primary">.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {data.story1}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {data.story2}
            </p>
            <p className="text-lg font-medium border-l-4 border-primary pl-4 py-2">
              Our commitment to excellence has made us a trusted partner in the industry, and we continue to push boundaries to deliver exceptional results for every client we serve.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="relative aspect-[3/4] w-full max-w-lg mx-auto overflow-hidden">
               <img src={data.image2} alt="Our Story" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/10" />
               <div className="absolute bottom-8 left-8 right-8 bg-background/90 backdrop-blur-md p-6 border-l-4 border-primary">
                 <h3 className="text-xl font-bold">{data.title}</h3>
                 <p className="text-sm text-muted-foreground">Established with excellence</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 py-16 md:py-24 border-t border-border/40">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Core Values<span className="text-primary">.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            The principles that guide our work and define our commitment to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { 
              icon: Sparkles, 
              title: "Excellence", 
              desc: "We never compromise on the quality of our materials or our execution. Every detail matters.",
              img: "https://images.unsplash.com/photo-1542314831-c6a4d14d231de?q=80&w=400&auto=format&fit=crop"
            },
            { 
              icon: ShieldCheck, 
              title: "Integrity", 
              desc: "Honesty, transparency, and ethical practices form the bedrock of all our business operations.",
              img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=400&auto=format&fit=crop"
            },
            { 
              icon: Building2, 
              title: "Innovation", 
              desc: "We continuously seek new technologies and methodologies to elevate our service delivery.",
              img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop"
            }
          ].map((value, i) => (
            <div key={i} className="group flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden mb-6">
                <img src={value.img} alt={value.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute top-4 left-4 size-12 bg-background/90 backdrop-blur-md rounded-full flex items-center justify-center">
                  <value.icon className="size-5 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 border-t border-border/40">
        <div className="bg-primary/5 rounded-none md:rounded-2xl border border-primary/20 p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start your next project?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Get in touch with our team of experts today. We are ready to bring your vision to life with precision and excellence.
          </p>
          <Link
            href={`/${company}/contact`}
            className={buttonVariants({
              size: "lg",
              className: "bg-primary text-white hover:bg-primary-hover border-none font-semibold px-8 h-14 text-lg",
            })}
          >
            Contact Us <MoveRight className="ml-2 size-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
