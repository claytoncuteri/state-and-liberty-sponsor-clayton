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

      <div className="grid grid-cols-2 gap-10 mt-4 flex-1">
        <div className="space-y-4">
          <motion.div
            className="bg-crimson/10 border-2 border-crimson rounded-xl p-6 text-center"
            initial={{ opacity: 0, x: -30 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            data-testid="stat-gender-split"
          >
            <p className="text-lg text-slate-light mb-2">Gender Split</p>
            <div className="text-5xl font-black text-crimson" data-testid="text-gender-value">
              <AnimatedNumber value={74.8} suffix="%" isActive={isActive} />
            </div>
            <p className="text-xl font-bold text-white mt-1">Male Audience</p>
            <p className="text-xs text-slate-light italic">(Rare in social media)</p>
          </motion.div>

          <motion.div
            className="bg-white/5 rounded-xl p-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-base text-slate-light mb-1">Discovery Potential</p>
            <div className="text-4xl font-black text-crimson">
              <AnimatedNumber value={93.3} suffix="%" isActive={isActive} />
            </div>
            <p className="text-sm text-white mt-1">Non-followers see content</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h4 className="text-xl font-bold text-white mb-3">Age Demographics</h4>
          <div className="bg-white/5 rounded-xl p-4 mb-4">
            <div className="text-4xl font-black text-crimson mb-1">
              <AnimatedNumber value={64} suffix="%" isActive={isActive} />
            </div>
            <p className="text-lg text-white mb-2">Ages 25-44</p>
            <div className="text-slate-light text-sm flex gap-4">
              <span>25-34: 30.3%</span>
              <span>35-44: 29.9%</span>
              <span>18-24: 9.4%</span>
            </div>
          </div>

          <h4 className="text-xl font-bold text-white mb-3">Audience Values</h4>
          <BulletList items={audienceValues} />
        </motion.div>
      </div>

      <div className="bg-crimson/10 border-l-4 border-crimson p-4 mt-4" data-testid="quote-demographics">
        <p className="text-lg font-semibold text-white">
          Prime spending power with disposable income and brand loyalty — the customers who invest in quality.
        </p>
      </div>
    </SlideLayout>
  );
}
