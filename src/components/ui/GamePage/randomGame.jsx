import React from "react";

const randImg = [
  {
    src: "/imagesHand/rock.svg",
    alt: "pierre",
  },
  {
    src: "/imagesHand/paper.svg",
    alt: "papier",
  },
  {
    src: "/imagesHand/scissor.svg",
    alt: "ciseaux",
  },
];

export default function RandomGame() {
  const randomIndex = Math.floor(Math.random() * randImg.length);

  const randomChoice = randImg[randomIndex];
  return (
    <div>
      <div>
        <img src={randomChoice.src} alt={randomChoice.alt} />
      </div>
    </div>
  );
}
