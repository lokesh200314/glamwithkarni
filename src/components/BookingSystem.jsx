import React, { useState } from 'react';
import { SERVICES_DATA, ARTIST_INFO } from '../data/mockData';
import { Calendar, Clock, MapPin, User, CheckCircle2, MessageSquare, Sparkles, ArrowRight, ArrowLeft, ShieldCheck, Heart } from 'lucide-react';

export const BookingSystem = ({ selectedServiceId, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(
    selectedServiceId || 'bridal-muhurtham'
  );

  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    phone: '',
    email: '',
    weddingDate: '',
    eventTime: '04:30 AM (Early Muhurtham)',
    locality: '',
    venueName: '',
    additionalNotes: '',
    needSareeDraping: true,
    needHairdo: true,
    needTrial: false,
    menGroomingNeeded: false,
    numberOfGuests: 'Bride/Groom Only'
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const currentServiceObj = SERVICES_DATA.find(s => s.id === selectedService) || SERVICES_DATA[0];

  const handleNext = (e) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Appointment Inquiry for Karni (@glamwithKarni_makeover)*%0A%0A` +
      `*Client Name:* ${encodeURIComponent(bookingDetails.name)}%0A` +
      `*Phone:* ${encodeURIComponent(bookingDetails.phone)}%0A` +
      `*Selected Service:* ${encodeURIComponent(currentServiceObj.title)} (${encodeURIComponent(currentServiceObj.priceDisplay)})%0A` +
      `*Wedding / Event Date:* ${encodeURIComponent(bookingDetails.weddingDate)}%0A` +
      `*Ready-by Time:* ${encodeURIComponent(bookingDetails.eventTime)}%0A` +
      `*Chennai Locality / Area:* ${encodeURIComponent(bookingDetails.locality)}%0A` +
      `*Venue / Hall Name:* ${encodeURIComponent(bookingDetails.venueName || 'To be decided')}%0A` +
      `*Saree Draping:* ${bookingDetails.needSareeDraping ? 'Yes' : 'No'}%0A` +
      `*Hairdo / Hair Architecture:* ${bookingDetails.needHairdo ? 'Yes' : 'No'}%0A` +
      `*Men / Groom Grooming:* ${bookingDetails.menGroomingNeeded ? 'Yes' : 'No'}%0A` +
      `*Notes:* ${encodeURIComponent(bookingDetails.additionalNotes || 'None')}%0A%0A` +
      `_Sent from glamwithKarni_makeover web booking system._`;

    window.open(`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-sans font-semibold text-[#9E5F3D] mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Instant Date & Slot Reservation</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal tracking-tight">
            Book Your Makeover, Draping & Hairdo
          </h2>
          <p className="mt-3 text-base text-[#61584F] leading-relaxed">
            Reserve your wedding date with Karni. Select your package, specify Chennai venue timings, and get instant confirmation directly on WhatsApp.
          </p>
        </div>

        {/* Multi-Step Booking Card */}
        <div className="bg-white rounded-3xl border border-[#E5DCD2] shadow-xl overflow-hidden">
          {/* Progress Indicator */}
          {!isSuccess && (
            <div className="bg-[#F6EFE9] px-6 sm:px-10 py-4 border-b border-[#EADFD5] flex items-center justify-between text-xs font-semibold text-[#665B51]">
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  step >= 1 ? 'bg-[#2D2824] text-white' : 'bg-[#E0D4C7] text-[#554D44]'
                }`}>
                  1
                </span>
                <span className={step === 1 ? 'text-[#1E1B18] font-bold' : ''}>
                  Select Package
                </span>
              </div>

              <div className="w-12 h-[1px] bg-[#D4C5B7] hidden sm:block" />

              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  step >= 2 ? 'bg-[#2D2824] text-white' : 'bg-[#E0D4C7] text-[#554D44]'
                }`}>
                  2
                </span>
                <span className={step === 2 ? 'text-[#1E1B18] font-bold' : ''}>
                  Event & Location
                </span>
              </div>

              <div className="w-12 h-[1px] bg-[#D4C5B7] hidden sm:block" />

              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  step >= 3 ? 'bg-[#2D2824] text-white' : 'bg-[#E0D4C7] text-[#554D44]'
                }`}>
                  3
                </span>
                <span className={step === 3 ? 'text-[#1E1B18] font-bold' : ''}>
                  Confirm & WhatsApp
                </span>
              </div>
            </div>
          )}

          {/* Form Content */}
          <div className="p-6 sm:p-10">
            {/* Step 1: Package Selection */}
            {step === 1 && (
              <form onSubmit={handleNext} className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl text-[#1E1B18] font-normal mb-1">
                    Choose Your Makeover Package
                  </h3>
                  <p className="text-xs text-[#73695F]">
                    Select the service you require for your special day in Chennai or outstation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SERVICES_DATA.map((service) => (
                    <label
                      key={service.id}
                      className={`cursor-pointer rounded-xl p-4 border transition-all flex flex-col justify-between ${
                        selectedService === service.id
                          ? 'border-[#9E5F3D] bg-[#FAF5F0] ring-1 ring-[#9E5F3D] shadow-xs'
                          : 'border-[#E3D8CC] hover:border-[#2D2824] bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="serviceSelection"
                            value={service.id}
                            checked={selectedService === service.id}
                            onChange={() => setSelectedService(service.id)}
                            className="text-[#9E5F3D] focus:ring-[#9E5F3D]"
                          />
                          <span className="font-semibold text-sm text-[#2D2824]">
                            {service.title}
                          </span>
                        </div>
                        <span className="font-display text-sm font-semibold text-[#8F5536] whitespace-nowrap">
                          {service.priceDisplay}
                        </span>
                      </div>

                      <p className="text-[11px] text-[#635950] mt-2 line-clamp-2 pl-6">
                        {service.tagline}
                      </p>

                      <div className="mt-3 pl-6 flex items-center justify-between text-[11px] text-[#85776C]">
                        <span>Duration: {service.duration}</span>
                        <span className="text-[#9E5F3D] font-medium">For: {service.targetAudience}</span>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Additional Add-on Toggles */}
                <div className="pt-4 border-t border-[#EAE1D6] space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#6B5F54]">
                    Custom Customizations & Services:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <label className="flex items-center gap-2.5 p-3 rounded-lg border border-[#E3D9CE] bg-[#FAF8F5] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={bookingDetails.needSareeDraping}
                        onChange={(e) => setBookingDetails({ ...bookingDetails, needSareeDraping: e.target.checked })}
                        className="rounded text-[#9E5F3D] focus:ring-[#9E5F3D]"
                      />
                      <span className="text-[#2D2824] font-medium">
                        Include Traditional Saree / 9-Yards Madisar Draping
                      </span>
                    </label>

                    <label className="flex items-center gap-2.5 p-3 rounded-lg border border-[#E3D9CE] bg-[#FAF8F5] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={bookingDetails.needHairdo}
                        onChange={(e) => setBookingDetails({ ...bookingDetails, needHairdo: e.target.checked })}
                        className="rounded text-[#9E5F3D] focus:ring-[#9E5F3D]"
                      />
                      <span className="text-[#2D2824] font-medium">
                        Include Bridal Hairdo & Jasmine Flower Setting
                      </span>
                    </label>

                    <label className="flex items-center gap-2.5 p-3 rounded-lg border border-[#E3D9CE] bg-[#FAF8F5] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={bookingDetails.menGroomingNeeded}
                        onChange={(e) => setBookingDetails({ ...bookingDetails, menGroomingNeeded: e.target.checked })}
                        className="rounded text-[#9E5F3D] focus:ring-[#9E5F3D]"
                      />
                      <span className="text-[#2D2824] font-medium">
                        Add Groom / Men's HD Grooming & Dhoti Styling
                      </span>
                    </label>

                    <label className="flex items-center gap-2.5 p-3 rounded-lg border border-[#E3D9CE] bg-[#FAF8F5] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={bookingDetails.needTrial}
                        onChange={(e) => setBookingDetails({ ...bookingDetails, needTrial: e.target.checked })}
                        className="rounded text-[#9E5F3D] focus:ring-[#9E5F3D]"
                      />
                      <span className="text-[#2D2824] font-medium">
                        Request Pre-Wedding In-Studio Trial Session
                      </span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#2D2824] hover:bg-[#9E5F3D] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-md"
                  >
                    <span>Proceed to Event Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 2: Event, Date & Locality Details */}
            {step === 2 && (
              <form onSubmit={handleNext} className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl text-[#1E1B18] font-normal mb-1">
                    Event Date, Time & Venue Location
                  </h3>
                  <p className="text-xs text-[#73695F]">
                    Wherever you are located, Karni and team travel directly to your wedding hall, hotel resort, or home residence.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#3D3730] mb-1">
                      Wedding / Event Date <span className="text-[#9E5F3D]">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={bookingDetails.weddingDate}
                      onChange={(e) => setBookingDetails({ ...bookingDetails, weddingDate: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D9CFC4] rounded-lg px-3.5 py-2.5 text-xs text-[#2D2824] focus:outline-hidden focus:ring-1 focus:ring-[#9E5F3D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#3D3730] mb-1">
                      Ready-By Time / Muhurtham Slot <span className="text-[#9E5F3D]">*</span>
                    </label>
                    <select
                      value={bookingDetails.eventTime}
                      onChange={(e) => setBookingDetails({ ...bookingDetails, eventTime: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D9CFC4] rounded-lg px-3.5 py-2.5 text-xs text-[#2D2824] focus:outline-hidden focus:ring-1 focus:ring-[#9E5F3D]"
                    >
                      <option value="04:00 AM (Early Subha Muhurtham)">04:00 AM (Early Subha Muhurtham)</option>
                      <option value="05:30 AM (Morning Muhurtham)">05:30 AM (Morning Muhurtham)</option>
                      <option value="07:30 AM (Morning Ceremony)">07:30 AM (Morning Ceremony)</option>
                      <option value="04:00 PM (Evening Reception / Sangeet)">04:00 PM (Evening Reception / Sangeet)</option>
                      <option value="06:00 PM (Grand Banquet Reception)">06:00 PM (Grand Banquet Reception)</option>
                      <option value="Multi-Session / Full Day Wedding">Multi-Session / Full Day Wedding</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#3D3730] mb-1">
                      Event Location / City / Area (We Travel Anywhere) <span className="text-[#9E5F3D]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Any city, locality, or area"
                      value={bookingDetails.locality}
                      onChange={(e) => setBookingDetails({ ...bookingDetails, locality: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D9CFC4] rounded-lg px-3.5 py-2.5 text-xs text-[#2D2824] focus:outline-hidden focus:ring-1 focus:ring-[#9E5F3D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#3D3730] mb-1">
                      Mandapam / Hotel / Residence Venue
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mayor Ramanathan Chettiar Hall (MRC) / Home"
                      value={bookingDetails.venueName}
                      onChange={(e) => setBookingDetails({ ...bookingDetails, venueName: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D9CFC4] rounded-lg px-3.5 py-2.5 text-xs text-[#2D2824] focus:outline-hidden focus:ring-1 focus:ring-[#9E5F3D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#3D3730] mb-1">
                      Your Full Name <span className="text-[#9E5F3D]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Divya Krishnan"
                      value={bookingDetails.name}
                      onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D9CFC4] rounded-lg px-3.5 py-2.5 text-xs text-[#2D2824] focus:outline-hidden focus:ring-1 focus:ring-[#9E5F3D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#3D3730] mb-1">
                      WhatsApp Phone Number <span className="text-[#9E5F3D]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98400 12345"
                      value={bookingDetails.phone}
                      onChange={(e) => setBookingDetails({ ...bookingDetails, phone: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D9CFC4] rounded-lg px-3.5 py-2.5 text-xs text-[#2D2824] focus:outline-hidden focus:ring-1 focus:ring-[#9E5F3D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#3D3730] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="divya@example.com"
                      value={bookingDetails.email}
                      onChange={(e) => setBookingDetails({ ...bookingDetails, email: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D9CFC4] rounded-lg px-3.5 py-2.5 text-xs text-[#2D2824] focus:outline-hidden focus:ring-1 focus:ring-[#9E5F3D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#3D3730] mb-1">
                    Special Styling Requests / Skin Concerns / Family Member Count
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Sensitive skin, looking for Madisar 9-yards draping and 2 bridesmaid hair styles..."
                    value={bookingDetails.additionalNotes}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, additionalNotes: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D9CFC4] rounded-lg px-3.5 py-2.5 text-xs text-[#2D2824] focus:outline-hidden focus:ring-1 focus:ring-[#9E5F3D]"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#EAE1D6]">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 text-xs text-[#6B5F54] hover:text-[#1E1B18] font-semibold px-4 py-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#2D2824] hover:bg-[#9E5F3D] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-md"
                  >
                    <span>Review & Confirm</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Review & Summary */}
            {step === 3 && (
              <form onSubmit={handleFinalSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl text-[#1E1B18] font-normal mb-1">
                    Review Your Appointment Request
                  </h3>
                  <p className="text-xs text-[#73695F]">
                    Please verify your appointment parameters before confirming with Karni.
                  </p>
                </div>

                <div className="bg-[#FAF7F3] rounded-2xl p-6 border border-[#E8DDD0] space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EAE0D4] gap-2">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#9E5F3D] font-bold">
                        Selected Package
                      </span>
                      <h4 className="font-display text-xl text-[#2D2824] font-medium">
                        {currentServiceObj.title}
                      </h4>
                    </div>
                    <span className="font-display text-2xl font-semibold text-[#8F5536]">
                      {currentServiceObj.priceDisplay}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[#87786B] block">Client Name:</span>
                      <span className="font-medium text-[#2D2824]">{bookingDetails.name || 'Not provided'}</span>
                    </div>

                    <div>
                      <span className="text-[#87786B] block">WhatsApp Contact:</span>
                      <span className="font-medium text-[#2D2824]">{bookingDetails.phone || 'Not provided'}</span>
                    </div>

                    <div>
                      <span className="text-[#87786B] block">Wedding / Event Date:</span>
                      <span className="font-medium text-[#2D2824]">{bookingDetails.weddingDate || 'Date to be confirmed'}</span>
                    </div>

                    <div>
                      <span className="text-[#87786B] block">Ready-By Slot:</span>
                      <span className="font-medium text-[#2D2824]">{bookingDetails.eventTime}</span>
                    </div>

                    <div>
                      <span className="text-[#87786B] block">Chennai Locality:</span>
                      <span className="font-medium text-[#2D2824]">{bookingDetails.locality}</span>
                    </div>

                    <div>
                      <span className="text-[#87786B] block">Venue / Hall:</span>
                      <span className="font-medium text-[#2D2824]">{bookingDetails.venueName || 'Chennai On-Venue / In Studio'}</span>
                    </div>
                  </div>

                  {/* Addon Badges */}
                  <div className="pt-3 border-t border-[#EAE0D4] flex flex-wrap gap-2 text-[11px]">
                    {bookingDetails.needSareeDraping && (
                      <span className="bg-white border border-[#DDD0C2] px-2.5 py-1 rounded-md text-[#554A40]">
                        ✓ Saree & Madisar Draping included
                      </span>
                    )}
                    {bookingDetails.needHairdo && (
                      <span className="bg-white border border-[#DDD0C2] px-2.5 py-1 rounded-md text-[#554A40]">
                        ✓ Bridal Hairdo & Jasmine Flower Setting
                      </span>
                    )}
                    {bookingDetails.menGroomingNeeded && (
                      <span className="bg-white border border-[#DDD0C2] px-2.5 py-1 rounded-md text-[#554A40]">
                        ✓ Groom & Men HD Grooming included
                      </span>
                    )}
                    {bookingDetails.needTrial && (
                      <span className="bg-white border border-[#DDD0C2] px-2.5 py-1 rounded-md text-[#554A40]">
                        ✓ Pre-Wedding Trial Consultation requested
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#EAE1D6]">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 text-xs text-[#6B5F54] hover:text-[#1E1B18] font-semibold px-4 py-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#2D2824] hover:bg-[#9E5F3D] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg active:scale-98"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Confirm & Book Appointment</span>
                  </button>
                </div>
              </form>
            )}

            {/* Success Screen with Direct WhatsApp Button */}
            {isSuccess && (
              <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-[#F3EBE1] text-[#9E5F3D] rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-[#9E5F3D] font-bold">
                    Reservation Received
                  </span>
                  <h3 className="font-display text-3xl text-[#1E1B18] font-normal mt-1">
                    Thank You, {bookingDetails.name || 'Bride / Client'}!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#61574C] max-w-lg mx-auto mt-2 leading-relaxed">
                    Your makeover inquiry for <strong className="text-[#2D2824]">{bookingDetails.weddingDate || 'your wedding day'}</strong> has been registered. Connect directly with Karni on WhatsApp to lock your calendar slot.
                  </p>
                </div>

                {/* Primary WhatsApp Action */}
                <div className="pt-2">
                  <button
                    onClick={generateWhatsAppMessage}
                    className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm uppercase tracking-wider font-semibold px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95"
                  >
                    <MessageSquare className="w-5 h-5 fill-current" />
                    <span>Send Booking to Karni via WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-[#7A7065] mt-2">
                    Clicking will open WhatsApp with your pre-filled wedding makeover details.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#EAE1D6] flex justify-center">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setStep(1);
                    }}
                    className="text-xs text-[#7A7065] hover:text-[#2D2824] font-medium underline"
                  >
                    Book another session or edit details
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
