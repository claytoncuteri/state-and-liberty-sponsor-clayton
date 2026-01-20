import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle, BulletList } from "../SlideLayout";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";

interface SlideProps {
  isActive?: boolean;
  step?: number;
}

export function Slide09WhyWorks({ isActive = true, step = 4 }: SlideProps) {
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

  return (
    <SlideLayout slideNumber={10} isActive={isActive}>
      <AccentLine />
      <SlideTitle>Why This Works</SlideTitle>
      <SlideSubtitle>Performance Meets Purpose</SlideSubtitle>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center mt-8 flex-1">
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              key="athletes-box"
              className="bg-crimson/10 border-2 border-crimson rounded-xl p-6 lg:p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-2xl lg:text-3xl font-bold text-crimson mb-6 text-center">Athletes</h4>
              <BulletList items={athletes} />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              key="arrow-icon"
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowLeftRight className="w-12 h-12 lg:w-16 lg:h-16 text-crimson" />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              key="political-leaders-box"
              className="bg-crimson/10 border-2 border-crimson rounded-xl p-6 lg:p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-2xl lg:text-3xl font-bold text-crimson mb-6 text-center">Political Leaders</h4>
              <BulletList items={politicalLeaders} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {step >= 4 && (
          <motion.div
            key="philosophy-quote"
            className="bg-crimson/15 border-l-4 border-crimson p-6 lg:p-10 mt-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            data-testid="quote-philosophy"
          >
            <p className="text-2xl lg:text-3xl font-bold text-white leading-relaxed mb-4">
              "State & Liberty" isn't just a brand name,<br />it's a philosophy that bridges both worlds.
            </p>
            <p className="text-lg lg:text-xl text-slate-light italic">
              I'm already advocating for the health and freedom your brand name represents.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </SlideLayout>
  );
}
