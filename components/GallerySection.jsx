"use client";

import { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";

const galleryImages = [
  { id: 1,  src: "./images/banners/sobhaparqcity.webp",  alt: "Sobha Parq City" },
  { id: 2,  src: "./images/banners/sobha-parq-city.webp",  alt: "Sobha Parq City" },
  { id: 3,  src: "./images/banners/sobha-parqcity.webp",  alt: "Sobha Parq City" },
  { id: 4,  src: "./images/gallery/image1.webp",  alt: "Sobha Parq City" },
  { id: 5,  src: "./images/gallery/image2.webp",  alt: "Sobha Parq City" },
  { id: 6,  src: "./images/gallery/image3.webp",  alt: "Sobha Parq City" },
  { id: 7,  src: "./images/gallery/image4.webp",  alt: "Sobha Parq City" },
  { id: 8,  src: "./images/gallery/image5.webp",  alt: "Sobha Parq City" },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () =>
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const goNext = () =>
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="w-full bg-white pt-14 px-3 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="gallery-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Sobha Parq City Gallery
        </h2>

        <div className="w-full h-px bg-gray-200 mb-10" />

        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          aria-label="Sobha Parq City project gallery"
        >
          {galleryImages.map((img, index) => (
            <div
              key={img.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer shadow-sm border border-gray-100"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center text-white text-base">
                  <FaExpand />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 cursor-pointer right-4 text-white text-2xl p-2 hover:text-gray-300 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <FaTimes />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute cursor-pointer left-4 text-white text-2xl p-3 hover:text-gray-300 transition-colors z-10"
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </button>

          <div
            className="max-w-4xl w-full max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute cursor-pointer right-4 text-white text-2xl p-3 hover:text-gray-300 transition-colors z-10"
            aria-label="Next image"
          >
            <FaChevronRight />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}