import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle, BulletList } from "../SlideLayout";
import { AnimatedNumber } from "../AnimatedNumber";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface SlideProps {
  isActive?: boolean;
}

export function Slide12QuickWins({ isActive = true }: SlideProps) {
  const lowHangingFruit = [
    "Already creating content in your apparel organically",
    "Existing relationship with Charleston store (Travis)",
    "Authentic customer testimonial ready to share",
    "Audience actively asking about professional wardrobe recommendations",
  ];

  const immediateActions = [
    "Confirm partnership tier by Wednesday",
    "Wardrobe coordination for Friday appearance",
    "Natural product integration in episode",
  ];

  return (
    <SlideLayout slideNumber={12} isActive={isActive}>
      <AccentLine />
      <SlideTitle>Quick Wins Starting This Week</SlideTitle>
      <SlideSubtitle>Time-Sensitive Opportunities</SlideSubtitle>

      <motion.div
        className="bg-gradient-to-br from-crimson/20 to-crimson/5 border-2 border-crimson rounded-2xl p-6 lg:p-10 my-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        data-testid="callout-friday-podcast"
      >
        <div className="flex items-center gap-3 mb-4">
          <Zap className="w-8 h-8 text-crimson" />
          <p className="text-xl lg:text-2xl text-crimson font-bold">THIS FRIDAY</p>
          <Zap className="w-8 h-8 text-crimson" />
        </div>
        <h3 className="text-3xl lg:text-5xl font-black text-white mb-6">Digital Social Hour Podcast</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-lg text-slate-light mb-2">Host Reach:</p>
            <div className="text-4xl lg:text-5xl font-black text-crimson">
              <AnimatedNumber value={12000000} isActive={isActive} />
              <span className="text-2xl ml-2">followers</span>
            </div>
          </div>
          <div>
            <p className="text-lg text-slate-light mb-2">Opportunity:</p>
            <p className="text-xl lg:text-2xl font-bold text-white">
              Wearing State & Liberty on camera = instant visibility
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="text-xl lg:text-2xl font-bold text-white mb-5">Low-Hanging Fruit</h4>
          <BulletList items={lowHangingFruit} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h4 className="text-xl lg:text-2xl font-bold text-white mb-5">February 2026</h4>
          <div className="bg-white/5 rounded-xl p-5 mb-6">
            <p className="text-lg text-white font-semibold mb-2">Additional Top Podcast</p>
            <p className="text-slate-light">Another major podcast appearance scheduled for February with similar high-reach potential</p>
          </div>

          <h4 className="text-xl font-bold text-white mb-4">Immediate Action Items</h4>
          <BulletList items={immediateActions} />
        </motion.div>
      </div>
    </SlideLayout>
  );
}
