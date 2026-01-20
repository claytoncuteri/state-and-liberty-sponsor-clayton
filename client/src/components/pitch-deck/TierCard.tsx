import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface TierCardProps {
  title: string;
  value: string;
  items: string[];
  recommended?: boolean;
  isActive?: boolean;
  delay?: number;
}

export function TierCard({ title, value, items, recommended = false, isActive = true, delay = 0 }: TierCardProps) {
  return (
    <motion.div
      className={`
        rounded-xl p-6 lg:p-8 transition-all duration-300 overflow-visible
        hover-elevate active-elevate-2
        ${recommended 
          ? "bg-crimson/15 border-2 border-crimson shadow-lg shadow-crimson/20" 
          : "bg-white/5 border-2 border-crimson/30"
        }
      `}
      initial={{ opacity: 0, y: 30 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay * 0.15, ease: "easeOut" }}
      data-testid={`tier-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex items-center gap-4 mb-2">
        <h4 className="text-2xl lg:text-3xl font-extrabold text-crimson">{title}</h4>
        {recommended && (
          <span className="bg-crimson text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Recommended
          </span>
        )}
      </div>
      <p className="text-slate-light text-lg mb-5">{value}</p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-slate-text text-base lg:text-lg flex items-start gap-3">
            <Check className="text-crimson w-5 h-5 mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
