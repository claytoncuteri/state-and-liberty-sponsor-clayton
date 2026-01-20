import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle } from "../SlideLayout";
import { StatBox } from "../StatBox";
import { AnimatedNumber } from "../AnimatedNumber";
import { motion } from "framer-motion";

interface SlideProps {
  isActive?: boolean;
}

export function Slide06Engagement({ isActive = true }: SlideProps) {
  return (
    <SlideLayout slideNumber={6} isActive={isActive}>
      <AccentLine />
      <SlideTitle>It's Not Just Reach, It's Connection</SlideTitle>
      <SlideSubtitle>Elite Engagement Metrics</SlideSubtitle>

      <motion.div
        className="bg-crimson/15 border-2 border-crimson rounded-xl p-4 lg:p-8 text-center my-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        data-testid="stat-engagement-rate"
      >
        <p className="text-lg lg:text-xl text-slate-light mb-2">Instagram Engagement Rate</p>
        <div className="text-5xl lg:text-7xl font-black text-crimson leading-none" data-testid="text-engagement-value">
          <AnimatedNumber value={17.7} suffix="%" isActive={isActive} duration={1.5} />
        </div>
        <p className="text-base lg:text-lg text-white mt-2">Industry Standard: 1-3% | <span className="italic text-slate-light">6-10x above average</span></p>
      </motion.div>

      <div className="grid grid-cols-3 gap-4 lg:gap-6 mt-4">
        <StatBox
          number={11600000}
          label="Instagram Interactions"
          sublabel="(60 days)"
          isActive={isActive}
          delay={1}
        />
        <StatBox
          number={1000000}
          suffix="+"
          label="Facebook Interactions"
          sublabel="(Since Dec 3)"
          isActive={isActive}
          delay={2}
        />
        <StatBox
          number={216000}
          label="Shares"
          sublabel="(Cross-platform)"
          isActive={isActive}
          delay={3}
        />
      </div>

      <motion.p
        className="text-center text-lg lg:text-xl font-bold text-white mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        My audience doesn't just watch, they engage, share, and take action.
      </motion.p>
    </SlideLayout>
  );
}
