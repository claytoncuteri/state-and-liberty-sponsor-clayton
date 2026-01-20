import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle, BulletList } from "../SlideLayout";
import { motion } from "framer-motion";

interface SlideProps {
  isActive?: boolean;
}

export function Slide15Metrics({ isActive = true }: SlideProps) {
  const immediateMetrics = [
    "Brand mentions and tags across platforms",
    "Discount code usage and attribution",
    "Traffic to stateandliberty.com from content",
    "Audience sentiment and engagement on co-created content",
    "Social media follower growth correlation",
    "Content performance vs. baseline",
  ];

  const longTermMetrics = [
    "Revenue attributed to partnership channels",
    "New customer acquisition in political/freedom space",
    "Brand perception surveys",
    "Ambassador network expansion opportunities",
    "Repeat purchase rates from referred customers",
  ];

  return (
    <SlideLayout slideNumber={19} isActive={isActive}>
      <AccentLine />
      <SlideTitle>How We'll Measure Success</SlideTitle>
      <SlideSubtitle>Clear, Trackable Metrics</SlideSubtitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-8 flex-1">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-xl lg:text-2xl font-bold text-white mb-5">Immediate Metrics (0-3 months)</h4>
          <BulletList items={immediateMetrics} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="text-xl lg:text-2xl font-bold text-white mb-5">Long-Term Success (3-12 months)</h4>
          <BulletList items={longTermMetrics} />
        </motion.div>
      </div>

      <motion.div
        className="bg-white/5 border-2 border-crimson rounded-xl p-8 lg:p-12 mt-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        data-testid="callout-contact-cta"
      >
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Let's Build Something Together</h3>
        <p className="text-xl lg:text-2xl text-slate-light mb-2">
          Email: <span className="text-white">cuteri.clayton28@gmail.com</span>
        </p>
        <p className="text-3xl lg:text-4xl font-bold text-crimson mt-8">
          Ready to expand into the freedom vertical?
        </p>
      </motion.div>
    </SlideLayout>
  );
}
