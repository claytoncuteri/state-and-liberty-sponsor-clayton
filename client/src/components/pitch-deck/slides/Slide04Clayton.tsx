import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle, BulletList } from "../SlideLayout";
import { motion } from "framer-motion";
import claytonHeadshot from "@assets/Clayton_Headshot_Suit_1768871955214.jpg";

interface SlideProps {
  isActive?: boolean;
}

export function Slide04Clayton({ isActive = true }: SlideProps) {
  const background = [
    "Co-founder & Secretary General, American Congress Party",
    "Advocate for purifying America's food source",
    "Mission: Restoring health sovereignty and freedom",
    "Professional presence in political spaces",
  ];

  const connection = [
    "Already a State & Liberty customer (Charleston store)",
    "Authentic brand alignment: Performance meets purpose",
    "Creating content organically in your apparel",
  ];

  return (
    <SlideLayout slideNumber={4} isActive={isActive}>
      <AccentLine />
      <SlideTitle>Who is Clayton Cuteri?</SlideTitle>
      <SlideSubtitle>Spiritual Political Personality | Food Freedom Advocate</SlideSubtitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-6 flex-1">
        <motion.div
          className="flex justify-center items-start"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-xl overflow-hidden border-4 border-crimson shadow-2xl shadow-crimson/20">
            <img
              src={claytonHeadshot}
              alt="Clayton Cuteri Professional Headshot"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="text-xl lg:text-2xl font-bold text-white mb-5">Background</h4>
          <BulletList items={background} />

          <h4 className="text-xl lg:text-2xl font-bold text-white mb-5 mt-8">The Connection</h4>
          <BulletList items={connection} />
        </motion.div>
      </div>

      <div className="bg-crimson/10 border-l-4 border-crimson p-6 lg:p-8 mt-8" data-testid="quote-clayton">
        <p className="text-lg lg:text-xl font-medium text-white leading-relaxed">
          "What you put IN your body matters. What you put ON your body matters. Both require the same discipline, quality, and freedom of choice."
        </p>
      </div>
    </SlideLayout>
  );
}
