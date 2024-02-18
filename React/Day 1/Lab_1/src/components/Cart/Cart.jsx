import React from "react";
import Item from "./Item";
import emptyCart from "../../assets/emptyCart.png";

const Cart = (props) => {
  const {
    inCart,
    handleDecrement,
    handleIncrement,
    handleDelete,
    handleReset,
  } = props;
  const initialValue = 0;
  const sumWithInitial = inCart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.count * currentValue.price,
    initialValue
  );
  console.log(sumWithInitial);
  return (
    <div className="w-2/3 mx-auto px-4 py-8 flex flex-col items-center">
      {inCart.length ? (
        <div className="flex flex-col items-center w-full">
          {inCart.map((p) => (
            <Item
              item={p}
              key={p.id}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleDelete={handleDelete}
            />
          ))}
          <h1 className="w-full p-5 font-extrabold flex justify-around bg-orange-200 rounded-md">
            <span>Total:</span>
            <span>{sumWithInitial}</span>
          </h1>
          <button
            onClick={handleReset}
            className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg mt-4 hover:bg-orange-600 transition-all"
          >
            Reset
          </button>
        </div>
      ) : (
        <div className="">
          <img src={emptyCart} alt="crap" className="w-96" />
          <h1 className="text-6xl">No items in cart!</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
