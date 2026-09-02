import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LocalSeoBar } from './components/LocalSeoBar';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { BookingSystem } from './components/BookingSystem';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InstagramFeed } from './components/InstagramFeed';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingWidget } from './components/WhatsAppFloatingWidget';

export function App() {
  const [bookingPrefilledService, setBookingPrefilledService] = useState('bridal-muhurtham');

  const handleOpenBooking = (serviceId) => {
    if (typeof serviceId === 'string') {
      setBookingPrefilledService(serviceId);
    }
    const bookingElem = document.getElementById('booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreGallery = () => {
    const galElem = document.getElementById('gallery');
    if (galElem) {
      galElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D2824] font-sans antialiased selection:bg-[#E8D7C8] selection:text-[#1A1816]">
      {/* 1. Sticky Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking('bridal-muhurtham')} />

      {/* 2. Hero Section with Prominent Chennai Bridal/Groom Showcase */}
      <Hero
        onOpenBooking={(serviceId) => handleOpenBooking(serviceId || 'bridal-muhurtham')}
        onExploreGallery={handleExploreGallery}
      />

      {/* 3. Local SEO & Trust Highlights Bar */}
      <LocalSeoBar />

      {/* 4. Complete Services List (Bridal, Groom, Saree/Madisar Draping, Hairdo) */}
      <ServicesSection onSelectServiceForBooking={handleOpenBooking} />

      {/* 5. Real Chennai Portfolio Gallery with Transformation Viewer */}
      <GallerySection onSelectServiceForBooking={handleOpenBooking} />

      {/* 6. Multi-Step Interactive Appointment Booking System */}
      <BookingSystem selectedServiceId={bookingPrefilledService} />

      {/* 7. Client Reviews & Social Proof */}
      <TestimonialsSection />

      {/* 8. Instagram Live Feed Widget */}
      <InstagramFeed />

      {/* 9. Contact Inquiry Form, Studio Details & Chennai FAQ */}
      <ContactSection />

      {/* 10. SEO-Rich Footer with Chennai Zones */}
      <Footer />

      {/* 11. Floating WhatsApp Chat Widget */}
      <WhatsAppFloatingWidget />
    </div>
  );
}

export default App;
