import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle, BulletList } from "../SlideLayout";
import { motion } from "framer-motion";

interface SlideProps {
  isActive?: boolean;
}

export function Slide02Opportunity({ isActive = true }: SlideProps) {
  const whereYouAre = [
    "Mastered the athletic vertical (Paul Skenes, NHL/MLB athletes)",
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-6 flex-1">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-2xl lg:text-3xl font-bold text-crimson mb-6">Where You Are</h4>
          <BulletList items={whereYouAre} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="text-2xl lg:text-3xl font-bold text-crimson mb-6">The Untapped Vertical</h4>
          <BulletList items={untappedVertical} />
        </motion.div>
      </div>

      <div className="bg-crimson/10 border-l-4 border-crimson p-6 lg:p-8 mt-8 lg:mt-12" data-testid="quote-opportunity">
        <p className="text-xl lg:text-2xl font-medium text-white leading-relaxed">
          "State & Liberty" isn't just a brand name — it's a statement of values that resonates far beyond the athletic arena.
        </p>
      </div>
    </SlideLayout>
  );
}
