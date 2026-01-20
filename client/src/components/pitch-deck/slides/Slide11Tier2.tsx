import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle, BulletList } from "../SlideLayout";
import { motion } from "framer-motion";

interface SlideProps {
  isActive?: boolean;
}

export function Slide11Tier2({ isActive = true }: SlideProps) {
  const tier2Items = [
    "Everything in Tier 1, plus:",
    "Dedicated podcast mentions (1 per week, I release weekly episodes)",
    "2-3 reels per month featuring State & Liberty (across all platforms)",
    "YouTube integration in relevant content",
    "Behind-the-scenes \"getting ready\" content",
  ];

  return (
    <SlideLayout slideNumber={14} isActive={isActive}>
      <AccentLine />
      <SlideTitle>Tier 2: Content Collaboration</SlideTitle>
      <SlideSubtitle>Expanding Reach Through Dedicated Content</SlideSubtitle>

      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          className="bg-white/5 rounded-2xl p-8 lg:p-12 border-2 border-white/20 max-w-4xl mx-auto w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          data-testid="tier-2-card"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
            <h3 className="text-3xl lg:text-4xl font-black text-white">TIER 2</h3>
            <div className="text-right">
              <div className="text-4xl lg:text-5xl font-black text-crimson">$5-15K</div>
              <div className="text-lg text-slate-light">per month</div>
            </div>
          </div>

          <BulletList items={tier2Items} />

          <motion.p
            className="text-sm text-slate-light mt-6 italic text-center"
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
