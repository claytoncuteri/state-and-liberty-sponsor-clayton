import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  isActive?: boolean;
}

export function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  duration = 1.2,
  className = "",
  isActive = true,
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);
  const isDecimal = value % 1 !== 0;

  useEffect(() => {
    if ((isInView || isActive) && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const animatedValue = value * easeOut;
        setDisplayValue(isDecimal ? parseFloat(animatedValue.toFixed(1)) : Math.floor(animatedValue));

        if (now < endTime) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, isActive, value, duration, isDecimal]);

  const formatNumber = (num: number) => {
    if (isDecimal) {
      return num.toFixed(1);
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(num >= 100000 ? 0 : 1).replace(/\.0$/, "") + "K";
    }
    return num.toLocaleString();
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView || isActive ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {prefix}
      {formatNumber(displayValue)}
      {suffix}
    </motion.span>
  );
}
