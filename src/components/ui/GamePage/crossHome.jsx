import React from "react";
import { Link } from "react-router-dom";

const src = "/icons/cross.svg";
const alt = "retour accueil";

export default function CrossHome() {
  return (
    <div className="p-3">
      <Link to="/">
        <img src={src} alt={alt} className="w-4 h-4 cursor-pointer" />
      </Link>
    </div>
  );
}
