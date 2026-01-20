import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Navigation } from "@/components/pitch-deck/Navigation";
import {
  Slide01Title,
  Slide02Opportunity,
  Slide03Today,
  Slide04Clayton,
  Slide05Numbers,
  Slide06Engagement,
  Slide07Demographics,
  Slide08Content,
  Slide09WhyWorks,
  Slide10Market,
  Slide11PriceAnchor,
  Slide11Tier1,
  Slide11Tier2,
  Slide11Tier3,
  Slide12QuickWins,
  Slide13WhyNow,
  Slide14FAQ,
  Slide15Metrics,
  Slide16Analytics,
} from "@/components/pitch-deck/slides";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Grid, Maximize, Download, RotateCcw } from "lucide-react";

const slides = [
  { component: Slide01Title, name: "Title", steps: 1 },
  { component: Slide02Opportunity, name: "Opportunity", steps: 4 },
  { component: Slide03Today, name: "Today", steps: 1 },
  { component: Slide04Clayton, name: "Clayton", steps: 1 },
  { component: Slide05Numbers, name: "Numbers", steps: 6 },
  { component: Slide06Engagement, name: "Engagement", steps: 1 },
  { component: Slide07Demographics, name: "Demographics", steps: 1 },
  { component: Slide16Analytics, name: "Analytics", steps: 1 },
  { component: Slide08Content, name: "Content", steps: 1 },
  { component: Slide09WhyWorks, name: "Why Works", steps: 4 },
  { component: Slide10Market, name: "Market", steps: 1 },
  { component: Slide11PriceAnchor, name: "Price Anchor", steps: 1 },
  { component: Slide11Tier1, name: "Tier 1", steps: 1 },
  { component: Slide11Tier2, name: "Tier 2", steps: 1 },
  { component: Slide11Tier3, name: "Tier 3", steps: 1 },
  { component: Slide12QuickWins, name: "Quick Wins", steps: 1 },
  { component: Slide13WhyNow, name: "Why Now", steps: 1 },
  { component: Slide14FAQ, name: "FAQ", steps: 1 },
  { component: Slide15Metrics, name: "Metrics", steps: 1 },
];

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [viewMode, setViewMode] = useState<"slide" | "scroll">("slide");
  const [isExporting, setIsExporting] = useState(false);
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(true);
  const [isPortrait, setIsPortrait] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth <= 768;
      const isPortraitMode = window.innerHeight > window.innerWidth;
      setIsPortrait(isMobile && isPortraitMode);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  const goToSlide = useCallback((index: number, step = 1) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
      setCurrentStep(step);
      if (viewMode === "scroll" && slideRefs.current[index]) {
        slideRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [viewMode]);

  const goToPrevious = useCallback(() => {
    const slideData = slides[currentSlide];
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else if (currentSlide > 0) {
      const prevSlide = slides[currentSlide - 1];
      goToSlide(currentSlide - 1, prevSlide.steps);
    }
  }, [currentSlide, currentStep, goToSlide]);

  const goToNext = useCallback(() => {
    const slideData = slides[currentSlide];
    if (currentStep < slideData.steps) {
      setCurrentStep(currentStep + 1);
    } else if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1, 1);
    }
  }, [currentSlide, currentStep, goToSlide]);

  const toggleViewMode = useCallback(() => {
    setViewMode((prev) => (prev === "slide" ? "scroll" : "slide"));
  }, []);

  const enterFullscreen = useCallback(() => {
    if (containerRef.current) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    }
  }, []);

  const exportToPDF = useCallback(async () => {
    setIsExporting(true);
    toast({
      title: "Generating PDF...",
      description: "Please wait while we create your pitch deck PDF.",
    });

    try {
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [1920, 1080],
      });

      const wasScrollMode = viewMode === "scroll";
      if (wasScrollMode) {
        setViewMode("slide");
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      const originalSlide = currentSlide;

      for (let i = 0; i < slides.length; i++) {
        setCurrentSlide(i);
        await new Promise((resolve) => setTimeout(resolve, 800));

        const slideElement = containerRef.current?.querySelector(".slide-container");
        if (slideElement) {
          const canvas = await html2canvas(slideElement as HTMLElement, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: "#0a1628",
            width: 1920,
            height: 1080,
          });

          const imgData = canvas.toDataURL("image/jpeg", 0.95);

          if (i > 0) {
            pdf.addPage([1920, 1080], "landscape");
          }

          pdf.addImage(imgData, "JPEG", 0, 0, 1920, 1080);
        }
      }

      pdf.save("State-Liberty-x-Clayton-Cuteri-Partnership.pdf");

      setCurrentSlide(originalSlide);
      if (wasScrollMode) {
        setViewMode("scroll");
      }

      toast({
        title: "PDF Downloaded!",
        description: "Your pitch deck has been saved as a PDF.",
      });
    } catch (error) {
      console.error("PDF export error:", error);
      toast({
        title: "Export Failed",
        description: "There was an error generating the PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  }, [viewMode, currentSlide, toast]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isExporting) return;

      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault();
          goToNext();
          break;
        case "ArrowLeft":
          e.preventDefault();
          goToPrevious();
          break;
        case "ArrowUp":
          e.preventDefault();
          goToSlide(0);
          break;
        case "ArrowDown":
          e.preventDefault();
          goToSlide(slides.length - 1);
          break;
        case "Escape":
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
          break;
        case "f":
          enterFullscreen();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious, goToSlide, enterFullscreen, isExporting]);

  useEffect(() => {
    if (viewMode === "scroll") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = slideRefs.current.findIndex((ref) => ref === entry.target);
              if (index !== -1) {
                setCurrentSlide(index);
              }
            }
          });
        },
        { threshold: 0.5 }
      );

      slideRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return () => observer.disconnect();
    }
  }, [viewMode]);

  return (
    <div
      ref={containerRef}
      className="h-screen bg-navy overflow-hidden"
      data-testid="pitch-deck-container"
    >
      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onGoToSlide={goToSlide}
        viewMode={viewMode}
        onToggleViewMode={toggleViewMode}
        onExportPDF={exportToPDF}
        onFullscreen={enterFullscreen}
        isExporting={isExporting}
      />

      {viewMode === "slide" ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="w-full h-screen"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {slides.map((slide, index) => {
              const SlideComponent = slide.component;
              return (
                <div
                  key={index}
                  className={index === currentSlide ? "block" : "hidden"}
                >
                  <SlideComponent 
                    isActive={index === currentSlide} 
                    step={index === currentSlide ? currentStep : slide.steps}
                  />
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="overflow-y-auto h-screen scroll-smooth">
          {slides.map((slide, index) => {
            const SlideComponent = slide.component;
            return (
              <div
                key={index}
                ref={(el) => (slideRefs.current[index] = el)}
                className="min-h-screen"
              >
                <SlideComponent isActive={true} step={slide.steps} />
              </div>
            );
          })}
        </div>
      )}

      {isExporting && (
        <div className="fixed inset-0 bg-navy/90 z-[100] flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-crimson border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-white text-xl font-medium">Generating PDF...</p>
            <p className="text-slate-light mt-2">
              Processing slide {currentSlide + 1} of {slides.length}
            </p>
          </div>
        </div>
      )}

      <AnimatePresence>
        {showWelcomeDialog && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 z-50 bg-navy/95 border border-white/20 rounded-lg p-4 max-w-xs shadow-xl backdrop-blur-sm"
            data-testid="popup-welcome"
          >
            <p className="text-white text-sm font-medium mb-3">Navigation Tips</p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-light">
                <div className="flex gap-1">
                  <span className="bg-white/20 px-1.5 py-0.5 rounded text-white font-mono">←</span>
                  <span className="bg-white/20 px-1.5 py-0.5 rounded text-white font-mono">→</span>
                </div>
                <span>Navigate slides</span>
              </div>
              <div className="flex items-center gap-2 text-slate-light">
                <Grid className="w-4 h-4 text-crimson flex-shrink-0" />
                <span>Grid view</span>
              </div>
              <div className="flex items-center gap-2 text-slate-light">
                <Maximize className="w-4 h-4 text-crimson flex-shrink-0" />
                <span>Fullscreen</span>
              </div>
              <div className="flex items-center gap-2 text-slate-light">
                <Download className="w-4 h-4 text-crimson flex-shrink-0" />
                <span>Download PDF</span>
              </div>
            </div>
            <Button 
              onClick={() => setShowWelcomeDialog(false)} 
              size="sm"
              className="w-full mt-3 bg-crimson text-white text-xs"
              data-testid="button-got-it"
            >
              Got it
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {isPortrait && (
        <div className="fixed inset-0 bg-navy z-[200] flex flex-col items-center justify-center p-8" data-testid="portrait-overlay">
          <RotateCcw className="w-16 h-16 text-crimson mb-6 animate-pulse" />
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Please Rotate Your Device
          </h2>
          <p className="text-slate-light text-center">
            This presentation is best viewed in landscape mode. Please rotate your phone horizontally.
          </p>
        </div>
      )}
    </div>
  );
}
