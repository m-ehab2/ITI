import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Item = (props) => {
  const { name, count, id, price } = props.item;

  return (
    <div className="flex items-center justify-between w-full mb-4 bg-white rounded-lg shadow-md p-4">
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-lg font-semibold">{price}$</div>
      <div className="flex items-center gap-5">
        <button
          onClick={() => props.handleDecrement(id)}
          className="text-orange-600 hover:text-orange-800 text-lg"
        >
          <RemoveIcon />
        </button>
        <div className="mx-2">{count}</div>
        <button
          onClick={() => props.handleIncrement(id)}
          className="text-orange-600 hover:text-orange-800 text-lg"
        >
          <AddIcon />
        </button>
        <button
          onClick={() => props.handleDelete(id)}
          className="text-red-600 hover:text-red-800 text-lg ml-4"
        >
          <DeleteOutlineIcon />
        </button>
      </div>
    </div>
  );
};

export default Item;
