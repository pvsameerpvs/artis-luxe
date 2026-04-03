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
};

const luxeVisuals: ServiceVisual[] = [
  {
    icon: Sparkles,
    style: {
      backgroundImage:
        "linear-gradient(135deg, #252122 0%, #CF2F28 46%, #F7F7F7 100%)",
    },
  },
  {
    icon: Building2,
    style: {
      backgroundImage:
        "linear-gradient(135deg, #252122 0%, #A82822 42%, #E5E7EB 100%)",
    },
  },
  {
    icon: Paintbrush2,
    style: {
      backgroundImage:
        "linear-gradient(135deg, #6E6E70 0%, #CF2F28 48%, #FFFFFF 100%)",
    },
  },
  {
    icon: Cable,
    style: {
      backgroundImage:
        "linear-gradient(135deg, #252122 0%, #CF2F28 52%, #F3F4F6 100%)",
    },
  },
];

const technicalVisuals: ServiceVisual[] = [
  {
    icon: Wrench,
    style: {
      backgroundImage:
        "linear-gradient(135deg, #0F172A 0%, #0284C7 48%, #F1F5F9 100%)",
    },
  },
  {
    icon: Factory,
    style: {
      backgroundImage:
        "linear-gradient(135deg, #0F172A 0%, #0369A1 45%, #E2E8F0 100%)",
    },
  },
  {
    icon: Drill,
    style: {
      backgroundImage:
        "linear-gradient(135deg, #475569 0%, #0284C7 50%, #FFFFFF 100%)",
    },
  },
  {
    icon: Cable,
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
