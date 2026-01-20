import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle, BulletList } from "../SlideLayout";
import { motion } from "framer-motion";

interface SlideProps {
  isActive?: boolean;
}

export function Slide03Today({ isActive = true }: SlideProps) {
  const brandFoundation = [
    "Founded by former athletes Lee Moffie & Steven Fisher",
    "Performance fabric engineered for athletic builds",
    "American-made quality and craftsmanship",
    "Brand values: Performance, professionalism, freedom",
  ];

  const ambassadorFocus = [
    "Professional athletes (MLB, NHL, NFL)",
    "Sports media personalities (ESPN, Fox Sports)",
    "Collegiate athletes and emerging talent",
    "Athletic-focused brand storytelling",
  ];

  return (
    <SlideLayout slideNumber={3} isActive={isActive}>
      <AccentLine />
      <SlideTitle>State & Liberty Today</SlideTitle>
      <SlideSubtitle>Understanding Your Current Position</SlideSubtitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mt-4 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-lg lg:text-xl font-bold text-white mb-3">Brand Foundation</h4>
          <BulletList items={brandFoundation} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="text-lg lg:text-xl font-bold text-white mb-3">Current Ambassador Focus</h4>
          <BulletList items={ambassadorFocus} />
        </motion.div>
      </div>

      <motion.div
        className="mt-8 lg:mt-10 text-center py-4 lg:py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        data-testid="text-brand-story"
      >
        <p className="text-xl lg:text-2xl text-slate-light italic leading-relaxed max-w-4xl mx-auto">
          You've built an exceptional brand in the athletic space. The name "State & Liberty" carries inherent meaning that extends far beyond sports, and that's where this partnership comes in.
        </p>
      </motion.div>
    </SlideLayout>
  );
}
