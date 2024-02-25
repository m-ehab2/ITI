/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";

export default function Home({ data: products }) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/shop");
  };
  return (
    <main>
      <div className="container text-center my-5">
        <h1> Welcome to my shop</h1>
        <button onClick={handleClick} className="btn btn-primary">
          Buy
        </button>
      </div>
    </main>
  );
}
