import React from "react";

export default function GalleryItem({ image, index, openPopup }) {
  return (
    <div>
      <div key={index} className="w-full h-auto">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="fade-in w-full h-[330px] rounded-lg object-cover cursor-pointer  transition-transform duration-300 hover:scale-105"
          onClick={() => openPopup(index)}
        />
      </div>
    </div>
  );
}
