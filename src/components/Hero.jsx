import React, { useState, useEffect, useRef } from 'react';
import { ARTIST_INFO, HERO_SLIDER_DATA } from '../data/mockData';
import {
  Sparkles,
  Star,
  MapPin,
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Pause,
  Play,
  CheckCircle2,
  Crown
} from 'lucide-react';

export const Hero = ({ onOpenBooking, onExploreGallery }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  const totalSlides = HERO_SLIDER_DATA.length;
  const slideDuration = 6000; // 6 seconds per slide

  // Automatic slide cycle with smooth progress tracking
  useEffect(() => {
    let startTime = Date.now();
    setProgress(0);

    if (isPlaying) {
      const interval = 50; // update progress every 50ms
      timerRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const currentProgress = (elapsed / slideDuration) * 100;

        if (currentProgress >= 100) {
          setCurrentSlide((prev) => (prev + 1) % totalSlides);
          startTime = Date.now();
          setProgress(0);
        } else {
          setProgress(currentProgress);
        }
      }, interval);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentSlide, isPlaying, totalSlides]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  };

  const handleSelectSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const activeSlideData = HERO_SLIDER_DATA[currentSlide];

  return (
    <section id="hero" className="relative pt-18 sm:pt-28 lg:pt-32 pb-12 lg:pb-20 overflow-hidden bg-[#FAF8F5]">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-10 right-0 -z-10 w-96 h-96 bg-[#F3E7DC] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-0 -z-10 w-80 h-80 bg-[#E8DDD2] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-Only Compact Header Title - Visible above slider in Initial Viewport */}
        <div className="block lg:hidden text-center mb-3.5 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 bg-[#F1E7DD] border border-[#DFCFC1] px-3 py-1 rounded-full text-[11px] text-[#6B4E3D] font-medium tracking-wide">
            <MapPin className="w-3 h-3 text-[#9E5F3D]" />
            <span>Karni Makeovers • Doorstep &&& Destination</span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl text-[#1E1B18] font-normal leading-tight tracking-tight">
            Bridal & Groom Makeovers{' '}
            <span className="italic font-serif font-light text-[#8F5536]">
              Artistry
            </span>
          </h1>
        </div>

        {/* Top Interactive Style Navigator Tabs */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1.5 scrollbar-none">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-[#8A796C] pr-2 shrink-0">
                <Crown className="w-3.5 h-3.5 text-[#9E5F3D]" />
                Styles:
              </span>
              {HERO_SLIDER_DATA.map((item, idx) => {
                const isActive = currentSlide === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectSlide(idx)}
                    className={`whitespace-nowrap text-xs font-medium px-3 sm:px-3.5 py-1.5 rounded-full transition-all duration-200 shrink-0 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#221E1B] text-[#FAF8F5] shadow-sm scale-102'
                        : 'bg-[#EDE4DC] text-[#6B5E53] hover:bg-[#E2D6CB] hover:text-[#221E1B]'
                    }`}
                  >
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E0AA70] animate-pulse" />}
                    <span>{item.category}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Play/Pause Control */}
            <div className="hidden md:flex items-center gap-1.5 text-xs text-[#7A6D61] shrink-0 pl-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-full hover:bg-[#EAE0D5] text-[#554A40] transition-colors"
                title={isPlaying ? 'Pause Auto-slide' : 'Play Auto-slide'}
                aria-label={isPlaying ? 'Pause slider' : 'Play slider'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <span className="text-[11px] font-mono text-[#8C7D70]">
                0{currentSlide + 1} / 0{totalSlides}
              </span>
            </div>
          </div>
        </div>

        {/* Responsive Grid: On mobile, Slider is order-1 (Initial Viewport), content is order-2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* SLIDER SHOWCASE - Order-1 on mobile so it's in the initial viewport */}
          <div className="order-1 lg:order-2 lg:col-span-6 relative">
            <div
              className="relative mx-auto max-w-md lg:max-w-none group select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              {/* Main Showcase Image Display with Smooth Crossfade */}
              <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden border-3 sm:border-[6px] border-white shadow-xl sm:shadow-2xl bg-stone-900 aspect-[4/4.8] sm:aspect-[3/4]">
                {HERO_SLIDER_DATA.map((slide, idx) => {
                  const isCurrent = currentSlide === idx;
                  return (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={`${slide.styleName} by Karni Makeover`}
                        referrerPolicy="no-referrer"
                        className={`w-full h-full object-cover object-center transition-transform duration-7000 ease-out ${
                          isCurrent ? 'scale-105' : 'scale-100'
                        }`}
                      />

                      {/* Luxury Cinematic Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                      {/* On-Image Bottom Details Bar */}
                      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 text-white space-y-1.5 z-20">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#DFC6B7] font-semibold bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                            {slide.category}
                          </span>
                          <span className="text-[11px] text-stone-300 font-sans">
                            {slide.client}
                          </span>
                        </div>

                        <h4 className="font-display text-base sm:text-xl font-medium text-white leading-snug">
                          {slide.styleName}
                        </h4>

                        <p className="text-[11px] sm:text-xs text-stone-300 line-clamp-1 font-sans">
                          {slide.technique}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* Animated Slide Progress Bar at the top of the frame */}
                <div className="absolute top-0 inset-x-0 h-1 bg-white/20 z-30 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#D49841] to-[#E3C6B5] transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Navigation Arrows on Slider */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-85 group-hover:opacity-100 active:scale-90"
                  aria-label="Previous style"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-85 group-hover:opacity-100 active:scale-90"
                  aria-label="Next style"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Floating Brand Quality Tag */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 bg-[#221E1B]/90 backdrop-blur-md text-[#FAF8F5] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg text-[10px] sm:text-[11px] flex items-center gap-1.5 border border-white/10">
                  <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E0AA70]" />
                  <span className="font-sans font-medium">100% Luxury Products</span>
                </div>
              </div>

              {/* Floating Micro Review Badge (Hidden on very small screens to avoid clutter, visible on sm+) */}
              <div className="hidden sm:flex absolute -bottom-3 -left-3 sm:-left-5 z-30 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl shadow-xl border border-[#EBE1D7] items-center gap-3 max-w-[240px] sm:max-w-[270px]">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden shrink-0 border-2 border-[#9E5F3D]">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop"
                    alt="Reviewer bride"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#D49841]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-[11px] text-[#3D3730] font-medium leading-tight mt-0.5 line-clamp-1">
                    "Zero sweat, stayed fresh all day!"
                  </p>
                  <p className="text-[10px] text-[#7A7065]">- Divya, MRC Chennai</p>
                </div>
              </div>

              {/* Interactive Thumbnail Previews under image */}
              <div className="pt-3 sm:pt-4 flex items-center justify-center gap-1.5 sm:gap-2">
                {HERO_SLIDER_DATA.map((slide, idx) => {
                  const isActive = currentSlide === idx;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => handleSelectSlide(idx)}
                      className={`relative rounded-md sm:rounded-lg overflow-hidden transition-all duration-300 ${
                        isActive
                          ? 'w-8 h-8 sm:w-10 sm:h-10 ring-2 ring-[#9E5F3D] scale-110 shadow-sm'
                          : 'w-7 h-7 sm:w-8 sm:h-8 opacity-60 hover:opacity-100'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.category}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Left Column: Editorial Information & Live Style Breakdown - Order-2 on mobile */}
          <div className="order-2 lg:order-1 lg:col-span-6 space-y-4 sm:space-y-5 text-center lg:text-left">
            {/* Desktop-Only Location & Studio Badge & Heading */}
            <div className="hidden lg:block space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#F1E7DD] border border-[#DFCFC1] px-3.5 py-1.5 rounded-full text-xs text-[#6B4E3D] font-medium tracking-wide">
                <MapPin className="w-3.5 h-3.5 text-[#9E5F3D]" />
                <span>Karni Makeovers • Doorstep & Destination Weddings</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal leading-[1.12] tracking-tight">
                Bridal & Groom Makeovers,{' '}
                <span className="italic font-serif font-light text-[#8F5536] block mt-1">
                  Flawless Draping & Hairdo Artistry.
                </span>
              </h1>
            </div>

            {/* Dynamic Look Highlight Card */}
            <div className="bg-white/85 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#EAE0D5] shadow-xs space-y-2.5 sm:space-y-3 transition-all text-left">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8F5536] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#D49841]" />
                  <span>{activeSlideData.badge}</span>
                </span>
                <span className="text-xs text-[#7A6F64] font-medium flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#9E5F3D]" />
                  <span>{activeSlideData.venue}</span>
                </span>
              </div>

              <h3 className="font-display text-base sm:text-lg lg:text-xl text-[#221E1B] font-semibold">
                {activeSlideData.styleName}
              </h3>

              <p className="text-xs sm:text-[13px] text-[#5C534A] leading-relaxed">
                {activeSlideData.headline}
              </p>

              {/* Technique Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeSlideData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-[10.5px] sm:text-[11px] bg-[#FAF6F2] border border-[#E2D7CC] text-[#4A4138] px-2.5 py-1 rounded-md font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#9E5F3D]" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1">
              <button
                id="hero-primary-book-btn"
                onClick={() => onOpenBooking(activeSlideData.serviceId)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#221E1B] hover:bg-[#9E5F3D] text-[#FAF8F5] text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg active:scale-98"
              >
                <Calendar className="w-4 h-4 text-[#DFC6B7]" />
                <span>Book This Look</span>
              </button>

              <button
                id="hero-secondary-gallery-btn"
                onClick={onExploreGallery}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#C5B5A7] hover:border-[#2D2824] bg-white/70 hover:bg-white text-[#2D2824] text-xs sm:text-sm font-medium px-5 py-3.5 rounded-full transition-all"
              >
                <span>View Real Portfolio</span>
                <ArrowRight className="w-4 h-4 text-[#7A6B5F]" />
              </button>
            </div>

            {/* Social Proof Stats */}
            <div className="pt-3 sm:pt-4 border-t border-[#E8DED4] grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <div className="font-display text-lg sm:text-2xl font-semibold text-[#2D2824]">
                  {ARTIST_INFO.makeoversCount}+
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#73685E]">Makeovers Done</div>
              </div>

              <div className="border-x border-[#E8DED4] px-1.5 sm:px-2">
                <div className="flex items-center justify-center lg:justify-start gap-1 font-display text-lg sm:text-2xl font-semibold text-[#2D2824]">
                  <span>{ARTIST_INFO.googleRating}</span>
                  <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#D49841] text-[#D49841]" />
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#73685E]">{ARTIST_INFO.reviewsCount}+ Reviews</div>
              </div>

              <div>
                <div className="font-display text-lg sm:text-2xl font-semibold text-[#2D2824]">
                  {ARTIST_INFO.experienceYears}+ Yrs
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#73685E]">Years Experience</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
