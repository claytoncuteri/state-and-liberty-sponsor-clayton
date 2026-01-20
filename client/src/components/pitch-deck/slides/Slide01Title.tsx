import { motion } from "framer-motion";
import claytonHeadshot from "@assets/Clayton_Headshot_Suit_1768871955214.jpg";
import stateAndLibertyLogo from "@assets/State_and_liberty_logo_1768872767045.png";

interface SlideProps {
  isActive?: boolean;
}

export function Slide01Title({ isActive = true }: SlideProps) {
  return (
    <div className="slide-container w-full h-full min-h-screen bg-gradient-to-br from-navy via-navy-light to-navy relative overflow-hidden flex items-center justify-center" data-testid="slide-title">
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${claytonHeadshot})`, filter: "blur(30px)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-transparent to-navy" />
      </div>

      <div className="absolute top-8 left-10 right-10 z-10 flex justify-between items-center lg:top-12 lg:left-16 lg:right-16">
        <motion.img 
          src={stateAndLibertyLogo}
          alt="State & Liberty"
          className="h-10 lg:h-14 brightness-0 invert"
          initial={{ opacity: 0, x: -20 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        />
        <motion.div 
          className="text-white text-lg font-semibold tracking-widest lg:text-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          CLAYTON CUTERI
        </motion.div>
      </div>

      <div className="relative z-10 text-center w-full px-6 lg:px-20">
        <motion.div
          className="w-24 lg:w-32 h-1 bg-crimson mx-auto mb-8 lg:mb-10"
          initial={{ width: 0 }}
          animate={isActive ? { width: "8rem" } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.h1
          className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 lg:mb-8 uppercase tracking-tighter"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          data-testid="text-title-main"
        >
          <span className="text-crimson">STATE & LIBERTY</span>
          <span className="font-light mx-4 lg:mx-8">×</span>
          <span>CLAYTON CUTERI</span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-light mb-6"
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
          <p className="text-xl lg:text-2xl font-medium text-white">
            Expanding Performance Apparel into Political Influence
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-10 right-10 flex justify-between text-slate-light/60 text-sm lg:text-base lg:bottom-12 lg:left-16 lg:right-16"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div>Partnership Proposal | January 2026</div>
        <div className="font-medium">Confidential</div>
      </motion.div>
    </div>
  );
}
