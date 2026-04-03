import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Cable,
  Drill,
  Factory,
  Paintbrush2,
  Sparkles,
  Wrench,
} from "lucide-react";

type ServiceVisual = {
  icon: LucideIcon;
  style: CSSProperties;
  image: string;
};

const luxeVisuals: ServiceVisual[] = [
  {
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    style: {
      backgroundImage:
        "linear-gradient(135deg, #252122 0%, #CF2F28 46%, #F7F7F7 100%)",
    },
  },
  {
    icon: Building2,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    style: {
      backgroundImage:
        "linear-gradient(135deg, #252122 0%, #A82822 42%, #E5E7EB 100%)",
    },
  },
  {
    icon: Paintbrush2,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
    style: {
      backgroundImage:
        "linear-gradient(135deg, #6E6E70 0%, #CF2F28 48%, #FFFFFF 100%)",
    },
  },
  {
    icon: Cable,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
    style: {
      backgroundImage:
        "linear-gradient(135deg, #252122 0%, #CF2F28 52%, #F3F4F6 100%)",
    },
  },
];

const technicalVisuals: ServiceVisual[] = [
  {
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop",
    style: {
      backgroundImage:
        "linear-gradient(135deg, #0F172A 0%, #0284C7 48%, #F1F5F9 100%)",
    },
  },
  {
    icon: Factory,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    style: {
      backgroundImage:
        "linear-gradient(135deg, #0F172A 0%, #0369A1 45%, #E2E8F0 100%)",
    },
  },
  {
    icon: Drill,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
    style: {
      backgroundImage:
        "linear-gradient(135deg, #475569 0%, #0284C7 50%, #FFFFFF 100%)",
    },
  },
  {
    icon: Cable,
    image: "https://images.unsplash.com/photo-1541889813583-8a303649479b?q=80&w=800&auto=format&fit=crop",
    style: {
      backgroundImage:
        "linear-gradient(135deg, #0F172A 0%, #0284C7 54%, #F8FAFC 100%)",
    },
  },
];

export function getServiceVisual(company: string, index: number): ServiceVisual {
  const visuals = company === "technical" ? technicalVisuals : luxeVisuals;

  return visuals[index % visuals.length];
}
