import { motion } from "framer-motion";
import { AnimatedNumber } from "./AnimatedNumber";

interface StatBoxProps {
  number: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  highlighted?: boolean;
  isActive?: boolean;
  delay?: number;
}

export function StatBox({
  number,
  suffix = "",
  prefix = "",
  label,
  sublabel,
  highlighted = false,
  isActive = true,
  delay = 0,
}: StatBoxProps) {
  return (
    <motion.div
      className={`
        bg-white/5 border rounded-xl p-10 text-center transition-all duration-300 overflow-visible
        hover-elevate active-elevate-2
        ${highlighted ? "border-2 border-crimson bg-crimson/10" : "border-white/10"}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay * 0.1, ease: "easeOut" }}
      data-testid={`stat-box-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="text-crimson font-black text-5xl mb-2">
        <AnimatedNumber
          value={number}
          suffix={suffix}
          prefix={prefix}
          isActive={isActive}
          duration={1.2}
        />
      </div>
      <div className="text-slate-light text-xl font-light">
        {label}
        {sublabel && (
          <>
            <br />
            <span className="text-base">{sublabel}</span>
          </>
        )}
      </div>
    </motion.div>
  );
}
