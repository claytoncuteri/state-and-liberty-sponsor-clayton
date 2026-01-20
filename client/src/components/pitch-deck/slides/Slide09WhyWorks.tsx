import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle, BulletList } from "../SlideLayout";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";
import outfitImage1 from "@assets/IMG_0892_1768871911680.jpg";
import outfitImage2 from "@assets/IMG_0928_1768871911681.jpg";

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

      <div className="grid grid-cols-[auto_1fr_auto_1fr_auto] gap-6 items-center mt-4 flex-1">
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              key="outfit-image-1"
              className="w-40 h-56 rounded-lg overflow-hidden border-2 border-crimson/50 shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              data-testid="img-outfit-1"
            >
              <img 
                src={outfitImage1} 
                alt="Clayton in State & Liberty outfit" 
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              key="athletes-box"
              className="bg-crimson/10 border-2 border-crimson rounded-xl p-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-2xl font-bold text-crimson mb-4 text-center">Athletes</h4>
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
              <ArrowLeftRight className="w-12 h-12 text-crimson" />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              key="political-leaders-box"
              className="bg-crimson/10 border-2 border-crimson rounded-xl p-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-2xl font-bold text-crimson mb-4 text-center">Political Leaders</h4>
              <BulletList items={politicalLeaders} />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              key="outfit-image-2"
              className="w-40 h-56 rounded-lg overflow-hidden border-2 border-crimson/50 shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
              data-testid="img-outfit-2"
            >
              <img 
                src={outfitImage2} 
                alt="Clayton in State & Liberty outfit" 
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {step >= 4 && (
          <motion.div
            key="philosophy-quote"
            className="bg-crimson/15 border-l-4 border-crimson p-6 mt-4 text-center"
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
