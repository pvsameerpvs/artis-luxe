export interface Service {
  title: string;
  slug: string;
  description: string;
}

export const luxeServices: Service[] = [
  {
    title: "Computer Network & Infrastructure Installation & Maintenance",
    slug: "computer-network-infrastructure",
    description: "Expert installation and maintenance of reliable computer networks and IT infrastructure for modern spaces."
  },
  {
    title: "Air-Conditioning, Ventilations & Air Filtration Systems Installation & Maintenance",
    slug: "hvac-installation-maintenance",
    description: "Comprehensive HVAC services ensuring optimal air quality and temperature control."
  },
  {
    title: "Floor & Wall Tiling Works",
    slug: "floor-wall-tiling-works",
    description: "Premium tiling solutions for floors and walls with meticulous attention to detail."
  },
  {
    title: "Carpentry & Wood Flooring Works",
    slug: "carpentry-wood-flooring",
    description: "Custom carpentry and exquisite wood flooring adding warmth and elegance to your interiors."
  },
  {
    title: "Automated Car Parking Systems Installation & Maintenance",
    slug: "automated-car-parking-systems",
    description: "State-of-the-art automated parking systems for space optimization and convenience."
  },
  {
    title: "Decoration Design & Implementation",
    slug: "decoration-design-implementation",
    description: "Bespoke decoration designs tailored to elevate your living and working environments."
  },
  {
    title: "Painting Contracting",
    slug: "painting-contracting",
    description: "Professional painting services using high-quality materials for a flawless finish."
  },
  {
    title: "Building Maintenance",
    slug: "building-maintenance",
    description: "Comprehensive building maintenance ensuring safety, functionality, and longevity."
  },
  {
    title: "False Ceiling & Light Partitions Installation",
    slug: "false-ceiling-light-partitions",
    description: "Innovative false ceilings and light partitions to enhance spatial aesthetics and acoustics."
  },
  {
    title: "Electromechanical Equipment Installation and Maintenance",
    slug: "electromechanical-equipment",
    description: "Reliable installation and upkeep of essential electromechanical systems."
  },
  {
    title: "Glass & Aluminum Installation & Maintenance",
    slug: "glass-aluminum-installation",
    description: "Sleek and durable glass and aluminum solutions for contemporary architectural needs."
  }
];

export const technicalServices: Service[] = [
  {
    title: "Wallpaper Fixing Works",
    slug: "wallpaper-fixing-works",
    description: "Professional wallpaper application for a seamless and durable finish."
  },
  {
    title: "Plumbing & Sanitary Installation",
    slug: "plumbing-sanitary-installation",
    description: "Expert plumbing services ensuring efficient and hygienic sanitary systems."
  },
  {
    title: "Carpentry & Wood Flooring Works",
    slug: "carpentry-wood-flooring",
    description: "High-quality woodwork and flooring tailored to technical and structural requirements."
  },
  {
    title: "Electromechanical Equipment Installation and Maintenance",
    slug: "electromechanical-equipment",
    description: "Specialized maintenance and installation of robust electromechanical equipment."
  },
  {
    title: "Engraving & Ornamentation Works",
    slug: "engraving-ornamentation-works",
    description: "Detailed engraving and ornamentation adding unique character to architectural elements."
  },
  {
    title: "Painting Contracting",
    slug: "painting-contracting",
    description: "Industrial and commercial painting solutions designed for durability and protection."
  },
  {
    title: "Air-Conditioning, Ventilations & Air Filtration Systems Installation & Maintenance",
    slug: "hvac-installation-maintenance",
    description: "Advanced HVAC systems installation tailored for technical and commercial spaces."
  },
  {
    title: "Floor & Wall Tiling Works",
    slug: "floor-wall-tiling-works",
    description: "Heavy-duty tiling works suitable for demanding structural environments."
  },
  {
    title: "Insulation Contracting",
    slug: "insulation-contracting",
    description: "Superior insulation services maximizing thermal efficiency and acoustic control."
  },
  {
    title: "False Ceiling & Light Partitions Installation",
    slug: "false-ceiling-light-partitions",
    description: "Functional and aesthetic ceiling and partition solutions for versatile spaces."
  }
];

export function getServices(company: string): Service[] {
  return company === 'technical' ? technicalServices : luxeServices;
}

export function getServiceBySlug(company: string, slug: string): Service | undefined {
  const services = getServices(company);
  return services.find(s => s.slug === slug);
}
