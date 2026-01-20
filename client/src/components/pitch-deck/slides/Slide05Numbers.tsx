import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle } from "../SlideLayout";
import { StatBox } from "../StatBox";
import { motion, AnimatePresence } from "framer-motion";

interface SlideProps {
  isActive?: boolean;
  step?: number;
}

export function Slide05Numbers({ isActive = true, step = 6 }: SlideProps) {
  return (
    <SlideLayout slideNumber={5} isActive={isActive}>
      <AccentLine />
      <SlideTitle>70M+ Monthly Cross-Platform Reach</SlideTitle>
      <SlideSubtitle>The Numbers Speak for Themselves</SlideSubtitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mt-6">
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              key="stat-instagram-followers"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <StatBox
                number={330000}
                label="Instagram Followers"
                sublabel="Growing +167% (90 days)"
                isActive={step >= 2}
                delay={0}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              key="stat-instagram-views"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <StatBox
                number={65500000}
                label="Instagram Views"
                sublabel="(Last 90 days)"
                isActive={step >= 3}
                delay={0}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {step >= 4 && (
            <motion.div
              key="stat-youtube-views"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <StatBox
                number={4100000}
                label="YouTube Views"
                sublabel="(Last 90 days)"
                isActive={step >= 4}
                delay={0}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-6">
        <AnimatePresence>
          {step >= 5 && (
            <motion.div
              key="stat-facebook-views"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <StatBox
                number={17000000}
                label="Facebook Views"
                sublabel="(Since Dec 3rd)"
                isActive={step >= 5}
                delay={0}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {step >= 5 && (
            <motion.div
              key="stat-total-views"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <StatBox
                number={70000000}
                suffix="+"
                label="Total Monthly Views"
                sublabel="Across All Platforms"
                highlighted={true}
                isActive={step >= 5}
                delay={0}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {step >= 6 && (
          <motion.div
            key="opportunity-callout"
            className="mt-8 p-6 lg:p-8 bg-crimson/10 rounded-xl text-center border border-crimson/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            data-testid="text-opportunity-callout"
          >
            <p className="text-xl lg:text-2xl font-bold text-crimson mb-3">IMMEDIATE OPPORTUNITY</p>
            <p className="text-lg lg:text-xl text-white">
              Appearing on <strong>Digital Social Hour</strong> (Top 30 podcast) <strong>THIS FRIDAY (1/23)</strong>
              <br />
              <span className="text-slate-light">Host: 12M Instagram followers</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </SlideLayout>
  );
}
