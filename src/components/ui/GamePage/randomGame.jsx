import React from "react";
import { useParams } from "react-router-dom";

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

const result = [
  {
    text: "it's a draw",
    src: "/icons/neutral-face.svg",
    alt: "neutral face",
  },
  {
    text: "you loose",
    src: "/icons/sad-face.svg",
    alt: "sad face",
  },
  {
    text: "you win !",
    src: "/icons/happy-face.svg",
    alt: "happy face",
  },
];

export default function RandomGame() {
  const { choiceAlt } = useParams();
  const randomIndex = Math.floor(Math.random() * randImg.length);

  const randomChoice = randImg[randomIndex];

  let resultIndex;
  if (randomChoice.alt === choiceAlt) {
    resultIndex = 0;
  } else if (
    (randomChoice.alt === "pierre" && choiceAlt === "papier") ||
    (randomChoice.alt === "papier" && choiceAlt === "ciseaux") ||
    (randomChoice.alt === "ciseaux" && choiceAlt === "pierre")
  ) {
    resultIndex = 2;
  } else {
    resultIndex = 1;
  }

  return (
    <div>
      <div className="flex justify-center">
        <img
          src={randomChoice.src}
          alt={randomChoice.alt}
          className="w-28 h-36 rotate-180"
        />
      </div>
      <div className="flex justify-center text-2xl uppercase mt-5 font-bold">
        <p className="mr-2">{result[resultIndex].text}</p>
        <img
          src={result[resultIndex].src}
          alt={result[resultIndex].alt}
          className="w-4 font-bold"
        />
      </div>
    </div>
  );
}
