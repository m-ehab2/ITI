import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex-grow flex justify-center items-center flex-col gap-14">
      <h1 className=" text-6xl">
        Welcome to My{" "}
        <span className="text-orange-500 font-bold ">Fast Food</span> website !
      </h1>
      <div className="menu flex flex-col justify-center gap-7">
        <h2 className=" text-4xl text-center">
          Our <span className="text-orange-500 font-bold ">Menu</span> has
        </h2>
        <div className="categories flex gap-6 mx-32">
          <div className="card border-2 p-3 border-orange-400 rounded-md ">
            <h3 className="title text-2xl font-semibold">Burgers</h3>
            <p className="text-lg">
              Experience juicy patties, melted cheese, and fresh toppings, all
              sandwiched between soft buns for the ultimate burger delight.
            </p>
          </div>
          <div className="card border-2 p-3 border-orange-400 rounded-md ">
            <h3 className="title text-2xl font-semibold ">Fries</h3>
            <p className="text-lg">
              Indulge in golden, crispy fries, perfectly seasoned and served hot
              for a savory treat that's impossible to resist.
            </p>
          </div>
          <div className="card border-2 p-3 border-orange-400 rounded-md ">
            <h3 className="title text-2xl font-semibold">Beverages</h3>
            <p className="text-lg">
              Quench your thirst with our refreshing selection of beverages,
              from ice-cold sodas to freshly brewed coffees and teas.
            </p>
          </div>
        </div>
      </div>
      <Link
        to={"/products"}
        className="cot text-3xl bg-orange-600 p-4 rounded-xl font-medium text-white cursor-pointer transition-all hover:bg-orange-500 "
      >
        Check The Menu
      </Link>
    </div>
  );
}
