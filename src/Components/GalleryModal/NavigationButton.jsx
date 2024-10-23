import React from 'react'
import { images } from '../../Utils/Shared/Data';

export default function NavigationButton({selectedImageIndex,setSelectedImageIndex}) {

      // Navigate to the previous image
  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next image
  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
 
         <div className="flex justify-between items-center w-full max-w-[200px] ">
            <button
              onClick={prevImage}
              className="px-3 h-[50px] font-[Quicksand] bg-white text-[#031d33] rounded-lg focus:outline-none"
            >
              Prev
            </button>
            <p className="bg-white w-[50px] font-[Quicksand] h-[50px] rounded-md  flex justify-center items-center">
              {selectedImageIndex + 1}
            </p>
            <button
              onClick={nextImage}
              className="px-3 h-[50px] font-[Quicksand] bg-white text-[#031d33] rounded-lg focus:outline-none"
            >
              Next
            </button>
          </div>
    
  )
}
