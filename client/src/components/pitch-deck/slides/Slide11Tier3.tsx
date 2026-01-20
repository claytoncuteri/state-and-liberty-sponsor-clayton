import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle, BulletList } from "../SlideLayout";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface SlideProps {
  isActive?: boolean;
}

export function Slide11Tier3({ isActive = true }: SlideProps) {
  const tier3Items = [
    "Everything in Tier 1 & 2, plus:",
    "Co-created marketing campaign: \"Performance for Patriots\" or \"Liberty in Motion\"",
    "Professional photo/video shoot in Charleston",
    "6-month ambassador partnership with content calendar",
    "Exclusive \"political professionals\" landing page on your site",
    "Speaking opportunities at State & Liberty events",
  ];

  return (
    <SlideLayout slideNumber={15} isActive={isActive}>
      <AccentLine />
      <SlideTitle>Tier 3: Strategic Campaign</SlideTitle>
      <SlideSubtitle>Full Partnership Experience</SlideSubtitle>

      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          className="bg-crimson/10 rounded-2xl p-8 lg:p-12 border-2 border-crimson max-w-4xl mx-auto w-full relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          data-testid="tier-3-card"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-crimson text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2">
            <Star className="w-4 h-4" />
            RECOMMENDED
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4 mt-4">
            <h3 className="text-3xl lg:text-4xl font-black text-white">TIER 3</h3>
            <div className="text-right">
              <div className="text-4xl lg:text-5xl font-black text-crimson">$15-25K</div>
              <div className="text-lg text-slate-light">per month</div>
            </div>
          </div>

          <BulletList items={tier3Items} />

          <motion.p
            className="text-sm text-slate-light mt-6 italic text-center"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            * Pricing is flexible based on desired deliverables. Mix and match options available.
          </motion.p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
