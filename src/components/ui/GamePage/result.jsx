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
  const { choiceIndex } = useParams();
  const userChoice = userChoices[choiceIndex];
  return (
    <div>
      {userChoice ? (
        <div>
          <img src={userChoice.src} alt={userChoice.alt} />
        </div>
      ) : null}
    </div>
  );
}
