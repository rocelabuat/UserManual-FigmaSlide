import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function SlideControls({ currentSlide, totalSlides, onPrevious, onNext }: SlideControlsProps) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white rounded-full shadow-lg px-6 py-3 border border-border">
      <button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="p-2 rounded-full hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-primary'
                : 'w-2 bg-muted'
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="p-2 rounded-full hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
