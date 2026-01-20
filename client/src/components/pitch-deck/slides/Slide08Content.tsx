import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle, BulletList } from "../SlideLayout";
import { motion } from "framer-motion";
import storePhoto from "@assets/IMG_0892_1768871911680.jpg";
import boatPhoto from "@assets/IMG_0928_1768871911681.jpg";

interface SlideProps {
  isActive?: boolean;
}

export function Slide08Content({ isActive = true }: SlideProps) {
  const contentThemes = [
    "Food sovereignty & health optimization",
    "Political freedom & personal liberty",
    "Professional presentation in political spaces",
  ];

  return (
    <SlideLayout slideNumber={9} isActive={isActive}>
      <AccentLine />
      <SlideTitle>Viral Performance in Action</SlideTitle>
      <SlideSubtitle>Proven Track Record of High-Impact Content</SlideSubtitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mt-4 flex-1">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-lg lg:text-xl font-bold text-white mb-3">Top-Performing Content</h4>
          
          <div className="space-y-2">
            <div className="bg-white/5 rounded-lg p-3 overflow-visible hover-elevate" data-testid="content-youtube">
              <p className="text-base text-crimson font-bold mb-1">YouTube: Food Sovereignty</p>
              <p className="text-sm text-slate-light">50K-300K+ views per video</p>
            </div>

            <div className="bg-white/5 rounded-lg p-3 overflow-visible hover-elevate" data-testid="content-instagram">
              <p className="text-base text-crimson font-bold mb-1">Instagram: Political Commentary</p>
              <p className="text-sm text-slate-light">Reels averaging 100K-500K views, several breaking 1M+</p>
            </div>

            <div className="bg-white/5 rounded-lg p-3 overflow-visible hover-elevate" data-testid="content-state-liberty">
              <p className="text-base text-crimson font-bold mb-1">Wearing State & Liberty</p>
              <p className="text-sm text-slate-light">Already creating authentic content in your apparel</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <motion.div
              className="rounded-lg overflow-hidden border-2 border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isActive ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              data-testid="img-store-photo"
            >
              <img src={storePhoto} alt="Clayton at State & Liberty Store" className="w-full h-24 lg:h-32 object-cover object-top" />
            </motion.div>
            <motion.div
              className="rounded-lg overflow-hidden border-2 border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isActive ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              data-testid="img-boat-photo"
            >
              <img src={boatPhoto} alt="Clayton on Boat" className="w-full h-24 lg:h-32 object-cover object-top" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="text-lg lg:text-xl font-bold text-white mb-3">Upcoming Media</h4>

          <div className="bg-crimson/15 border-2 border-crimson rounded-lg p-4 mb-4">
            <p className="text-base font-bold text-crimson mb-1">THIS FRIDAY (1/23)</p>
            <p className="text-base text-white">Digital Social Hour Podcast</p>
            <p className="text-sm text-slate-light">Top 30 podcast | Host: 12M Instagram followers</p>
          </div>

          <div className="bg-white/5 rounded-lg p-3 mb-4">
            <p className="text-base font-bold text-white mb-1">February 2026</p>
            <p className="text-sm text-slate-light">Additional top podcast appearance scheduled</p>
          </div>

          <h4 className="text-lg lg:text-xl font-bold text-white mb-3">Content Themes</h4>
          <BulletList items={contentThemes} />
        </motion.div>
      </div>
    </SlideLayout>
  );
}
