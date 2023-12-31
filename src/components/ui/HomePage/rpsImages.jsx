import React, { useEffect, useState } from "react";

const rpsImages = [
  {
    src: "imagesHand/paper.svg",
    alt: "Papier",
  },
  {
    src: "imagesHand/scissor.svg",
    alt: "Ciseaux",
  },
  {
    src: "imagesHand/rock.svg",
    alt: "Pierre",
  },
];

export default function RpsImages() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === rpsImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 400);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-36 h-64 mx-auto">
      <img
        src={rpsImages[currentImageIndex].src}
        alt={rpsImages[currentImageIndex].alt}
        className="w-full h-full"
      />
    </div>
  );
}
