import React from 'react';
import { ARTIST_INFO } from '../data/mockData';
import { MapPin, Sparkles, CheckCircle2, Shield } from 'lucide-react';

export const LocalSeoBar = () => {
  const highlights = [
    { title: "Doorstep & Destination Service", desc: "We travel directly to your hall, resort, or home anywhere" },
    { title: "Men & Women Makeovers", desc: "Bridal HD, Groom Grooming, Couple Packages" },
    { title: "Draping & Hairdo Specialist", desc: "9-Yards Madisar, Box Pleats, Temple Jadai" },
    { title: "100% International Brands", desc: "Charlotte Tilbury, MAC, Dior, NARS, Tom Ford" }
  ];

  return (
    <div className="bg-[#FAF4ED] border-y border-[#E8DCCF] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#EFE3D5] text-[#8F5536] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#2D2824]">
                  {item.title}
                </h4>
                <p className="text-xs text-[#6B5F54] mt-0.5 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
