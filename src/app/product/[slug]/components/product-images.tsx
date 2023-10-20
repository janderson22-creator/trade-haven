"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  imageUrls: string[];
  name: string;
}

const ProductImages: React.FC<ProductImagesProps> = ({ imageUrls, name }) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="flex h-[380px] w-full items-center justify-center bg-accent">
          <Image
            src={currentImage}
            alt={name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          />
        </div>

        <div className="mt-6 grid grid-cols-4 gap-4 px-5">
          {imageUrls.map((image) => (
            <button
              key={image}
              onClick={() => setCurrentImage(image)}
              className={`flex h-[80px] items-center justify-center rounded-lg bg-accent ${
                image === currentImage && "border-2 border-solid border-primary"
              }`}
            >
              <Image
                src={image}
                alt={image}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
