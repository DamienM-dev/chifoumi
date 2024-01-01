import React from "react";
import { Link } from "react-router-dom";

const src = "icons/chevron-left.svg";
const alt = "retour accueil";

export default function returnHome() {
  return (
    <div className="p-3">
      <Link to="/">
        <img src={src} alt={alt} className="w-4 h-4 cursor-pointer" />
      </Link>
    </div>
  );
}
