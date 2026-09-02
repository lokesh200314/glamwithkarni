import React from 'react';
import { ARTIST_INFO } from '../data/mockData';
import { Phone, Mail, MapPin, Instagram, ArrowUp, Sparkles } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F1B18] text-[#D8CFC6] pt-16 pb-12 border-t border-[#332C26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#362E27]">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="font-display text-2xl tracking-tight text-white font-semibold">
                glamwithKarni_makeover
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#B5A496] font-sans">
                Bridal, Groom & Draping Artistry
              </span>
            </div>

            <p className="text-xs text-[#9E9387] leading-relaxed max-w-sm font-normal">
              Premier makeover artist specializing in Bridal & Groom styling, authentic Saree & Dhoti Draping (Madisar, Box Pleats), and signature Hairdo architecture for both men and women.
            </p>

            <div className="pt-2 text-xs text-[#E3D4C7] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              <span>Now Booking 2026 - 2027 Weddings & Special Events</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#B0A59A]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services & Pricing
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Real Bride Gallery
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">
                  Appointment Booking
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-white transition-colors">
                  Instagram Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Studio & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Doorstep & Destination Service */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D49841]" />
              <span>Doorstep Service</span>
            </h4>
            <p className="text-xs text-[#A69C91] leading-relaxed">
              Wherever you are located, Karni & team travel directly to your wedding hall, hotel resort, or home residence.
            </p>
            <div className="bg-[#2A2420] border border-[#3E352E] p-3 rounded-lg text-[11px] text-[#C2B5A8] space-y-1">
              <span className="font-semibold block text-[#FAF8F5]">We Travel to Your Venue:</span>
              <p className="text-[10.5px] text-[#9E9184]">
                Complete on-venue makeover setup with professional studio lighting, makeup kit, and draping equipment.
              </p>
            </div>
          </div>

          {/* Col 4: Studio Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Studio & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#B0A59A]">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B5A496] shrink-0 mt-0.5" />
                <span>{ARTIST_INFO.studioAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B5A496] shrink-0" />
                <span className="select-all font-mono text-[#D8CFC6]">{ARTIST_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B5A496] shrink-0" />
                <a href={`mailto:${ARTIST_INFO.email}`} className="hover:text-white underline underline-offset-2">
                  {ARTIST_INFO.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#B5A496] shrink-0" />
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline underline-offset-2"
                >
                  {ARTIST_INFO.instagramHandle}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7F73]">
          <p>
            © {new Date().getFullYear()} {ARTIST_INFO.brandName} (Karni Makeover). All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#B5A496] hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
