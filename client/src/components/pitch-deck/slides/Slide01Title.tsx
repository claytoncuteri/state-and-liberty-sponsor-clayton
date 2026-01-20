import { motion } from "framer-motion";
import claytonHeadshot from "@assets/Clayton_Headshot_Suit_1768871955214.jpg";
import stateAndLibertyLogo from "@assets/state_and_liberty_logo_transparent_background_1768882188915.avif";
import { useViewportScale, DESIGN_WIDTH, DESIGN_HEIGHT } from "../SlideLayout";

interface SlideProps {
  isActive?: boolean;
}

export function Slide01Title({ isActive = true }: SlideProps) {
  const scale = useViewportScale();

  return (
    <div className="w-full h-screen bg-navy flex items-center justify-center overflow-hidden" data-testid="slide-title">
      <div
        className="slide-container bg-gradient-to-br from-navy via-navy-light to-navy relative overflow-hidden flex items-center justify-center"
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {/* Background */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${claytonHeadshot})`, filter: "blur(30px)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-transparent to-navy" />
        </div>

        {/* Header - fixed positions for 1920x1080 */}
        <div className="absolute top-12 left-16 right-16 z-10 flex justify-between items-center">
          <motion.img 
            src={stateAndLibertyLogo}
            alt="State & Liberty"
            className="h-14 brightness-0 invert"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          />
          <motion.div 
            className="text-white text-3xl font-semibold tracking-widest"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            CLAYTON CUTERI
          </motion.div>
        </div>

        {/* Main content - fixed sizes for 1920x1080 */}
        <div className="relative z-10 text-center w-full px-20">
          <motion.div
            className="w-32 h-1 bg-crimson mx-auto mb-10"
            initial={{ width: 0 }}
            animate={isActive ? { width: "8rem" } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <motion.h1
            className="text-8xl font-black text-white mb-8 uppercase tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            data-testid="text-title-main"
          >
            <span className="text-crimson">STATE & LIBERTY</span>
            <span className="font-light mx-8">×</span>
            <span>CLAYTON CUTERI</span>
          </motion.h1>

          <motion.p
            className="text-4xl font-light text-slate-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A Strategic Partnership Proposal
          </motion.p>

          <motion.div
            className="max-w-3xl mx-auto mt-10 pt-10 border-t-2 border-crimson/30"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-2xl font-medium text-white">
              Expanding Performance Apparel into Political Influence
            </p>
          </motion.div>
        </div>

        {/* Footer - fixed positions for 1920x1080 */}
        <motion.div
          className="absolute bottom-12 left-16 right-16 flex justify-between text-slate-light/60 text-base"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div>Partnership Proposal | January 2026</div>
          <div className="font-medium">Confidential</div>
        </motion.div>
      </div>
    </div>
  );
}
