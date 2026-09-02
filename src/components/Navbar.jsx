import React, { useState, useEffect } from 'react';
import { ARTIST_INFO } from '../data/mockData';
import { Calendar, Menu, X, MapPin, ChevronRight, MessageSquare, Phone } from 'lucide-react';

export const Navbar = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when side drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Studio & FAQ', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#EAE3DC] py-2.5 sm:py-3.5'
            : 'bg-[#FAF8F5]/60 lg:bg-transparent backdrop-blur-xs lg:backdrop-blur-none py-3.5 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo - Spacious & Elegant */}
            <a href="#" className="flex flex-col group shrink-0 pr-4">
              <div className="flex items-center gap-2">
                <span className="font-display text-xl sm:text-2xl lg:text-[26px] tracking-tight text-[#1A1816] font-semibold">
                  glamwithKarni
                </span>
                <span className="text-[10px] tracking-widest font-sans uppercase px-2 py-0.5 rounded-full bg-[#EAE0D5] text-[#6E5A4D] font-semibold">
                  Makeover
                </span>
              </div>
              
              <span className="text-[11px] font-sans tracking-wider uppercase text-[#7D756D] group-hover:text-[#935E44] transition-colors mt-0.5">
                Bridal & Groom Makeovers
              </span>
            </a>

            {/* Desktop Nav Links - Spacious, uncrowded layout */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-[14.5px] font-medium text-[#4A453F]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#9E5F3D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#9E5F3D] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Button - Desktop & Laptop (Phone removed) */}
            <div className="hidden sm:flex items-center space-x-4 pl-4">
              <button
                id="header-book-consultation-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#221E1B] hover:bg-[#9E5F3D] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full transition-all shadow-xs hover:shadow-md active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5 text-[#E6D4C5]" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Actions: Book button + Hamburger Menu */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                id="mobile-quick-book-btn"
                onClick={onOpenBooking}
                className="bg-[#2D2824] hover:bg-[#9E5F3D] text-[#FAF8F5] text-[11px] font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider transition-colors active:scale-95"
              >
                Book
              </button>

              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(true)}
                className="p-1.5 text-[#2D2824] hover:bg-[#EAE2D8] rounded-md transition-colors active:scale-90"
                aria-label="Open side navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* RIGHT-TO-LEFT SLIDE-OVER SIDE DRAWER */}
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Side Navigation Panel (Slide in from right, covers ~70% screen on mobile) */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[72%] max-w-[310px] bg-[#FAF8F5] z-50 shadow-2xl border-l border-[#E2D8CD] flex flex-col justify-between transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Drawer"
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-[#EAE1D7] flex items-center justify-between bg-[#F4EFEA]">
          <div className="flex flex-col">
            <span className="font-display text-base font-semibold text-[#1A1816]">
              glamwithKarni
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#8A7E73]">
              Bridal & Groom Makeover
            </span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-1.5 rounded-full text-[#4A423B] hover:text-[#1A1816] hover:bg-[#E5DDD3] transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <div className="px-4 py-5 flex-1 overflow-y-auto space-y-1">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-[#9C8F82] px-2 mb-2">
            Navigation
          </div>

          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="w-full flex items-center justify-between text-left px-3 py-2.5 rounded-lg text-[13.5px] font-medium text-[#2E2823] hover:bg-[#EFE7DE] hover:text-[#9E5F3D] transition-colors group"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-[#A89C8F] group-hover:text-[#9E5F3D] group-hover:translate-x-0.5 transition-all" />
            </button>
          ))}

          {/* Travel Anywhere Location Badge */}
          <div className="pt-4 mt-3 border-t border-[#EAE1D7]">
            <div className="flex items-start gap-2 bg-[#F3ECE4] p-2.5 rounded-lg text-xs text-[#6B5F54]">
              <MapPin className="w-4 h-4 text-[#9E5F3D] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-[#332A22]">On-Venue & Doorstep Travel</span>
                <span className="text-[11px] text-[#7A6E63] leading-tight block">
                  Wherever you are located, we travel directly to your venue, hall, or home
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Drawer Action Buttons & Contact Footer */}
        <div className="p-4 border-t border-[#EAE1D7] bg-[#F7F2EC] space-y-2.5">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#2D2824] hover:bg-[#9E5F3D] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold py-2.5 rounded-md transition-colors shadow-xs active:scale-98"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 border border-[#D8CDC1] text-[#3D362F] text-[11px] font-medium py-2 rounded-md hover:bg-white transition-colors"
            >
              <span>Instagram</span>
            </a>

            <a
              href={`mailto:${ARTIST_INFO.email}`}
              className="flex items-center justify-center gap-1.5 bg-[#2D2824] hover:bg-[#9E5F3D] text-white text-[11px] font-medium py-2 rounded-md transition-colors"
            >
              <span>Email Us</span>
            </a>
          </div>

          <div className="text-center pt-1 text-[10px] text-[#918579]">
            © {new Date().getFullYear()} {ARTIST_INFO.brandName}
          </div>
        </div>
      </div>
    </>
  );
};

