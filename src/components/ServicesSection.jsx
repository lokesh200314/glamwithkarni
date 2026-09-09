import React, { useState } from 'react';
import { SERVICES_DATA, ARTIST_INFO } from '../data/mockData';
import { Sparkles, Check, Clock, Calendar, ArrowRight, UserCheck, Scissors, Gem, ShieldAlert, CreditCard, Heart, Camera, RotateCcw, Upload } from 'lucide-react';

export const ServicesSection = ({ onSelectServiceForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Packages');
  const [customGroomPhoto, setCustomGroomPhoto] = useState(() => {
    try {
      return localStorage.getItem('karni_custom_groom_photo') || null;
    } catch {
      return null;
    }
  });

  const handleGroomPhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        setCustomGroomPhoto(result);
        try {
          localStorage.setItem('karni_custom_groom_photo', result);
        } catch (err) {
          console.warn('LocalStorage error:', err);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const categories = [
    'All Packages',
    'Bridal Packages',
    'Groom (Men)',
    'Draping & Styling'
  ];

  const filteredServices = selectedCategory === 'All Packages'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-sans font-semibold text-[#9E5F3D] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Rate Card & Packages</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal tracking-tight">
            Bridal & Groom Makeover Packages
          </h2>
          <p className="mt-3 text-base text-[#61584F] leading-relaxed">
            Curated with luxury international brands (Charlotte Tilbury, NARS, HUDA Beauty) with complimentary jewellery and flowers for all brides.
          </p>

          {/* Key Value Highlights */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 bg-[#FBF1E8] text-[#8F5536] border border-[#E8D9CD] px-3.5 py-1.5 rounded-full font-medium shadow-2xs">
              <Gem className="w-3.5 h-3.5 text-[#9E5F3D]" />
              Jewellery & Flowers Complimentary
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#FAF3EC] text-[#8F5536] border border-[#E8D9CD] px-3.5 py-1.5 rounded-full font-medium">
              <UserCheck className="w-3.5 h-3.5" />
              Silver • Gold • Platinum & Groom Tiers
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#FAF3EC] text-[#8F5536] border border-[#E8D9CD] px-3.5 py-1.5 rounded-full font-medium">
              <Scissors className="w-3.5 h-3.5" />
              Saree (Madisar) & Dhoti Draping
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
              className={`bg-white rounded-2xl overflow-hidden border shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                service.isPopular ? 'border-[#C89B7B] ring-1 ring-[#C89B7B]/40' : 'border-[#E6DDD3]'
              }`}
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={(service.id === 'groom-makeup' && customGroomPhoto) ? customGroomPhoto : service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Category Chip */}
                  <div className="absolute top-3 left-3 bg-[#FAF8F5]/95 backdrop-blur-xs text-[#2D2824] text-[11px] font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {service.category}
                  </div>

                  {/* Target Audience / Popular Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    {service.badgeText && (
                      <span className="bg-[#9E5F3D] text-[#FAF8F5] text-[10px] font-semibold px-2.5 py-1 rounded-md shadow-xs">
                        {service.badgeText}
                      </span>
                    )}
                  </div>

                  {/* Custom Photo Upload & Change Option for Groom Card */}
                  {service.id === 'groom-makeup' && (
                    <div className="absolute top-11 left-3 right-3 flex items-center justify-between z-10">
                      <label className="cursor-pointer inline-flex items-center gap-1.5 bg-black/70 hover:bg-black/90 backdrop-blur-xs text-[#FFF7ED] text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/20 transition-all shadow-md">
                        <Camera className="w-3 h-3 text-[#E2BA9D]" />
                        <span>{customGroomPhoto ? 'Change Groom Photo' : 'Upload Coat-Suit Photo'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleGroomPhotoUpload}
                        />
                      </label>
                      {customGroomPhoto && (
                        <button
                          type="button"
                          onClick={() => {
                            setCustomGroomPhoto(null);
                            try {
                              localStorage.removeItem('karni_custom_groom_photo');
                            } catch {}
                          }}
                          className="inline-flex items-center gap-1 bg-black/70 hover:bg-black/90 backdrop-blur-xs text-[10px] text-stone-200 px-2 py-1 rounded-full border border-white/20"
                          title="Reset to default coat-suit photo"
                        >
                          <RotateCcw className="w-2.5 h-2.5" />
                          <span>Reset</span>
                        </button>
                      )}
                    </div>
                  )}

                  {/* Pricing on Image bottom */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="font-display text-2xl font-bold drop-shadow-md text-[#FFF7ED]">
                      {service.priceDisplay}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-stone-200 bg-black/50 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
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

                  {/* Complimentary Jewellery & Flower Ribbon if applicable */}
                  {service.complimentaryJewelleryAndFlower && (
                    <div className="flex items-center gap-2 bg-[#FAF2EB] text-[#8A5237] border border-[#E9DDD1] px-3 py-2 rounded-lg text-xs font-semibold">
                      <Gem className="w-4 h-4 text-[#C89B7B] shrink-0" />
                      <span>✨ Jewellery & Flower COMPLIMENTARY Included</span>
                    </div>
                  )}

                  {/* Key Features List */}
                  <div className="space-y-2 pt-2 border-t border-[#F0E9E1]">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-[#8A796D] block">
                      Package Features:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#423C36]">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#9E5F3D] shrink-0 mt-0.5" />
                          <span className={`leading-tight ${feat.includes('COMPLIMENTARY') || feat.includes('Glass Skin Prep') ? 'font-semibold text-[#8F5536]' : ''}`}>
                            {feat}
                          </span>
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
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FAF4ED] hover:bg-[#2D2824] text-[#2D2824] hover:text-[#FAF8F5] border border-[#D9CEBF] hover:border-[#2D2824] text-xs uppercase tracking-wider font-semibold py-3 rounded-lg transition-all shadow-2xs group-hover:bg-[#2D2824] group-hover:text-[#FAF8F5]"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book This Package</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Official Booking Policy & Advance Payment Banner (From Rate Card) */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-[#E5DCD2] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Advance & GPay Details */}
            <div className="lg:col-span-5 bg-[#FAF5EF] rounded-2xl p-6 border border-[#E9DDD1] space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#9E5F3D]">
                <CreditCard className="w-4 h-4" />
                <span>Payment & Date Locking</span>
              </div>

              <div>
                <span className="text-xs text-[#7A6E63] block">Advance Booking Amount:</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-display text-3xl font-bold text-[#2D2824]">
                    {ARTIST_INFO.advanceAmount}/-
                  </span>
                  <span className="text-xs text-[#9E5F3D] font-semibold">
                    ({ARTIST_INFO.advanceNote})
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E3D6C9] space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#6D6156]">GPay Account Name:</span>
                  <span className="font-bold text-[#2D2824]">{ARTIST_INFO.gpayName}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#6D6156]">GPay Mobile Number:</span>
                  <span className="font-mono font-bold text-[#9E5F3D] text-sm select-all">
                    {ARTIST_INFO.gpayNumber}
                  </span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-[#E2D4C6] text-[11px] text-[#695D51] space-y-1">
                <span className="font-semibold text-[#302923] block">Please Note:</span>
                <p>• Advanced / designer jewellery models will be charged extra.</p>
                <p>• Real / fresh flowers will be charged extra based on type, quantity & design.</p>
              </div>
            </div>

            {/* Right: Booking Policy Terms */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#2D2824]">
                <ShieldAlert className="w-4 h-4 text-[#9E5F3D]" />
                <span>Booking Policy & Terms</span>
              </div>
              <h3 className="font-display text-2xl text-[#1E1B18] font-normal">
                Important Guidelines for Your Booking
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {ARTIST_INFO.bookingPolicy.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#EBE2D8] text-xs text-[#4A423B]">
                    <Check className="w-3.5 h-3.5 text-[#9E5F3D] shrink-0 mt-0.5" />
                    <span className="leading-snug">{rule}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#F0E8DF]">
                <p className="text-xs text-[#6B5E51] italic">
                  "Because you deserve to look & feel your best on your special day! ♡"
                </p>
                <a
                  href={`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=Hi%20Karni!%20I'd%20like%20to%20block%20my%20date%20with%20an%20advance%20of%20₹6,000%20via%20GPay%20(8190030368).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 bg-[#2D2824] hover:bg-[#9E5F3D] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm"
                >
                  Block Date on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

