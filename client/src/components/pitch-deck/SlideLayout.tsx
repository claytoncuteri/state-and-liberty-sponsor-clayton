import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import stateAndLibertyLogo from "@assets/state_and_liberty_logo_transparent_background_1768882188915.avif";

interface SlideLayoutProps {
  children: React.ReactNode;
  slideNumber?: number;
  isActive?: boolean;
  className?: string;
}

// Fixed design dimensions - slides are always this size, then scaled to fit
const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 1080;

export function useViewportScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Calculate scale to fit viewport while maintaining aspect ratio
      const scaleX = viewportWidth / DESIGN_WIDTH;
      const scaleY = viewportHeight / DESIGN_HEIGHT;
      
      // Use the smaller scale to ensure everything fits (letterbox/pillarbox)
      setScale(Math.min(scaleX, scaleY));
    };

    calculateScale();
    window.addEventListener("resize", calculateScale);
    return () => window.removeEventListener("resize", calculateScale);
  }, []);

  return scale;
}

export function SlideLayout({ children, slideNumber, isActive = true, className = "" }: SlideLayoutProps) {
  const scale = useViewportScale();

  return (
    <div className="w-full h-screen bg-navy flex items-center justify-center overflow-hidden">
      <motion.div
        className={`slide-container bg-gradient-to-br from-navy via-navy-light to-navy relative overflow-hidden ${className}`}
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header - fixed positions for 1920x1080 */}
        <div className="absolute top-12 left-16 right-16 z-10 flex justify-between items-center">
          <img 
            src={stateAndLibertyLogo} 
            alt="State & Liberty" 
            className="h-14 brightness-0 invert"
          />
          <div className="text-white text-3xl font-semibold tracking-widest leading-none">
            CLAYTON CUTERI
          </div>
        </div>

        {/* Content area - fixed padding for 1920x1080 */}
        <div className="content-area relative z-[2] pt-32 pb-20 px-16 h-full flex flex-col overflow-hidden">
          {children}
        </div>

        {/* Slide number */}
        {slideNumber !== undefined && (
          <div className="absolute bottom-12 right-16 text-white/40 text-lg font-light z-10">
            {String(slideNumber).padStart(2, "0")}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export function AccentLine() {
  return (
    <motion.div
      className="w-32 h-1 bg-crimson mb-8"
      initial={{ width: 0 }}
      animate={{ width: "8rem" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  );
}

export function SlideTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.h2
      className={`text-6xl font-black text-white mb-6 leading-tight tracking-tight ${className}`}
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
      className={`text-2xl font-light text-slate-light mb-12 leading-relaxed ${className}`}
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
    <ul className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        <motion.li
          key={index}
          className="text-slate-text text-lg leading-relaxed pl-6 relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
        >
          <span className="text-crimson text-xl absolute left-0 -top-0.5">&#9656;</span>
          {item}
        </motion.li>
      ))}
    </ul>
  );
}

export function QuoteBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`bg-crimson/10 border-l-4 border-crimson p-6 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
