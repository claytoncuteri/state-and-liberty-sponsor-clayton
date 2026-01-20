import {
  Slide01Title,
  Slide02Opportunity,
  Slide03Today,
  Slide04Clayton,
  Slide05Numbers,
  Slide06Engagement,
  Slide07Demographics,
  Slide08Content,
  Slide09WhyWorks,
  Slide10Market,
  Slide11PriceAnchor,
  Slide11Tier1,
  Slide11Tier2,
  Slide11Tier3,
  Slide12QuickWins,
  Slide13WhyNow,
  Slide14FAQ,
  Slide15Metrics,
  Slide16Analytics,
} from "@/components/pitch-deck/slides";

export interface SlideConfig {
  component: React.ComponentType<{ isActive: boolean; step: number }>;
  name: string;
  steps: number;
}

export const slides: SlideConfig[] = [
  { component: Slide01Title, name: "Title", steps: 1 },
  { component: Slide02Opportunity, name: "Opportunity", steps: 4 },
  { component: Slide03Today, name: "Today", steps: 1 },
  { component: Slide04Clayton, name: "Clayton", steps: 1 },
  { component: Slide05Numbers, name: "Numbers", steps: 6 },
  { component: Slide06Engagement, name: "Engagement", steps: 1 },
  { component: Slide07Demographics, name: "Demographics", steps: 1 },
  { component: Slide16Analytics, name: "Analytics", steps: 1 },
  { component: Slide08Content, name: "Content", steps: 1 },
  { component: Slide09WhyWorks, name: "Why Works", steps: 4 },
  { component: Slide10Market, name: "Market", steps: 1 },
  { component: Slide11PriceAnchor, name: "Price Anchor", steps: 1 },
  { component: Slide11Tier1, name: "Tier 1", steps: 1 },
  { component: Slide11Tier2, name: "Tier 2", steps: 1 },
  { component: Slide11Tier3, name: "Tier 3", steps: 1 },
  { component: Slide12QuickWins, name: "Quick Wins", steps: 1 },
  { component: Slide13WhyNow, name: "Why Now", steps: 1 },
  { component: Slide14FAQ, name: "FAQ", steps: 1 },
  { component: Slide15Metrics, name: "Metrics", steps: 1 },
];
