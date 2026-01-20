import { motion } from "framer-motion";
import stateAndLibertyLogo from "@assets/State_and_liberty_logo_1768872767045.png";

interface SlideLayoutProps {
  children: React.ReactNode;
  slideNumber?: number;
  isActive?: boolean;
  className?: string;
}

export function SlideLayout({ children, slideNumber, isActive = true, className = "" }: SlideLayoutProps) {
  return (
    <motion.div
      className={`slide-container w-full h-full min-h-screen bg-gradient-to-br from-navy via-navy-light to-navy relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={isActive ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute top-8 left-10 right-10 z-10 flex justify-between items-center lg:top-12 lg:left-16 lg:right-16">
        <img 
          src={stateAndLibertyLogo} 
          alt="State & Liberty" 
          className="h-10 lg:h-14 brightness-0 invert"
        />
        <div className="text-white text-lg font-semibold tracking-widest lg:text-xl">
          CLAYTON CUTERI
        </div>
      </div>

      <div className="content-area relative z-[2] pt-28 pb-16 px-6 h-full flex flex-col lg:pt-40 lg:pb-24 lg:px-16">
        {children}
      </div>

      {slideNumber !== undefined && (
        <div className="absolute bottom-6 right-10 text-white/40 text-lg font-light z-10 lg:bottom-12 lg:right-16">
          {String(slideNumber).padStart(2, "0")}
        </div>
      )}
    </motion.div>
  );
}

export function AccentLine() {
  return (
    <motion.div
      className="w-24 lg:w-32 h-1 bg-crimson mb-8"
      initial={{ width: 0 }}
      animate={{ width: "8rem" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  );
}

export function SlideTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.h2
      className={`text-4xl lg:text-6xl font-black text-white mb-4 lg:mb-6 leading-tight tracking-tight ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {children}
    </motion.h2>
  );
}

export function SlideSubtitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.h3
      className={`text-xl lg:text-2xl font-light text-slate-light mb-8 lg:mb-12 leading-relaxed ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {children}
    </motion.h3>
  );
}

export function BulletList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <motion.li
          key={index}
          className="text-slate-text text-lg lg:text-xl leading-relaxed pl-8 relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
        >
          <span className="text-crimson text-2xl absolute left-0 -top-1">&#9656;</span>
          {item}
        </motion.li>
      ))}
    </ul>
  );
}

export function QuoteBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`bg-crimson/10 border-l-4 border-crimson p-6 lg:p-8 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
