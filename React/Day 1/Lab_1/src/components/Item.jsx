import { useState } from "react";

export default function Item(props) {
  let { name, count } = props.item;
  return (
    <div>
      <div className="card">
        {name} is {count}
        <button onClick={() => props.handleDecrement(name)}>-</button>
        <button onClick={() => props.handleIncrement(name)}>+</button>
        <button onClick={() => props.handleDelete(name)}>X</button>
      </div>
    </div>
  );
}
