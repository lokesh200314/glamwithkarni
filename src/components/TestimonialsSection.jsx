import React from 'react';
import { ARTIST_INFO, TESTIMONIALS_DATA } from '../data/mockData';
import { Star, Quote, MapPin } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-sans font-semibold text-[#9E5F3D] mb-2">
            <Quote className="w-3.5 h-3.5" />
            <span>Real Client Reviews & Social Proof</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal">
            Loved by {ARTIST_INFO.makeoversCount}+ Brides, Grooms & Families
          </h2>
          <p className="mt-3 text-base text-[#61584F] leading-relaxed">
            Read authentic words from brides, grooms, and wedding families styled by Karni across Chennai's iconic wedding halls and destination venues.
          </p>

          {/* Google Review Trust Badge */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white border border-[#E2D8CC] px-4 py-2 rounded-full shadow-xs">
            <div className="flex items-center gap-1 text-[#D49841]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#2D2824]">
              {ARTIST_INFO.googleRating} / 5.0 Rating on Google ({ARTIST_INFO.reviewsCount}+ Verified Reviews)
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              id={`testimonial-${item.id}`}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E6DCD2] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with Avatar & Venue */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#F0E8E0]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#9E5F3D] shrink-0">
                      <img
                        src={item.avatar}
                        alt={item.clientName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-[#1E1B18]">
                        {item.clientName}
                      </h3>
                      <div className="flex items-center gap-1 text-[11px] text-[#7A7065] mt-0.5">
                        <MapPin className="w-3 h-3 text-[#9E5F3D] shrink-0" />
                        <span>{item.venue}</span>
                      </div>
                    </div>
                  </div>

                  <span className="bg-[#FAF3EC] text-[#8F5536] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#EBDCCF]">
                    {item.lookType}
                  </span>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 text-[#D49841] my-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-[11px] text-[#7A7065] ml-2 font-sans font-medium">
                    Verified Client • {item.weddingDate}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#524B43] leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              {/* Wedding Thumbnail Preview */}
              {item.weddingImage && (
                <div className="mt-5 pt-4 border-t border-[#F0E8E0] flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-[#E0D5C9]">
                    <img
                      src={item.weddingImage}
                      alt={`${item.clientName} makeover look`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-[11px] text-[#6E645A]">
                    <span className="font-semibold text-[#2D2824] block">Client Styling:</span>
                    <span>HD Makeover, precision Draping & bespoke Hairdo by Karni</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
