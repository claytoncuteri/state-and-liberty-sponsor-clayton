import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle, BulletList } from "../SlideLayout";
import { motion } from "framer-motion";

interface SlideProps {
  isActive?: boolean;
}

export function Slide13WhyNow({ isActive = true }: SlideProps) {
  const whyClayton = [
    "Authentic customer and brand advocate (not transactional)",
    "Proven viral content creator (70M+ monthly views)",
    "Elite engagement rate (17.7% vs. 1-3% industry standard)",
    "Perfect demographic alignment (75% male, 25-44 age range)",
    "Professional presentation in political spaces requiring high-quality attire",
    "Mission-aligned: Freedom, health, American values",
  ];

  const whyNow = [
    "Political cycle heating up (2025-2026)",
    "Health/food sovereignty movement gaining massive momentum",
    "Audience actively growing and engaging (+167% follower growth)",
    "Immediate podcast opportunities (this week!)",
    "First-mover advantage in untapped vertical",
    "Cultural moment: People seeking freedom-aligned brands",
  ];

  return (
    <SlideLayout slideNumber={13} isActive={isActive}>
      <AccentLine />
      <SlideTitle>Why Me, Why Now?</SlideTitle>
      <SlideSubtitle>The Right Partner at the Right Time</SlideSubtitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-8 flex-1">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-xl lg:text-2xl font-bold text-white mb-5">Why Clayton</h4>
          <BulletList items={whyClayton} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="text-xl lg:text-2xl font-bold text-white mb-5">Why Now</h4>
          <BulletList items={whyNow} />
        </motion.div>
      </div>

      <motion.div
        className="bg-crimson/15 border-2 border-crimson rounded-xl p-6 lg:p-10 mt-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        data-testid="callout-strategic-expansion"
      >
        <p className="text-xl lg:text-2xl font-bold text-white leading-relaxed mb-4">
          This isn't just an influencer deal —<br />it's a strategic expansion into a market segment<br />that perfectly aligns with your brand name and values.
        </p>
        <p className="text-lg text-slate-light italic">
          The timing, the audience, the alignment — everything is here.
        </p>
      </motion.div>
    </SlideLayout>
  );
}
