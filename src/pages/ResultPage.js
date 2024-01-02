import React from "react";

import Result from "../components/ui/GamePage/result";
import CrossHome from "../components/ui/GamePage/crossHome";
import RandomGame from "../components/ui/GamePage/randomGame";

export default function ResultPage() {
  return (
    <main>
      <CrossHome />
      <RandomGame />
      <Result />
    </main>
  );
}
