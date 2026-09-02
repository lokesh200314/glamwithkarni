import React, { useState } from 'react';
import { ARTIST_INFO, FAQ_DATA } from '../data/mockData';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ChevronDown, Instagram, Sparkles } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    weddingDate: '',
    locationVenue: '',
    eventType: 'Muhurtham + Reception',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-sans font-semibold text-[#9E5F3D] mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal">
            Get In Touch With Karni
          </h2>
          <p className="mt-3 text-base text-[#61584F] leading-relaxed">
            Have questions about date availability, custom saree/dhoti draping, hairdo options, or destination wedding travel? Drop us an inquiry or visit our Chennai studio.
          </p>
        </div>

        {/* Contact Grid: Form & Studio Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact & Studio Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5DAD0] shadow-xs space-y-6">
              <h3 className="font-display text-2xl text-[#1E1B18] font-normal pb-3 border-b border-[#EFE7DE]">
                Studio & Booking Office
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#FAF2EB] text-[#9E5F3D] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8A796D]">
                    Studio Location
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2D2824] font-medium mt-1 leading-snug">
                    {ARTIST_INFO.studioAddress}
                  </p>
                  <span className="text-[11px] text-[#7A7065] mt-1 block">
                    (Landmark: Near Anna Nagar Tower Park / Roundtana)
                  </span>
                </div>
              </div>

              {/* Phone (Display Text Only) */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#FAF2EB] text-[#9E5F3D] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8A796D]">
                    Contact Number
                  </h4>
                  <span className="text-xs sm:text-sm text-[#2D2824] font-medium mt-1 block select-all font-mono">
                    {ARTIST_INFO.phone}
                  </span>
                  <span className="text-[11px] text-[#7A7065]">
                    Available for consultations & event schedules
                  </span>
                </div>
              </div>

              {/* Email (Touchable / Clickable) */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#FAF2EB] text-[#9E5F3D] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8A796D]">
                    Email Us (Touch to Send)
                  </h4>
                  <a
                    href={`mailto:${ARTIST_INFO.email}`}
                    className="text-xs sm:text-sm text-[#9E5F3D] hover:text-[#2D2824] font-medium transition-colors mt-1 block underline underline-offset-2"
                  >
                    {ARTIST_INFO.email}
                  </a>
                  <span className="text-[11px] text-[#7A7065]">
                    For bridal inquiries, rate cards & moodboards
                  </span>
                </div>
              </div>

              {/* Instagram (Touchable / Clickable) */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#FAF2EB] text-[#9E5F3D] flex items-center justify-center shrink-0 mt-0.5">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8A796D]">
                    Instagram (Touch to Open)
                  </h4>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[#9E5F3D] hover:text-[#2D2824] font-medium transition-colors mt-1 block underline underline-offset-2"
                  >
                    {ARTIST_INFO.instagramHandle}
                  </a>
                  <span className="text-[11px] text-[#7A7065]">
                    Daily bridal reels, real client transformations & stories
                  </span>
                </div>
              </div>

              {/* Doorstep & Travel Guarantee Banner */}
              <div className="p-3.5 bg-[#F8F2EB] rounded-xl border border-[#E9DDD1] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8A5237]">
                  <Sparkles className="w-3.5 h-3.5 text-[#D49841]" />
                  <span>Doorstep & On-Venue Travel Anywhere</span>
                </div>
                <p className="text-[11.5px] text-[#63574D] leading-relaxed">
                  Wherever your wedding, reception, or ceremony takes place — marriage halls, hotels, beach resorts, or home — Karni & team travel directly to your location with professional lighting and makeup setups.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5DAD0] shadow-xs">
              <h3 className="font-display text-2xl text-[#1E1B18] font-normal pb-3 border-b border-[#EFE7DE]">
                Send a Direct Message
              </h3>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 bg-[#FAF2EB] text-[#9E5F3D] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-2xl text-[#1E1B18] font-normal">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#61584F] max-w-md mx-auto">
                    Thank you {formData.name}. Karni will reach out to {formData.phone} shortly with brochure and custom slot details.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-wider font-semibold text-[#9E5F3D] hover:underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#3D3730] mb-1">
                        Your Name <span className="text-[#9E5F3D]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Radhika Menon"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-[#D9CFC4] rounded-lg px-3.5 py-2.5 text-xs text-[#2D2824] focus:outline-hidden focus:ring-1 focus:ring-[#9E5F3D]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#3D3730] mb-1">
                        Phone / WhatsApp <span className="text-[#9E5F3D]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98400 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-[#D9CFC4] rounded-lg px-3.5 py-2.5 text-xs text-[#2D2824] focus:outline-hidden focus:ring-1 focus:ring-[#9E5F3D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#3D3730] mb-1">
                        Wedding / Event Date
                      </label>
                      <input
                        type="date"
                        value={formData.weddingDate}
                        onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-[#D9CFC4] rounded-lg px-3.5 py-2.5 text-xs text-[#2D2824] focus:outline-hidden focus:ring-1 focus:ring-[#9E5F3D]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#3D3730] mb-1">
                        Event Location / Venue / City (We Travel to You)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Any Wedding Hall, Resort, or Home Address"
                        value={formData.locationVenue}
                        onChange={(e) => setFormData({ ...formData, locationVenue: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-[#D9CFC4] rounded-lg px-3.5 py-2.5 text-xs text-[#2D2824] focus:outline-hidden focus:ring-1 focus:ring-[#9E5F3D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#3D3730] mb-1">
                      Event Type / Services Needed
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D9CFC4] rounded-lg px-3.5 py-2.5 text-xs text-[#2D2824] focus:outline-hidden focus:ring-1 focus:ring-[#9E5F3D]"
                    >
                      <option value="Muhurtham + Reception (Complete 2-Event)">
                        Muhurtham + Reception (Complete 2-Event)
                      </option>
                      <option value="Traditional South Indian Muhurtham Only">
                        Traditional South Indian Muhurtham Only
                      </option>
                      <option value="Grand Reception Glam Only">
                        Grand Reception Glam Only
                      </option>
                      <option value="Engagement & Haldi/Mehendi">
                        Engagement & Haldi/Mehendi
                      </option>
                      <option value="Madisar 9-Yards Saree & Hair Draping">
                        Madisar 9-Yards Saree & Hair Draping
                      </option>
                      <option value="Bridesmaid & Family Party Makeup">
                        Bridesmaid & Family Party Makeup
                      </option>
                      <option value="In-Studio Trial Consultation">
                        In-Studio Trial Consultation
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#3D3730] mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your wedding hall in Chennai, number of family members, or specific skin preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D9CFC4] rounded-lg px-3.5 py-2.5 text-xs text-[#2D2824] focus:outline-hidden focus:ring-1 focus:ring-[#9E5F3D]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#2D2824] hover:bg-[#9E5F3D] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold py-3.5 rounded-lg transition-colors shadow-sm active:scale-98"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Bridal Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Local SEO FAQ Accordion Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-[#9E5F3D] font-semibold">
              Frequently Asked Questions
            </span>
            <h3 className="font-display text-3xl text-[#1E1B18] font-normal mt-1">
              Chennai Bridal Makeup Essentials
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E5DCD2] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-[#FAF6F2] transition-colors"
                >
                  <span className="font-display text-lg sm:text-xl text-[#2D2824] font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#9E5F3D] shrink-0 transition-transform duration-200 ${
                      openFaqIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openFaqIndex === idx && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-[#554D45] leading-relaxed border-t border-[#F0E8E0] bg-[#FAF8F5]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
