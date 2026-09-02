import React, { useState } from 'react';
import { ARTIST_INFO, INSTAGRAM_POSTS } from '../data/mockData';
import { Heart, MessageCircle, Play, ExternalLink, Sparkles, X, Check } from 'lucide-react';

export const InstagramFeed = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [copiedHandle, setCopiedHandle] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ARTIST_INFO.instagramHandle);
    setCopiedHandle(true);
    setTimeout(() => setCopiedHandle(false), 2000);
  };

  return (
    <section id="instagram" className="py-20 lg:py-28 bg-[#F4EFEA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-sans font-semibold text-[#9E5F3D] mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Live Social Feed</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1E1B18] font-normal">
              Latest from Instagram: {ARTIST_INFO.instagramHandle}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#61584F]">
              Real-time behind the scenes, morning muhurtham reels, and bridal transformation stories from Chennai.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 bg-white border border-[#D5C7B8] hover:border-[#2D2824] text-[#2D2824] text-xs font-semibold px-4 py-2.5 rounded-md transition-colors"
            >
              {copiedHandle ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span>Handle Copied!</span>
                </>
              ) : (
                <span>Copy Handle</span>
              )}
            </button>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2D2824] hover:bg-[#9E5F3D] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-md transition-colors"
            >
              <span>Follow On Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Instagram Grid (6 Posts) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              id={`ig-post-${post.id}`}
              onClick={() => setSelectedPost(post)}
              className="group relative aspect-square rounded-xl overflow-hidden bg-stone-200 cursor-pointer border border-[#E2D6C8] shadow-xs hover:shadow-lg transition-all"
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />

              {/* Video Tag */}
              {post.isVideo && (
                <div className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-full backdrop-blur-xs">
                  <Play className="w-3 h-3 fill-current" />
                </div>
              )}

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white p-2 text-center">
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    {post.likes.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    {post.comments}
                  </span>
                </div>
                <span className="text-[10px] text-stone-300 line-clamp-2 px-2">
                  {post.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Post Details Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E3D8CC] flex flex-col">
            <div className="relative aspect-square bg-stone-900">
              <img
                src={selectedPost.imageUrl}
                alt="Instagram post preview"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-3 right-3 bg-black/60 text-white p-1.5 rounded-full hover:bg-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-3 bg-[#FAF8F5]">
              <div className="flex items-center justify-between text-xs text-[#7A7065] pb-2 border-b border-[#EBE1D7]">
                <span className="font-semibold text-[#2D2824]">{ARTIST_INFO.instagramHandle}</span>
                <span>{selectedPost.date}</span>
              </div>

              <p className="text-xs text-[#4A433B] leading-relaxed">
                {selectedPost.caption}
              </p>

              <div className="flex items-center justify-between pt-2 text-xs">
                <div className="flex items-center gap-4 text-[#7A7065] font-medium">
                  <span className="flex items-center gap-1 text-[#C44A3A]">
                    <Heart className="w-4 h-4 fill-current" /> {selectedPost.likes.toLocaleString()} likes
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" /> {selectedPost.comments} comments
                  </span>
                </div>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#9E5F3D] hover:underline"
                >
                  View on Instagram →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
