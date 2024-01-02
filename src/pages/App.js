import React from "react";

import Creator from "../components/ui/HomePage/creator.jsx";
import RpsTitle from "../components/ui/HomePage/rps.jsx";
import RpsImages from "../components/ui/HomePage/rpsImages.jsx";
import Start from "../components/ui/HomePage/start.jsx";

function App() {
  return (
    <main className="bg-purple h-screen max-w-xl m-auto">
      <Creator />
      <RpsTitle />
      <RpsImages />
      <Start />
    </main>
  );
}

export default App;
