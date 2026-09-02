import React, { useState } from 'react';
import { ARTIST_INFO } from '../data/mockData';
import { MessageSquare, X, Send, CheckCheck } from 'lucide-react';

export const WhatsAppFloatingWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    { label: "Check wedding / event date availability", text: "Hi Karni! I'd like to check your availability for my wedding date in Chennai for makeover & draping." },
    { label: "Men / Groom styling & hairdo packages", text: "Hi Karni! Could you share groom styling, hairdo and grooming packages for our wedding?" },
    { label: "Saree Draping & Madisar 9-yards inquiry", text: "Hi Karni! Do you support box pleat silk saree & 9-yards Madisar draping in Chennai?" },
    { label: "Hairdo & Floral Braid (Poola Jada) booking", text: "Hi Karni! I would like to book bridal hairdo & traditional floral braid styling." }
  ];

  const handleSendPrompt = (text) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  const handleCustomSend = (e) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    handleSendPrompt(customMsg);
    setCustomMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Interactive Chat Drawer */}
      {isOpen && (
        <div className="mb-3 w-[330px] sm:w-[360px] bg-white rounded-2xl shadow-2xl border border-[#E3D7CC] overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/60">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=140&auto=format&fit=crop"
                    alt="Karni Makeover Artist"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#075E54]" />
              </div>
              <div>
                <h4 className="font-sans text-sm font-semibold leading-tight">{ARTIST_INFO.name}</h4>
                <p className="text-[11px] text-emerald-200">Online • {ARTIST_INFO.brandName}</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#ECE5DD] space-y-3 max-h-[320px] overflow-y-auto text-xs">
            {/* Incoming Bubble */}
            <div className="bg-white rounded-xl p-3 shadow-xs max-w-[85%] text-[#2D2824] space-y-1.5 rounded-tl-none">
              <p className="leading-relaxed">
                Vanakkam! 🙏 Looking for bridal, groom makeover, draping or hairdo in Chennai?
              </p>
              <p className="text-[#554E46] leading-relaxed">
                I'm Karni (glamwithKarni_makeover). Select a quick topic or message me directly on WhatsApp!
              </p>
              <div className="text-[10px] text-stone-400 text-right flex items-center justify-end gap-1">
                <span>Just now</span>
                <CheckCheck className="w-3 h-3 text-[#34B7F1]" />
              </div>
            </div>

            {/* Quick Chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#736A61] block">
                Quick Inquiries:
              </span>
              {quickPrompts.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendPrompt(q.text)}
                  className="w-full text-left bg-white/90 hover:bg-white text-[#2D2824] text-[11px] font-medium p-2 rounded-lg border border-[#DCD3C7] shadow-2xs hover:border-[#25D366] transition-all flex items-center justify-between gap-1"
                >
                  <span className="line-clamp-1">{q.label}</span>
                  <span className="text-[#25D366] text-xs">→</span>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Footer Input */}
          <form onSubmit={handleCustomSend} className="p-2.5 bg-white border-t border-[#E5DCD2] flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="flex-1 text-xs bg-[#FAF8F5] border border-[#D9CFC4] rounded-lg px-3 py-2 text-[#2D2824] focus:outline-hidden focus:ring-1 focus:ring-[#25D366]"
            />
            <button
              type="submit"
              className="bg-[#25D366] hover:bg-[#1EBE5D] text-white p-2 rounded-lg transition-colors"
              aria-label="Send WhatsApp message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp with Artist Karni"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">
          Chat on WhatsApp
        </span>

        {/* Pulse Dot */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-600 border border-white"></span>
        </span>
      </button>
    </div>
  );
};
