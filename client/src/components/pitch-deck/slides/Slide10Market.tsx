import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle, BulletList } from "../SlideLayout";
import { motion } from "framer-motion";

interface SlideProps {
  isActive?: boolean;
}

export function Slide10Market({ isActive = true }: SlideProps) {
  const whyMatters = [
    "Political professionals need performance apparel for long days and high-stakes appearances",
    "Freedom/liberty movement has massive, underserved audience",
    "Natural brand extension: Athletic performance → Professional performance",
    "Political figures increasingly health-conscious and brand-aware",
    "Untapped influencer category with large, engaged platforms",
  ];

  return (
    <SlideLayout slideNumber={10} isActive={isActive}>
      <AccentLine />
      <SlideTitle>Opening a New Market Segment</SlideTitle>
      <SlideSubtitle>Strategic Vertical Expansion</SlideSubtitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-8 flex-1">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-xl lg:text-2xl font-bold text-white mb-5">Why This Matters for State & Liberty</h4>
          <BulletList items={whyMatters} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="text-xl lg:text-2xl font-bold text-white mb-5">Market Opportunity</h4>
          
          <div className="bg-crimson/10 border-2 border-crimson rounded-xl p-6 mb-6">
            <p className="text-xl text-white font-semibold mb-3">The Political Professional</p>
            <p className="text-slate-light leading-relaxed">
              A growing demographic of leaders, advocates, and media personalities who value performance, quality, and the principles of freedom your brand name embodies.
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 overflow-visible hover-elevate" data-testid="market-gap-box">
            <p className="text-lg text-crimson font-bold mb-3">Current Gap in Market</p>
            <p className="text-slate-text leading-relaxed">
              No major athletic apparel brand has successfully bridged into the political/freedom advocacy space. This is a first-mover opportunity.
            </p>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
