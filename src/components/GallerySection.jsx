import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/mockData';
import { Sparkles, MapPin, Tag, X, ChevronRight, Check, Eye } from 'lucide-react';

export const GallerySection = ({ onSelectServiceForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeItem, setActiveItem] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  const categories = ['All', 'Muhurtham', 'Groom & Men', 'Reception', 'Saree & Dhoti Draping', 'Hair & Hairdo', 'Engagement & Haldi'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F4EFEA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-sans font-semibold text-[#9E5F3D] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Resolution Portfolio Showcase</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal tracking-tight">
            Real Chennai Brides, Grooms & Makeovers
          </h2>
          <p className="mt-3 text-base text-[#61584F] leading-relaxed">
            Authentic, unretouched photographs of brides, grooms, saree & dhoti draping, and intricate hair architecture across premier Chennai venues.
          </p>
        </div>

        {/* Gallery Filter Categories */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#2D2824] text-[#FAF8F5] shadow-xs'
                  : 'bg-white border border-[#D8CDC0] text-[#554D44] hover:bg-[#EAE0D4]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-card-${item.id}`}
              onClick={() => {
                setActiveItem(item);
                setShowComparison(false);
              }}
              className="group relative rounded-2xl overflow-hidden bg-stone-900 cursor-pointer shadow-xs hover:shadow-2xl transition-all duration-300 border border-[#E0D5C7]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Hover Dark Vignette & Metadata */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 sm:opacity-75 sm:group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="bg-white/20 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md text-[#FAF8F5]">
                    {item.category}
                  </span>
                  {item.beforeImage && (
                    <span className="bg-[#9E5F3D]/90 text-[10px] font-semibold px-2 py-0.5 rounded-sm">
                      Transformation Look
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display text-xl font-medium leading-snug">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 text-xs text-[#DEC4B2] mt-1">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span className="line-clamp-1">{item.weddingVenue}</span>
                  </div>

                  <p className="text-[11px] text-stone-300 line-clamp-2 mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-xs">
                    <span className="text-stone-300 text-[11px]">Bride / Client: <strong>{item.clientName}</strong></span>
                    <span className="text-[#E8D2C2] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                      Explore Details →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High-Resolution Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E8DDCF] flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#EAE1D6] flex items-center justify-between bg-[#FAF8F5]">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#9E5F3D] font-bold">
                  {activeItem.category} Portfolio
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-[#1E1B18] font-normal">
                  {activeItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="p-2 text-[#4A433B] hover:text-black hover:bg-[#EAE1D6] rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
              {/* Image Box */}
              <div className="relative rounded-xl overflow-hidden bg-stone-900 max-h-[500px] flex items-center justify-center">
                <img
                  src={showComparison && activeItem.beforeImage ? activeItem.beforeImage : activeItem.image}
                  alt={activeItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full max-h-[480px] object-contain"
                />

                {/* Transformation Toggle if before/after exists */}
                {activeItem.beforeImage && (
                  <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md p-1 rounded-lg border border-white/20 flex gap-1">
                    <button
                      onClick={() => setShowComparison(false)}
                      className={`text-xs px-3 py-1 rounded-md font-semibold transition-all ${
                        !showComparison ? 'bg-white text-black' : 'text-white hover:bg-white/10'
                      }`}
                    >
                      Makeover Result
                    </button>
                    <button
                      onClick={() => setShowComparison(true)}
                      className={`text-xs px-3 py-1 rounded-md font-semibold transition-all ${
                        showComparison ? 'bg-white text-black' : 'text-white hover:bg-white/10'
                      }`}
                    >
                      Skin Prep Before
                    </button>
                  </div>
                )}
              </div>

              {/* Look Breakdown & Venue Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FAF7F3] p-5 rounded-xl border border-[#E9DFD3]">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8F5536] mb-1">
                    Makeover Artistry & Tech Details
                  </h4>
                  <p className="text-xs sm:text-sm text-[#3E3831] leading-relaxed">
                    {activeItem.description}
                  </p>
                  
                  <div className="mt-3 text-xs text-[#6B5F54]">
                    <strong>Technique:</strong> {activeItem.technique}
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8F5536]">
                      Client & Venue Details
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-[#2D2824] mt-0.5">
                      {activeItem.clientName}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-[#7A6D60] mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#9E5F3D]" />
                      <span>{activeItem.weddingVenue}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8F5536] mb-1.5">
                      Styling Elements:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeItem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white border border-[#DDD3C7] text-[#554D44] text-[11px] px-2 py-0.5 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-[#EAE1D6] bg-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#73685D]">
                Interested in getting a similar look for your wedding?
              </span>
              <button
                onClick={() => {
                  setActiveItem(null);
                  onSelectServiceForBooking('bridal-muhurtham');
                }}
                className="w-full sm:w-auto bg-[#2D2824] hover:bg-[#9E5F3D] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold px-6 py-2.5 rounded-md transition-colors"
              >
                Book This Style with Karni
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
