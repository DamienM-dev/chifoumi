import React from "react";
import { useParams } from "react-router-dom";

const userChoices = [
  {
    src: "/imagesHand/rock.svg",
    alt: "pierre",
  },
  {
    src: "/imagesHand/paper.svg ",
    alt: "papier",
  },
  {
    src: "/imagesHand/scissor.svg",
    alt: "ciseaux",
  },
];

export default function Result() {
  const { choiceAlt } = useParams();
  const userChoice = userChoices.find((choice) => choice.alt === choiceAlt);
  return (
    <div>
      {userChoice ? (
        <div className="flex justify-center">
          <img
            src={userChoice.src}
            alt={userChoice.alt}
            className="w-28 h-36 "
          />
        </div>
      ) : null}
    </div>
  );
}
