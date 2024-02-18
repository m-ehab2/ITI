import React from "react";
import { useLocation } from "react-router-dom";

export default function Product(props) {
  const { data } = props;
  const { pathname } = useLocation();
  const [thisProduct] = data.filter((e) => e.id == pathname.split("/")[2]);
  console.log(thisProduct);
  return (
    <div>
      <div>{thisProduct.name}</div>
      <div>{thisProduct.price}</div>
    </div>
  );
}
