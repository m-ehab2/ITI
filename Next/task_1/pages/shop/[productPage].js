import React from "react";

export default function ProductPage({ product }) {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className=" card w-25 mx-auto my-5">
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
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  return {
    paths: ["/shop/1"],
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  console.log(params);
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.productPage}`
  );
  console.log(response);
  const product = await response.json();

  return {
    props: {
      product,
    },
  };
}
