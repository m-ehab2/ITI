import React from "react";

export default function About() {
  return (
    <div className=" mx-auto px-32 py-8 text-gray-800 flex flex-col justify-center flex-grow">
      <h2 className="text-4xl font-bold mb-6 text-orange-500 text-center">
        About Us
      </h2>
      <p className="mb-4 text-xl text-center">
        Welcome to <span className="font-bold text-orange-500">FastFood</span>,
        your go-to destination for delicious and convenient meals on the go!{" "}
      </p>

      <p className="mb-4 text-xl text-center">
        AtFastFood We're
        <span className="font-bold text-orange-500"> passionate</span> about
        providing our customers with high-quality food made from the freshest
        ingredients.
      </p>
      <p className="mb-4 text-xl text-center">
        Our <span className="font-bold text-orange-500">mission</span> is
        simple: to serve up mouthwatering dishes that satisfy your cravings and
        keep you coming back for more.
      </p>
    </div>
  );
}
