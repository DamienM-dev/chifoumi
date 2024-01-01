import React from "react";

import ReturnHome from "../components/ui/GamePage/returnHome";
import RpsFast from "../components/ui/GamePage/rpsFast";
import LetsPlay from "../components/ui/GamePage/letsPlay";
import PickOption from "../components/ui/GamePage/pickOption";
import OptionChoice from "../components/ui/GamePage/optionChoice";

export default function GamePage() {
  return (
    <main>
      <ReturnHome />
      <RpsFast />
      <LetsPlay />
      <PickOption />
      <OptionChoice />
    </main>
  );
}
