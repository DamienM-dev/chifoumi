import React, { useEffect, useState } from "react";

const userChoices = [
  {
    src: "imagesHand/paper.svg",
    alt: "pierre",
  },
  {
    src: "imagesHand/rock.svg",
    alt: "papier",
  },
  {
    src: "imagesHand/scissor.svg",
    alt: "ciseaux",
  },
];

export default function OptionChoice() {
  const [indexUserChoice, setIndexUserChoice] = useState(null);

  const handleUserChoice = (index) => {
    setIndexUserChoice(index);
  };

  return (
    <div className="flex p-4 justify-around">
      {userChoices.map((choice, index) => (
        <div
          key={index}
          className="mt-11 bg-purple rounded-full w-16 h-16 flex justify-center relative"
          onClick={() => handleUserChoice(index)}
        >
          <img
            src={choice.src}
            alt={choice.alt}
            className=" w-16 h-24 absolute -top-10 left-1 flex"
          />
        </div>
      ))}
    </div>
  );
}
