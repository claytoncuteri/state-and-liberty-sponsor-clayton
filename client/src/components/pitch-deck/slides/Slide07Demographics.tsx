import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle, BulletList } from "../SlideLayout";
import { AnimatedNumber } from "../AnimatedNumber";
import { motion } from "framer-motion";

interface SlideProps {
  isActive?: boolean;
}

export function Slide07Demographics({ isActive = true }: SlideProps) {
  const audienceValues = [
    "Freedom & personal sovereignty",
    "Health optimization & performance",
    "American-made quality",
    "Professional presentation",
  ];

  return (
    <SlideLayout slideNumber={7} isActive={isActive}>
      <AccentLine />
      <SlideTitle>Your Dream Demographic</SlideTitle>
      <SlideSubtitle>Perfect Audience Alignment with State & Liberty</SlideSubtitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-6 flex-1">
        <div className="space-y-6">
          <motion.div
            className="bg-crimson/10 border-2 border-crimson rounded-xl p-8 text-center"
            initial={{ opacity: 0, x: -30 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            data-testid="stat-gender-split"
          >
            <p className="text-xl text-slate-light mb-3">Gender Split</p>
            <div className="text-6xl lg:text-7xl font-black text-crimson" data-testid="text-gender-value">
              <AnimatedNumber value={74.8} suffix="%" isActive={isActive} />
            </div>
            <p className="text-2xl font-bold text-white mt-2">Male Audience</p>
            <p className="text-sm text-slate-light mt-1 italic">(Rare in social media)</p>
          </motion.div>

          <motion.div
            className="bg-white/5 rounded-xl p-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-slate-light mb-2">Discovery Potential</p>
            <div className="text-4xl lg:text-5xl font-black text-crimson">
              <AnimatedNumber value={93.3} suffix="%" isActive={isActive} />
            </div>
            <p className="text-white mt-1">Non-followers see content</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h4 className="text-xl lg:text-2xl font-bold text-white mb-5">Age Demographics</h4>
          <div className="bg-white/5 rounded-xl p-6 mb-6">
            <div className="text-5xl font-black text-crimson mb-2">
              <AnimatedNumber value={64} suffix="%" isActive={isActive} />
            </div>
            <p className="text-xl text-white mb-4">Ages 25-44</p>
            <div className="text-slate-light text-base space-y-1">
              <p>• 25-34: 30.3%</p>
              <p>• 35-44: 29.9%</p>
              <p>• 18-24: 9.4%</p>
            </div>
          </div>

          <h4 className="text-xl lg:text-2xl font-bold text-white mb-5">Audience Values</h4>
          <BulletList items={audienceValues} />
        </motion.div>
      </div>

      <div className="bg-crimson/10 border-l-4 border-crimson p-6 lg:p-8 mt-6" data-testid="quote-demographics">
        <p className="text-xl font-semibold text-white">
          "This audience cares about what they put IN their body and ON their body."
        </p>
      </div>
    </SlideLayout>
  );
}
