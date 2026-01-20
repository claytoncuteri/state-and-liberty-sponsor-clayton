import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle } from "../SlideLayout";
import { TierCard } from "../TierCard";
import { motion } from "framer-motion";

interface SlideProps {
  isActive?: boolean;
}

export function Slide11Tiers({ isActive = true }: SlideProps) {
  const tier1Items = [
    "Wardrobe partnership (suits, shirts, ties, accessories)",
    "Organic social media mentions (1-2x monthly to prevent audience fatigue)",
    "Tagged content in State & Liberty apparel across platforms",
    "Co-branded discount code for audience",
  ];

  const tier2Items = [
    "Everything in Tier 1, plus:",
    "Dedicated podcast mentions (1 per week - I release weekly episodes)",
    "2-3 reels per month featuring State & Liberty (across all platforms)",
    "YouTube integration in relevant content",
    "Behind-the-scenes \"getting ready\" content",
  ];

  const tier3Items = [
    "Everything in Tier 1 & 2, plus:",
    "Co-created marketing campaign: \"Performance for Patriots\" or \"Liberty in Motion\"",
    "Professional photo/video shoot in Charleston",
    "6-month ambassador partnership with content calendar",
    "Exclusive \"political professionals\" landing page on your site",
    "Speaking opportunities at State & Liberty events",
  ];

  return (
    <SlideLayout slideNumber={11} isActive={isActive}>
      <AccentLine />
      <SlideTitle>Flexible Partnership Tiers</SlideTitle>
      <SlideSubtitle>Scalable Approach Based on Your Goals</SlideSubtitle>

      <motion.div
        className="bg-white/5 rounded-lg p-5 mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
        data-testid="text-pricing-context"
      >
        <p className="text-lg text-slate-light">
          <strong className="text-white">Context:</strong> Traditional influencer campaigns of this scale typically run{" "}
          <strong className="text-crimson">$25-50K+</strong>
          <br />
          Here's a flexible approach based on your investment level:
        </p>
      </motion.div>

      <div className="space-y-4 lg:space-y-6">
        <TierCard
          title="TIER 1: FOUNDATIONAL"
          value="$0-5K value"
          items={tier1Items}
          isActive={isActive}
          delay={0}
        />
        <TierCard
          title="TIER 2: CONTENT COLLABORATION"
          value="$5-15K value"
          items={tier2Items}
          isActive={isActive}
          delay={1}
        />
        <TierCard
          title="TIER 3: STRATEGIC CAMPAIGN"
          value="$15K+ value"
          items={tier3Items}
          recommended={true}
          isActive={isActive}
          delay={2}
        />
      </div>
    </SlideLayout>
  );
}
