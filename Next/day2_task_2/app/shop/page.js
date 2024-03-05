import Link from "next/link";
import React from "react";

export default async function Page() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    next: { tags: ["collection"] },
  });
  const data = await res.json();
  return (
    <div className="flex flex-wrap justify-center items-top gap-3">
      {data.map((product) => {
        return product.title === "abc" ? (
          ""
        ) : (
          <div
            key={product.id}
            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href={"/" + product.id}>
              <img class="rounded-t-lg" src={product.images[0]} alt="" />
            </Link>
            <div class="p-5">
              <Link href={"/" + product.id}>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {product.description}
              </p>
              <Link
                href={"/shop/" + product.id}
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
              >
                Check Product
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
