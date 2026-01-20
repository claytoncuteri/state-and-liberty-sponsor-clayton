import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Download, Grid, Presentation, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
  viewMode: "slide" | "scroll";
  onToggleViewMode: () => void;
  onExportPDF: () => void;
  onFullscreen: () => void;
  isExporting?: boolean;
}

export function Navigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoToSlide,
  viewMode,
  onToggleViewMode,
  onExportPDF,
  onFullscreen,
  isExporting = false,
}: NavigationProps) {
  const progress = ((currentSlide + 1) / totalSlides) * 100;
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const showNavigation = !isFullscreen || isHovering;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50 transition-opacity duration-300"
        style={{ opacity: showNavigation ? 1 : 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: showNavigation ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="h-full bg-crimson"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.div>

      <AnimatePresence>
        {viewMode === "slide" && (
          <>
            <motion.button
              className="fixed left-2 top-1/2 -translate-y-1/2 z-40 p-3 lg:p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed overflow-visible hover-elevate active-elevate-2"
              onClick={onPrevious}
              disabled={currentSlide === 0}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: showNavigation ? 1 : 0, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              style={{ pointerEvents: showNavigation ? "auto" : "none" }}
              data-testid="button-prev-slide"
            >
              <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
            </motion.button>

            <motion.button
              className="fixed right-0 top-1/2 -translate-y-1/2 z-40 p-3 lg:p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed overflow-visible hover-elevate active-elevate-2"
              onClick={onNext}
              disabled={currentSlide === totalSlides - 1}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: showNavigation ? 1 : 0, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              style={{ pointerEvents: showNavigation ? "auto" : "none" }}
              data-testid="button-next-slide"
            >
              <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {isFullscreen && (
        <div 
          className="fixed bottom-0 left-0 right-0 h-20 z-40"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        />
      )}

      <motion.div
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-navy-light/90 backdrop-blur-md border border-white/10 transition-opacity duration-300"
        style={{ opacity: showNavigation ? 1 : 0, pointerEvents: showNavigation ? "auto" : "none" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showNavigation ? 1 : 0, y: 0 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => isFullscreen && setIsHovering(true)}
        onMouseLeave={() => isFullscreen && setIsHovering(false)}
      >
        <div className="flex items-center gap-1 mr-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onGoToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all overflow-visible ${
                index === currentSlide
                  ? "bg-crimson w-6"
                  : "bg-white/30 hover-elevate"
              }`}
              data-testid={`button-slide-dot-${index}`}
            />
          ))}
        </div>

        <div className="h-6 w-px bg-white/20" />

        <span className="text-white/60 text-sm font-medium px-2">
          {currentSlide + 1} / {totalSlides}
        </span>

        <div className="h-6 w-px bg-white/20" />

        <Button
          size="icon"
          variant="ghost"
          onClick={onToggleViewMode}
          className="text-white/60"
          data-testid="button-toggle-view"
        >
          {viewMode === "slide" ? <Grid className="w-4 h-4" /> : <Presentation className="w-4 h-4" />}
        </Button>

        <Button
          size="icon"
          variant="ghost"
          onClick={onFullscreen}
          className="text-white/60"
          data-testid="button-fullscreen"
        >
          <Maximize className="w-4 h-4" />
        </Button>

        <Button
          size="icon"
          variant="ghost"
          onClick={onExportPDF}
          disabled={isExporting}
          className="text-white/60"
          data-testid="button-export-pdf"
        >
          <Download className="w-4 h-4" />
        </Button>
      </motion.div>

      <motion.div
        className="fixed bottom-4 right-4 z-40 text-white/40 text-xs transition-opacity duration-300"
        style={{ opacity: showNavigation ? 1 : 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: showNavigation ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <kbd className="px-2 py-1 bg-white/10 rounded mr-1">←</kbd>
        <kbd className="px-2 py-1 bg-white/10 rounded mr-1">→</kbd>
        <span className="ml-1">Navigate</span>
      </motion.div>
    </>
  );
}
