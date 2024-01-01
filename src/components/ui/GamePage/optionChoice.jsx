import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          className="mt-11 bg-purple rounded-full w-16 h-16 flex justify-center cursor-pointer relative"
          onClick={() => handleUserChoice(index)}
        >
          <Link to="/result">
            <img
              src={choice.src}
              alt={choice.alt}
              className=" w-16 h-24 absolute -top-10 left-1 flex"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
