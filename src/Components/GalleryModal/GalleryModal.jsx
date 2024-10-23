import React from "react";
import { images } from "../../Utils/Shared/Data";
import NavigationButton from "./NavigationButton";

export default function GalleryModal({
  isOpen,
  selectedImageIndex,
  setSelectedImageIndex,
}) {


  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#031d33] bg-opacity-80 z-50">
          <img
            src={images[selectedImageIndex].src}
            alt={images[selectedImageIndex].alt}
            className="max-w-full fade-in h-[80vh] rounded-lg mb-4  object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
          />

          {/* Navigation Buttons */}
                <NavigationButton  setSelectedImageIndex={ setSelectedImageIndex} selectedImageIndex={selectedImageIndex}/>
        </div>
      )}
    </div>
  );
}
