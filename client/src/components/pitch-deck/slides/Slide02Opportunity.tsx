import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle, BulletList } from "../SlideLayout";
import { motion, AnimatePresence } from "framer-motion";

interface SlideProps {
  isActive?: boolean;
  step?: number;
}

export function Slide02Opportunity({ isActive = true, step = 4 }: SlideProps) {
  const whereYouAre = [
    "Mastered the athletic vertical (NFL/NHL/MLB athletes)",
    "Performance fabric designed for athletic builds",
    "Strong brand recognition in sports",
    "500+ NHL, 350+ NFL, 1000+ professional athletes",
  ];

  const untappedVertical = [
    "Political professionals & freedom advocates",
    "Health-conscious leaders requiring high-performance attire",
    "The brand name itself carries political weight",
    "Natural expansion: Athletic performance → Professional performance",
  ];

  return (
    <SlideLayout slideNumber={2} isActive={isActive}>
      <AccentLine />
      <SlideTitle>The Opportunity</SlideTitle>
      <SlideSubtitle>From Athletic Excellence to Political Influence</SlideSubtitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mt-4 flex-1">
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              key="where-you-are"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl lg:text-2xl font-bold text-crimson mb-4">Where You Are</h4>
              <BulletList items={whereYouAre} />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              key="untapped-vertical"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl lg:text-2xl font-bold text-crimson mb-4">The Untapped Vertical</h4>
              <BulletList items={untappedVertical} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {step >= 4 && (
          <motion.div 
            key="quote"
            className="bg-crimson/10 border-l-4 border-crimson p-4 lg:p-6 mt-4" 
            data-testid="quote-opportunity"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-base lg:text-lg font-medium text-white leading-relaxed">
              "State & Liberty" isn't just a brand name, it's a statement of values that resonates far beyond the athletic arena.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </SlideLayout>
  );
}
