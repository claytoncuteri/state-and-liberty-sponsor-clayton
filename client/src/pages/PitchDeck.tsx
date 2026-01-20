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
  Slide11Tiers,
  Slide12QuickWins,
  Slide13WhyNow,
  Slide14FAQ,
  Slide15Metrics,
  Slide16Analytics,
} from "@/components/pitch-deck/slides";
import { useToast } from "@/hooks/use-toast";

const slides = [
  { component: Slide01Title, name: "Title" },
  { component: Slide02Opportunity, name: "Opportunity" },
  { component: Slide03Today, name: "Today" },
  { component: Slide04Clayton, name: "Clayton" },
  { component: Slide05Numbers, name: "Numbers" },
  { component: Slide06Engagement, name: "Engagement" },
  { component: Slide07Demographics, name: "Demographics" },
  { component: Slide16Analytics, name: "Analytics" },
  { component: Slide08Content, name: "Content" },
  { component: Slide09WhyWorks, name: "Why Works" },
  { component: Slide10Market, name: "Market" },
  { component: Slide11Tiers, name: "Tiers" },
  { component: Slide12QuickWins, name: "Quick Wins" },
  { component: Slide13WhyNow, name: "Why Now" },
  { component: Slide14FAQ, name: "FAQ" },
  { component: Slide15Metrics, name: "Metrics" },
];

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState<"slide" | "scroll">("slide");
  const [isExporting, setIsExporting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { toast } = useToast();

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
      if (viewMode === "scroll" && slideRefs.current[index]) {
        slideRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [viewMode]);

  const goToPrevious = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

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
      className="min-h-screen bg-navy overflow-hidden"
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
                  <SlideComponent isActive={index === currentSlide} />
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="overflow-y-auto h-screen snap-y snap-mandatory scroll-smooth">
          {slides.map((slide, index) => {
            const SlideComponent = slide.component;
            return (
              <div
                key={index}
                ref={(el) => (slideRefs.current[index] = el)}
                className="snap-start min-h-screen"
              >
                <SlideComponent isActive={true} />
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
    </div>
  );
}
