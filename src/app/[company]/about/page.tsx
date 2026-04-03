export default async function AboutPage({ params }: { params: Promise<{ company: string }> }) {
  const { company } = await params;
  const isLuxe = company === "luxe";

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground">
            {isLuxe 
              ? "Crafting luxurious spaces that inspire and captivate."
              : "Delivering uncompromising quality in technical and industrial services."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="h-80 bg-muted rounded-2xl flex items-center justify-center text-muted-foreground border">
            About Image
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-foreground leading-relaxed">
              {isLuxe 
                ? "Artis Luxe Interiors LLC was founded on a singular vision: to bring exquisite, bespoke design to discerning clients. We believe that every space has a story waiting to be told, and our team of visionary designers and master craftsmen work tirelessly to bring those stories to life."
                : "Artis Technical was built to answer the growing demand for highly specialized, reliable, and efficient infrastructure and maintenance services. We pride ourselves on executing complex projects with precision, safety, and operational excellence."}
            </p>
            <p className="text-foreground leading-relaxed">
              Our commitment to excellence has made us a trusted partner in the industry, and we continue to push boundaries to deliver exceptional results for every client we serve.
            </p>
          </div>
        </div>

        <div className="bg-card p-10 rounded-2xl shadow-sm border text-center">
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-primary">Excellence</h3>
              <p className="text-muted-foreground text-sm">We never compromise on the quality of our materials or our execution.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-primary">Integrity</h3>
              <p className="text-muted-foreground text-sm">Honesty, transparency, and ethical practices form the foundation of our business.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-primary">Innovation</h3>
              <p className="text-muted-foreground text-sm">We continuously seek new technologies and methodologies to improve our services.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
