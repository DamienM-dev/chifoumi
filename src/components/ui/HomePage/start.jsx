import React from "react";
import { Link } from "react-router-dom";

const start = "start";

export default function Start() {
  return (
    <div className="text-center mt-10">
      <button className="bg-white w-64 h-12 py-2 px-12 rounded-lg">
        <Link to="/game" className="uppercase text-lg">
          {start}
        </Link>
      </button>
    </div>
  );
}
