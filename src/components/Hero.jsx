import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Crown,
  Layers,
  Sliders,
  Eye,
  Flame,
  Award
} from 'lucide-react';

export const Hero = ({ onOpenBooking, onExploreGallery }) => {
  // Slider Modes: 'cinematic' | 'beforeAfter' | 'filmstrip'
  const [sliderMode, setSliderMode] = useState('cinematic');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [beforeAfterPosition, setBeforeAfterPosition] = useState(50); // percentage 0 - 100
  const [isDraggingBA, setIsDraggingBA] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const timerRef = useRef(null);
  const baContainerRef = useRef(null);

  const totalSlides = HERO_SLIDER_DATA.length;
  const slideDuration = 6000; // 6s per slide

  // Autoplay timer
  useEffect(() => {
    let startTime = Date.now();
    setProgress(0);

    if (isPlaying && sliderMode !== 'beforeAfter') {
      const interval = 40;
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
  }, [currentSlide, isPlaying, totalSlides, sliderMode]);

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

  // Before & After Interactive Drag Handlers
  const handleBAMouseDown = () => {
    setIsDraggingBA(true);
  };

  const handleBAMouseUp = () => {
    setIsDraggingBA(false);
  };

  const handleBAMouseMove = (e) => {
    if (!baContainerRef.current) return;
    const rect = baContainerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const offsetX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = Math.round((offsetX / rect.width) * 100);
    setBeforeAfterPosition(percentage);
  };

  const activeSlideData = HERO_SLIDER_DATA[currentSlide];

  return (
    <section
      id="hero"
      className="relative pt-18 sm:pt-28 lg:pt-32 pb-12 lg:pb-20 overflow-hidden bg-[#FAF8F5]"
      onMouseUp={handleBAMouseUp}
      onTouchEnd={() => {
        handleTouchEnd();
        handleBAMouseUp();
      }}
    >
      {/* Ambient Glows & Sparkle particles */}
      <div className="absolute top-10 right-0 -z-10 w-96 h-96 bg-[#F3E7DC] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-0 -z-10 w-80 h-80 bg-[#E8DDD2] rounded-full blur-3xl opacity-50 pointer-events-none" />

      {/* Floating Sparkle Micro Ornaments */}
      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 left-8 text-[#D49841] pointer-events-none hidden lg:block"
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-28 right-12 text-[#9E5F3D] pointer-events-none hidden lg:block"
      >
        <Crown className="w-6 h-6" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Header Title */}
        <div className="block lg:hidden text-center mb-3 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 bg-[#F1E7DD] border border-[#DFCFC1] px-3 py-1 rounded-full text-[11px] text-[#6B4E3D] font-medium tracking-wide">
            <MapPin className="w-3 h-3 text-[#9E5F3D]" />
            <span>Karni Makeovers • Doorstep & Destination</span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl text-[#1E1B18] font-normal leading-tight tracking-tight">
            Bridal & Groom Makeovers{' '}
            <span className="italic font-serif font-light text-[#8F5536]">Artistry</span>
          </h1>
        </div>

        {/* Top Control Bar: Style Pills + Slider Animation Mode Switcher */}
        <div className="mb-4 sm:mb-6 lg:mb-8 space-y-3">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5 sm:gap-4">
            
            {/* Left: Category Navigation Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-[#8A796C] pr-1 shrink-0">
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
                        ? 'bg-[#221E1B] text-[#FAF8F5] shadow-sm scale-102 ring-1 ring-[#9E5F3D]/40'
                        : 'bg-[#EDE4DC] text-[#6B5E53] hover:bg-[#E2D6CB] hover:text-[#221E1B]'
                    }`}
                  >
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E0AA70] animate-pulse" />}
                    <span>{item.category}</span>
                  </button>
                );
              })}
            </div>

            {/* Right: Slider Animation Layout Mode Selector */}
            <div className="flex items-center justify-between md:justify-end gap-2 shrink-0 bg-[#EFE7DE] p-1 rounded-full border border-[#D9CFC3]">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#7D7063] px-2 hidden sm:inline">
                Slider Mode:
              </span>

              <button
                onClick={() => setSliderMode('cinematic')}
                className={`relative px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  sliderMode === 'cinematic'
                    ? 'bg-[#221E1B] text-white shadow-xs'
                    : 'text-[#615449] hover:text-[#221E1B]'
                }`}
                title="Cinematic Crossfade & 3D Depth"
              >
                <Sparkles className="w-3 h-3 text-[#E0AA70]" />
                <span>Cinematic</span>
              </button>

              <button
                onClick={() => setSliderMode('beforeAfter')}
                className={`relative px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  sliderMode === 'beforeAfter'
                    ? 'bg-[#221E1B] text-white shadow-xs'
                    : 'text-[#615449] hover:text-[#221E1B]'
                }`}
                title="Interactive Before & After Reveal Slider"
              >
                <Sliders className="w-3 h-3 text-[#E0AA70]" />
                <span>Before / After</span>
              </button>

              <button
                onClick={() => setSliderMode('filmstrip')}
                className={`relative px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  sliderMode === 'filmstrip'
                    ? 'bg-[#221E1B] text-white shadow-xs'
                    : 'text-[#615449] hover:text-[#221E1B]'
                }`}
                title="3D Filmstrip Gallery Flow"
              >
                <Layers className="w-3 h-3 text-[#E0AA70]" />
                <span>Filmstrip</span>
              </button>

              {/* Pause/Play on auto modes */}
              {sliderMode !== 'beforeAfter' && (
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1 rounded-full text-[#615449] hover:text-[#221E1B] hover:bg-black/5 transition-colors ml-1"
                  aria-label={isPlaying ? 'Pause slider' : 'Play slider'}
                  title={isPlaying ? 'Pause auto-slide' : 'Play auto-slide'}
                >
                  {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Responsive Hero Main Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* ======================================================== */}
          {/* SLIDER SHOWCASE COLUMN (Order-1 on Mobile, Top in Viewport) */}
          {/* ======================================================== */}
          <div className="order-1 lg:order-2 lg:col-span-6 relative">
            <div
              className="relative mx-auto max-w-md lg:max-w-none group select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              {/* ---------------------------------------------------- */}
              {/* SLIDER MODE 1: CINEMATIC 3D DEPTH                    */}
              {/* ---------------------------------------------------- */}
              {sliderMode === 'cinematic' && (
                <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden border-3 sm:border-[6px] border-white shadow-xl sm:shadow-2xl bg-stone-900 aspect-[4/4.8] sm:aspect-[3/4]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlideData.id}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      className="absolute inset-0"
                    >
                      <img
                        src={activeSlideData.image}
                        alt={`${activeSlideData.styleName} by Karni Makeover`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center transform transition-transform duration-7000 ease-out scale-105"
                      />

                      {/* Luxury Cinematic Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                      {/* On-Image Bottom Details Bar */}
                      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 text-white space-y-1.5 z-20">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#DFC6B7] font-semibold bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                            {activeSlideData.category}
                          </span>
                          <span className="text-[11px] text-stone-300 font-sans">
                            {activeSlideData.client}
                          </span>
                        </div>

                        <h4 className="font-display text-base sm:text-xl font-medium text-white leading-snug">
                          {activeSlideData.styleName}
                        </h4>

                        <p className="text-[11px] sm:text-xs text-stone-300 line-clamp-1 font-sans">
                          {activeSlideData.technique}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Animated Slide Progress Bar */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-white/20 z-30 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#D49841] to-[#E3C6B5] transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Navigation Arrows */}
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

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 bg-[#221E1B]/90 backdrop-blur-md text-[#FAF8F5] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg text-[10px] sm:text-[11px] flex items-center gap-1.5 border border-white/10">
                    <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E0AA70]" />
                    <span className="font-sans font-medium">100% Luxury Products</span>
                  </div>
                </div>
              )}

              {/* ---------------------------------------------------- */}
              {/* SLIDER MODE 2: INTERACTIVE BEFORE & AFTER REVEAL     */}
              {/* ---------------------------------------------------- */}
              {sliderMode === 'beforeAfter' && (
                <div
                  ref={baContainerRef}
                  onMouseMove={isDraggingBA ? handleBAMouseMove : undefined}
                  onTouchMove={handleBAMouseMove}
                  className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden border-3 sm:border-[6px] border-white shadow-xl sm:shadow-2xl bg-stone-900 aspect-[4/4.8] sm:aspect-[3/4] cursor-ew-resize select-none"
                >
                  {/* Background: AFTER Transformation Image */}
                  <img
                    src={activeSlideData.afterImage || activeSlideData.image}
                    alt="After Makeover"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                  />

                  {/* Foreground: BEFORE Prep Image (Clipped) */}
                  <div
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{ clipPath: `polygon(0 0, ${beforeAfterPosition}% 0, ${beforeAfterPosition}% 100%, 0 100%)` }}
                  >
                    <img
                      src={activeSlideData.beforeImage || activeSlideData.image}
                      alt="Before Makeover"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  {/* Badges on Top */}
                  <div className="absolute top-3 left-3 z-30 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border border-white/20">
                    Skin Prep (Before)
                  </div>
                  <div className="absolute top-3 right-3 z-30 bg-[#9E5F3D]/90 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border border-white/20">
                    Bridal HD (After)
                  </div>

                  {/* Interactive Slider Divider Line & Knob */}
                  <div
                    className="absolute inset-y-0 z-30 flex items-center justify-center pointer-events-auto"
                    style={{ left: `${beforeAfterPosition}%` }}
                    onMouseDown={handleBAMouseDown}
                    onTouchStart={handleBAMouseDown}
                  >
                    <div className="w-0.5 h-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
                    <div className="absolute w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-[#221E1B] shadow-2xl flex items-center justify-center border-2 border-[#9E5F3D] active:scale-95 transition-transform">
                      <div className="flex items-center gap-0.5 text-xs font-bold text-[#9E5F3D]">
                        <ChevronLeft className="w-3.5 h-3.5 -mr-1" />
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Instruction Note */}
                  <div className="absolute bottom-3 inset-x-3 z-30 bg-black/65 backdrop-blur-md text-white text-center py-1.5 px-3 rounded-xl border border-white/10 text-[11px] font-medium flex items-center justify-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-[#E0AA70]" />
                    <span>Drag slider left / right to reveal South Indian Bridal Transformation</span>
                  </div>
                </div>
              )}

              {/* ---------------------------------------------------- */}
              {/* SLIDER MODE 3: 3D FILMSTRIP / MULTI-CARD FLOW        */}
              {/* ---------------------------------------------------- */}
              {sliderMode === 'filmstrip' && (
                <div className="relative z-10 rounded-2xl sm:rounded-3xl p-3 bg-[#1C1815] border-3 sm:border-[6px] border-white shadow-xl sm:shadow-2xl aspect-[4/4.8] sm:aspect-[3/4] flex flex-col justify-between overflow-hidden">
                  
                  {/* Hero Featured Card in Filmstrip */}
                  <div className="relative flex-1 rounded-xl overflow-hidden mb-3">
                    <img
                      src={activeSlideData.image}
                      alt={activeSlideData.styleName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-2.5 inset-x-3 text-white">
                      <div className="flex items-center gap-1.5 text-[10px] text-[#E0AA70] uppercase font-semibold">
                        <Award className="w-3 h-3" />
                        <span>Featured Look</span>
                      </div>
                      <h4 className="text-sm font-semibold font-display truncate">
                        {activeSlideData.styleName}
                      </h4>
                    </div>
                  </div>

                  {/* Horizontal Sliding Filmstrip Cards */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                    {HERO_SLIDER_DATA.map((slide, idx) => {
                      const isSelected = currentSlide === idx;
                      return (
                        <button
                          key={slide.id}
                          onClick={() => handleSelectSlide(idx)}
                          className={`relative shrink-0 w-20 h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                            isSelected
                              ? 'ring-2 ring-[#E0AA70] scale-105 shadow-md'
                              : 'opacity-50 hover:opacity-90'
                          }`}
                        >
                          <img
                            src={slide.image}
                            alt={slide.category}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                          <span className="absolute bottom-1 inset-x-1 text-[9px] text-white font-medium truncate block text-center">
                            {slide.category}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Floating Micro Review Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="hidden sm:flex absolute -bottom-3 -left-3 sm:-left-5 z-30 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl shadow-xl border border-[#EBE1D7] items-center gap-3 max-w-[240px] sm:max-w-[270px]"
              >
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
                  <p className="text-[10px] text-[#7A7065]">- Divya, MRC Hall</p>
                </div>
              </motion.div>

              {/* Thumbnail Strip (Only on Cinematic and Before/After Modes) */}
              {sliderMode !== 'filmstrip' && (
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
              )}
            </div>
          </div>

          {/* ======================================================== */}
          {/* EDITORIAL INFORMATION & LIVE STYLE BREAKDOWN (Order-2)   */}
          {/* ======================================================== */}
          <div className="order-2 lg:order-1 lg:col-span-6 space-y-4 sm:space-y-5 text-center lg:text-left">
            
            {/* Desktop Headline & Location */}
            <div className="hidden lg:block space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-[#F1E7DD] border border-[#DFCFC1] px-3.5 py-1.5 rounded-full text-xs text-[#6B4E3D] font-medium tracking-wide"
              >
                <MapPin className="w-3.5 h-3.5 text-[#9E5F3D]" />
                <span>Karni Makeovers • Doorstep & Destination Weddings</span>
              </motion.div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal leading-[1.12] tracking-tight">
                Bridal & Groom Makeovers,{' '}
                <span className="italic font-serif font-light text-[#8F5536] block mt-1">
                  Flawless Draping & Hairdo Artistry.
                </span>
              </h1>
            </div>

            {/* Dynamic Look Highlight Card with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlideData.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="bg-white/85 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#EAE0D5] shadow-xs space-y-2.5 sm:space-y-3 transition-all text-left"
              >
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
              </motion.div>
            </AnimatePresence>

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
