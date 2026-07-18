import type { ServicePackage } from "../types";

export const PACKAGES: ServicePackage[] = [
  {
    id: "quick",
    readyLabel: "Ready within 3 days",
    title: "Quick Session",
    description: "Perfect for a fast and focused portrait session",
    duration: "30 Min",
    price: "$ 299",
    features: [
      { text: "+20 edited photos", included: true },
      { text: "One location", included: true },
      { text: "Portraits or headshots", included: true },
      { text: "Outfit changes", included: false },
      { text: "Styled direction", included: false },
      { text: "Lighting setups", included: false },
    ],
  },
  {
    id: "full",
    readyLabel: "Ready within 5 days",
    title: "Full Portrait",
    description: "Ideal for personal portraits, couples, brands",
    duration: "1.5 Hrs",
    price: "$ 499",
    popular: true,
    badge: "Most popular",
    features: [
      { text: "+50 edited photos", included: true },
      { text: "1-2 locations", included: true },
      { text: "Portraits & details", included: true },
      { text: "1-2 outfit changes", included: true },
      { text: "Basic styled direction", included: true },
      { text: "Lighting setups", included: false },
    ],
  },
  {
    id: "creative",
    readyLabel: "Ready within 1 week",
    title: "Creative Day",
    description: "A half-day session for full creative freedom",
    duration: "3-4 Hrs",
    price: "$ 999",
    features: [
      { text: "+120 edited photos", included: true },
      { text: "Multiple locations", included: true },
      { text: "Portraits, details & candid shots", included: true },
      { text: "Unlimited outfit changes", included: true },
      { text: "Advanced styled direction", included: true },
      { text: "Advanced lighting setups", included: true },
    ],
  },
];
