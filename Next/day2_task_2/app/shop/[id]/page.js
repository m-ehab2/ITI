import React from "react";

export default async function Page({ params }) {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products/" + params.id,
    {
      next: { tags: ["collection"] },
    }
  );
  const product = await res.json();
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-8">
      <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
      <div className="flex flex-wrap mb-4 justify-center">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product Image ${index + 1}`}
            className="w-1/4 rounded-md mr-4 mb-4"
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-gray-700 mb-4">Price: ${product.price}</p>
      <div className="flex items-center mb-4">
        <img
          src={product.category.image}
          alt={product.category.name}
          className="w-8 h-8 mr-2"
        />
        <span>{product.category.name}</span>
      </div>
      <p className="text-gray-500">
        Created At: {new Date(product.creationAt).toLocaleString()}
      </p>
      <p className="text-gray-500">
        Updated At: {new Date(product.updatedAt).toLocaleString()}
      </p>
    </div>
  );
}
