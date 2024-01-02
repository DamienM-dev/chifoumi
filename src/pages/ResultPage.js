import React from "react";

import Result from "../components/ui/GamePage/result";
import CrossHome from "../components/ui/GamePage/crossHome";
import RandomGame from "../components/ui/GamePage/randomGame";
import PlayAgain from "../components/ui/GamePage/again";

export default function ResultPage() {
  return (
    <main className="max-w-xl m-auto">
      <CrossHome />
      <RandomGame />
      <PlayAgain />
      <Result />
    </main>
  );
}
