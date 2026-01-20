import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Play, Scroll, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import stateAndLibertyLogo from "@assets/state_and_liberty_logo_transparent_background_1768882188915.avif";

export default function LandingPage() {
  const [, setLocation] = useLocation();

  const handleStartPresentation = () => {
    setLocation("/presentation?mode=slide");
  };

  const handleViewScroll = () => {
    setLocation("/presentation?mode=scroll");
  };

  const handleDownloadPDF = async () => {
    setLocation("/presentation?download=true");
  };

  return (
    <div className="h-screen w-full bg-gradient-to-br from-navy via-navy-light to-navy flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-crimson/5 via-transparent to-transparent" />
      
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-6 mb-8">
          <img 
            src={stateAndLibertyLogo} 
            alt="State & Liberty" 
            className="h-16 lg:h-20 brightness-0 invert"
          />
          <div className="h-12 w-px bg-white/30" />
          <span className="text-white text-xl lg:text-2xl font-semibold tracking-widest">
            CLAYTON CUTERI
          </span>
        </div>

        <motion.div
          className="w-32 h-1 bg-crimson mb-8"
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
          Strategic Partnership Proposal
        </h1>
        
        <p className="text-lg lg:text-xl text-slate-light mb-12 max-w-xl">
          A comprehensive sponsorship opportunity connecting premium athletic apparel with 70M+ monthly political media impressions
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button
            onClick={handleStartPresentation}
            size="lg"
            className="bg-crimson text-white px-8 py-6 text-lg font-semibold gap-3"
            data-testid="button-start-presentation"
          >
            <Play className="w-5 h-5" />
            Start Presentation
          </Button>

          <Button
            onClick={handleViewScroll}
            size="lg"
            variant="outline"
            className="border-white/30 text-white px-8 py-6 text-lg font-semibold gap-3 bg-white/5 backdrop-blur-sm"
            data-testid="button-view-scroll"
          >
            <Scroll className="w-5 h-5" />
            View All Slides
          </Button>

          <Button
            onClick={handleDownloadPDF}
            size="lg"
            variant="outline"
            className="border-white/30 text-white px-8 py-6 text-lg font-semibold gap-3 bg-white/5 backdrop-blur-sm"
            data-testid="button-download-pdf"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </Button>
        </div>

        <motion.p 
          className="text-white/40 text-sm mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          19 slides · $15K - $25K/month partnership tiers
        </motion.p>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <motion.div 
          className="w-2 h-2 rounded-full bg-crimson"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="w-2 h-2 rounded-full bg-crimson"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.div 
          className="w-2 h-2 rounded-full bg-crimson"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        />
      </div>
    </div>
  );
}
