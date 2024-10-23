
import React, { useState, useEffect, useRef } from 'react';
import GalleryModal from '../GalleryModal/GalleryModal';
import GalleryItem from './GalleryItem';
import { images } from '../../Utils/Shared/Data';


export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

 
  const openPopup = (index) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

 
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);



  return (
    <div dir='rtl' className="bg-[#031d33]">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
              // item
            <GalleryItem image={image} index={index} openPopup={openPopup} />
          ))}
        </div>
          {/* Modal */}
          <GalleryModal  isOpen={isOpen}   setSelectedImageIndex={setSelectedImageIndex} selectedImageIndex={selectedImageIndex} />
      </div>
    </div>
  );
}


