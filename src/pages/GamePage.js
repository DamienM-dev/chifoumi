import React from "react";

import RpsFast from "../components/ui/GamePage/rpsFast";
import LetsPlay from "../components/ui/GamePage/letsPlay";
import PickOption from "../components/ui/GamePage/pickOption";
import OptionChoice from "../components/ui/GamePage/optionChoice";

export default function GamePage() {
  return (
    <main>
      <RpsFast />
      <LetsPlay />
      <PickOption />
      <OptionChoice />
    </main>
  );
}
