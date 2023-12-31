import React from "react";

const rps = [
  {
    title: "rock",
  },
  {
    title: "/ paper /",
  },
  {
    title: "scissors",
  },
];

export default function RpsTitle() {
  return (
    <div className="text-center">
      {rps.map((elementRPS, index) => (
        <span key={index}>
          <p className="text-white leading-10 text-5xl uppercase mt-4">
            {elementRPS.title}
          </p>
        </span>
      ))}
    </div>
  );
}
