import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function exportPitchDeckToPDF(
  slides: Array<{ component: React.ComponentType<{ isActive: boolean; step: number }>; steps: number }>,
  onProgress?: (current: number, total: number) => void
): Promise<void> {
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [1920, 1080],
  });

  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.left = "-9999px";
  container.style.top = "0";
  container.style.width = "1920px";
  container.style.height = "1080px";
  container.style.overflow = "hidden";
  container.style.zIndex = "-1";
  document.body.appendChild(container);

  try {
    for (let i = 0; i < slides.length; i++) {
      onProgress?.(i + 1, slides.length);

      const slideWrapper = document.createElement("div");
      slideWrapper.className = "slide-container";
      slideWrapper.style.width = "1920px";
      slideWrapper.style.height = "1080px";
      slideWrapper.style.background = "#0a1628";
      container.innerHTML = "";
      container.appendChild(slideWrapper);

      const { createRoot } = await import("react-dom/client");
      const SlideComponent = slides[i].component;
      
      const root = createRoot(slideWrapper);
      root.render(
        <SlideComponent isActive={true} step={slides[i].steps} />
      );

      await new Promise((resolve) => setTimeout(resolve, 600));

      const canvas = await html2canvas(slideWrapper, {
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
      
      root.unmount();
    }

    pdf.save("State-Liberty-x-Clayton-Cuteri-Partnership.pdf");
  } finally {
    document.body.removeChild(container);
  }
}
