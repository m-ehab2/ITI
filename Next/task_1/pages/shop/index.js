import Link from "next/link";
import React from "react";

export default function index({ data: products }) {
  return (
    <div>
      <div className="container">
        <div className=" row-cols-4 row g-1">
          {products.map((product) => {
            return (
              <div key={product.id} className=" col card ">
                <div className=" ">
                  <img
                    src={product.image}
                    className="card-img-top "
                    alt={product.title}
                    height="200px"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fs-6 ">{product.title}</h5>
                  <Link
                    href={`/shop/${product.id}`}
                    className="btn btn-primary"
                  >
                    Buy
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
