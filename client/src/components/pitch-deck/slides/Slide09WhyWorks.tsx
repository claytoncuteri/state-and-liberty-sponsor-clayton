import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle } from "../SlideLayout";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";

interface SlideProps {
  isActive?: boolean;
  step?: number;
}

export function Slide09WhyWorks({ isActive = true, step = 7 }: SlideProps) {
  const athletes = [
    "Optimize bodies for physical performance",
    "Require discipline & commitment",
    "Need professional presentation",
    "Demand freedom of movement",
    "Value American-made quality",
  ];

  const politicalLeaders = [
    "Optimize bodies for mental performance",
    "Require discipline & commitment",
    "Need professional presentation",
    "Champion personal freedom",
    "Value American-made quality",
  ];

  const visibleBullets = Math.min(Math.max(step - 1, 0), 5);

  return (
    <SlideLayout slideNumber={10} isActive={isActive}>
      <AccentLine />
      <SlideTitle>Why This Works</SlideTitle>
      <SlideSubtitle>Performance Meets Purpose</SlideSubtitle>

      <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-start mt-0 flex-1">
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              key="athletes-box"
              className="bg-crimson/10 border-2 border-crimson rounded-xl p-6 min-h-[280px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-2xl font-bold text-crimson mb-4 text-center">Athletes</h4>
              <ul className="space-y-2">
                {athletes.slice(0, visibleBullets).map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2 text-base text-slate-light"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-crimson mt-1">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              key="arrow-icon"
              className="flex justify-center pt-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowLeftRight className="w-12 h-12 text-crimson" />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              key="political-leaders-box"
              className="bg-crimson/10 border-2 border-crimson rounded-xl p-6 min-h-[280px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-2xl font-bold text-crimson mb-4 text-center">Political Leaders</h4>
              <ul className="space-y-2">
                {politicalLeaders.slice(0, visibleBullets).map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2 text-base text-slate-light"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-crimson mt-1">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {step >= 7 && (
          <motion.div
            key="philosophy-quote"
            className="bg-crimson/20 border-2 border-crimson rounded-lg p-6 mt-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            data-testid="quote-philosophy"
          >
            <p className="text-xl font-bold text-white leading-relaxed mb-2">
              "State & Liberty" isn't just a brand name, it's a philosophy that bridges both worlds.
            </p>
            <p className="text-lg text-slate-light italic">
              I'm already advocating for the health and freedom your brand name represents.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </SlideLayout>
  );
}
