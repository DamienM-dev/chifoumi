import React, { useEffect, useState } from "react";

const fastHand = [
  {
    alt: "paper",
    src: "imagesHand/paper.svg",
  },
  {
    alt: "heavy",
    src: "imagesHand/heavy.svg",
  },
  {
    alt: "scissor",
    src: "imagesHand/scissor.svg",
  },
  {
    alt: "rock one",
    src: "imagesHand/rock.svg",
  },
  {
    alt: "rock two",
    src: "imagesHand/rock1.svg",
  },
  {
    alt: "rock three",
    src: "imagesHand/rock3.svg",
  },
  {
    alt: "paper",
    src: "imagesHand/paper.svg",
  },
  {
    alt: "scissor",
    src: "imagesHand/scissor.svg",
  },
  {
    alt: "rock one",
    src: "imagesHand/rock.svg",
  },
];

export default function RpsFast() {
  const [indexImages, setIndexImages] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndexImages((prevIndex) =>
        prevIndex === fastHand.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img
        src={fastHand[indexImages].src}
        alt={fastHand[indexImages].alt}
        className="mx-auto rotate"
      />
    </div>
  );
}
