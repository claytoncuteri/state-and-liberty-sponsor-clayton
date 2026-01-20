import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle } from "../SlideLayout";
import { StatBox } from "../StatBox";
import { motion } from "framer-motion";

interface SlideProps {
  isActive?: boolean;
}

export function Slide05Numbers({ isActive = true }: SlideProps) {
  return (
    <SlideLayout slideNumber={5} isActive={isActive}>
      <AccentLine />
      <SlideTitle>70M+ Monthly Cross-Platform Reach</SlideTitle>
      <SlideSubtitle>The Numbers Speak for Themselves</SlideSubtitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mt-6">
        <StatBox
          number={330000}
          label="Instagram Followers"
          sublabel="Growing +167% (90 days)"
          isActive={isActive}
          delay={0}
        />
        <StatBox
          number={65500000}
          label="Instagram Views"
          sublabel="(Last 90 days)"
          isActive={isActive}
          delay={1}
        />
        <StatBox
          number={4100000}
          label="YouTube Views"
          sublabel="(Last 90 days)"
          isActive={isActive}
          delay={2}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-6">
        <StatBox
          number={17000000}
          label="Facebook Views"
          sublabel="(Since Dec 3rd)"
          isActive={isActive}
          delay={3}
        />
        <StatBox
          number={70000000}
          suffix="+"
          label="Total Monthly Views"
          sublabel="Across All Platforms"
          highlighted={true}
          isActive={isActive}
          delay={4}
        />
      </div>

      <motion.div
        className="mt-8 p-6 lg:p-8 bg-crimson/10 rounded-xl text-center border border-crimson/30"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
        data-testid="text-opportunity-callout"
      >
        <p className="text-xl lg:text-2xl font-bold text-crimson mb-3">IMMEDIATE OPPORTUNITY</p>
        <p className="text-lg lg:text-xl text-white">
          Appearing on <strong>Digital Social Hour</strong> (Top 30 podcast) <strong>THIS FRIDAY</strong>
          <br />
          <span className="text-slate-light">Host: 12M Instagram followers</span>
        </p>
      </motion.div>
    </SlideLayout>
  );
}
