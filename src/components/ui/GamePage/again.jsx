import React from "react";
import { Link } from "react-router-dom";

const play = "play again";

export default function PlayAgain() {
  return (
    <div className="flex justify-center mb-16">
      <Link to="/game">
        <p className="bg-purple text-white text-lg uppercase flex justify-center items-center w-44 h-11 rounded-lg cursor-pointer">
          {play}
        </p>
      </Link>
    </div>
  );
}
