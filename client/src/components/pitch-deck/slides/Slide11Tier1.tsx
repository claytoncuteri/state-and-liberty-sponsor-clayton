import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle, BulletList } from "../SlideLayout";
import { motion } from "framer-motion";

interface SlideProps {
  isActive?: boolean;
}

export function Slide11Tier1({ isActive = true }: SlideProps) {
  const tier1Items = [
    "Wardrobe partnership (suits, shirts, ties, accessories)",
    "Organic social media mentions (1-2x monthly to prevent audience fatigue)",
    "Tagged content in State & Liberty apparel across platforms",
    "Co-branded discount code for audience",
  ];

  return (
    <SlideLayout slideNumber={13} isActive={isActive}>
      <AccentLine />
      <SlideTitle>Tier 1: Foundational</SlideTitle>
      <SlideSubtitle>Getting Started with Partnership</SlideSubtitle>

      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          className="bg-white/5 rounded-xl p-8 border-2 border-white/20 max-w-3xl mx-auto w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          data-testid="tier-1-card"
        >
          <div className="flex flex-row items-center justify-between mb-4 gap-2">
            <h3 className="text-3xl font-black text-white">TIER 1</h3>
            <div className="text-right">
              <div className="text-4xl font-black text-crimson">$0-5K</div>
              <div className="text-sm text-slate-light">per month</div>
            </div>
          </div>

          <BulletList items={tier1Items} />

          <motion.p
            className="text-xs text-slate-light mt-4 italic text-center"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            * Pricing is flexible based on desired deliverables. Mix and match options available.
          </motion.p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
