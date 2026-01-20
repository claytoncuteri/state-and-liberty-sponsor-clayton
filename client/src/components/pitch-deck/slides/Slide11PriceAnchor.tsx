import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle } from "../SlideLayout";
import { AnimatedNumber } from "../AnimatedNumber";
import { motion } from "framer-motion";

interface SlideProps {
  isActive?: boolean;
}

export function Slide11PriceAnchor({ isActive = true }: SlideProps) {
  return (
    <SlideLayout slideNumber={12} isActive={isActive}>
      <AccentLine />
      <SlideTitle>Flexible Partnership Tiers</SlideTitle>
      <SlideSubtitle>Scalable Approach Based on Your Goals</SlideSubtitle>

      <motion.div
        className="flex-1 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="bg-white/5 rounded-2xl p-8 lg:p-12 text-center max-w-3xl mx-auto border border-white/10" data-testid="price-anchor-box">
          <p className="text-xl lg:text-2xl text-slate-light mb-6">
            Traditional influencer campaigns of this scale typically run:
          </p>
          <div className="text-6xl lg:text-8xl font-black text-crimson mb-4">
            $<AnimatedNumber value={25} isActive={isActive} />K - $<AnimatedNumber value={50} isActive={isActive} />K+
          </div>
          <p className="text-xl lg:text-2xl text-white mt-6">
            per campaign
          </p>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-xl lg:text-2xl text-slate-light">
            Here's a flexible approach based on your investment level...
          </p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
