import React, { useState } from 'react';
import { SERVICES_DATA, ARTIST_INFO } from '../data/mockData';
import { Sparkles, Check, Clock, Calendar, ArrowRight, UserCheck, Scissors, HeartHandshake } from 'lucide-react';

export const ServicesSection = ({ onSelectServiceForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Services');

  const categories = [
    'All Services',
    'Bridal (Women)',
    'Groom (Men)',
    'Couple Combos',
    'Draping & Saree',
    'Hairdo & Styling',
    'Pre-Wedding & Party'
  ];

  const filteredServices = selectedCategory === 'All Services'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-sans font-semibold text-[#9E5F3D] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chennai Makeover & Styling Catalog</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal tracking-tight">
            Bridal, Groom, Draping & Hairdo Services
          </h2>
          <p className="mt-3 text-base text-[#61584F] leading-relaxed">
            Every package is curated with high-end luxury products, personalized skin preparation, and dedicated on-venue timing for both men and women in Chennai.
          </p>

          {/* Gender & Specialty Highlights */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 bg-[#FAF3EC] text-[#8F5536] border border-[#E8D9CD] px-3 py-1.5 rounded-full font-medium">
              <UserCheck className="w-3.5 h-3.5" />
              Both Men & Women Makeovers
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#FAF3EC] text-[#8F5536] border border-[#E8D9CD] px-3 py-1.5 rounded-full font-medium">
              <Scissors className="w-3.5 h-3.5" />
              Saree (Madisar) & Dhoti Draping
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#FAF3EC] text-[#8F5536] border border-[#E8D9CD] px-3 py-1.5 rounded-full font-medium">
              <HeartHandshake className="w-3.5 h-3.5" />
              Signature Couple Combos
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#2D2824] text-[#FAF8F5] shadow-sm'
                  : 'bg-white border border-[#DDD3C7] text-[#554D44] hover:bg-[#F2EAE1]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-[#E6DDD3] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Chip */}
                  <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs text-[#2D2824] text-[11px] font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {service.category}
                  </div>

                  {/* Target Audience Chip */}
                  <div className="absolute top-3 right-3 bg-[#2D2824]/85 text-[#FAF8F5] text-[10px] font-semibold px-2.5 py-1 rounded-md">
                    For: {service.targetAudience}
                  </div>

                  {/* Pricing on Image bottom */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="font-display text-xl font-semibold drop-shadow-xs">
                      {service.priceDisplay}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-stone-200 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-sm">
                      <Clock className="w-3 h-3" />
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#1E1B18] group-hover:text-[#9E5F3D] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#6B6156] leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-2 pt-2 border-t border-[#F0E9E1]">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-[#8A796D] block">
                      What's Included:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#423C36]">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#9E5F3D] shrink-0 mt-0.5" />
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended For Note */}
                  <div className="p-3 bg-[#FAF5EF] rounded-lg border border-[#EDE2D5] text-[11px] text-[#6E5C4E]">
                    <span className="font-semibold text-[#3D332B] block mb-0.5">Best Suited For:</span>
                    {service.recommendedFor}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectServiceForBooking(service.id)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FAF4ED] hover:bg-[#2D2824] text-[#2D2824] hover:text-[#FAF8F5] border border-[#D9CEBF] hover:border-[#2D2824] text-xs uppercase tracking-wider font-semibold py-3 rounded-lg transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book This Makeover</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Requirements & Destination Note */}
        <div className="mt-16 bg-[#F1E8DF] rounded-2xl p-6 sm:p-8 border border-[#DFCFC2] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <h3 className="font-display text-xl text-[#2D2824] font-medium">
              Need a Custom Wedding Package or Group Entourage Styling?
            </h3>
            <p className="text-xs sm:text-sm text-[#615448]">
              We offer customizable multi-day packages for Kanchipuram, Mahabalipuram resorts, and outstation destination weddings.
            </p>
          </div>
          <a
            href={`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=Hi%20Karni!%20I'd%20like%20a%20custom%20package%20quote%20for%20my%20wedding%20makeovers,%20draping,%20and%20hairdo.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#2D2824] hover:bg-[#9E5F3D] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Request Custom Quote on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
