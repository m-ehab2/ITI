import { Link } from "react-router-dom";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useLocation } from "react-router-dom";

export default function Header(props) {
  const { pathname } = useLocation();
  const { inCart } = props;
  return (
    <div className="flex items-center justify-between rounded-md p-2 px-32 py-5  border-b-2 h-20 border-orange-300">
      <Link
        to={"/"}
        className=" cursor-pointer text-orange-500 flex gap-2 items-center w-40"
      >
        <FastfoodIcon className=" " fontSize="large" />
        <span className="text-2xl">Fast Food</span>
      </Link>
      <div className="flex gap-16 h-full">
        <Link
          to={"/"}
          className={`font-semibold text-xl cursor-pointer text-black p-1 rounded-sm transition-all hover:text-orange-400 ${
            pathname === "/" && "text-orange-600 border-b-4 border-orange-500 "
          }`}
        >
          Home
        </Link>
        <Link
          to={"/products"}
          className={`font-semibold text-xl cursor-pointer text-black p-1 rounded-sm transition-all hover:text-orange-400  ${
            pathname === "/products" &&
            "text-orange-600 border-b-4 border-orange-500 "
          }`}
        >
          Products
        </Link>
        <Link
          to={"/about"}
          className={`font-semibold text-xl cursor-pointer text-black p-1 rounded-sm transition-all hover:text-orange-400  ${
            pathname === "/about" &&
            "text-orange-600 border-b-4 border-orange-500 "
          }`}
        >
          About
        </Link>
      </div>
      <div className="cartContainer w-40 flex justify-end relative z-10 ">
        <Link
          to={"/cart"}
          className="font-semibold text-xl cursor-pointer text-orange-500"
        >
          <ShoppingCartIcon fontSize="large" />
        </Link>{" "}
        {inCart.length ? (
          <div className="absolute -right-3 -top-3 text-white bg-orange-500 border rounded-full w-7 h-7 text-center align-middle">
            {inCart.length}
          </div>
        ) : null}
      </div>
    </div>
  );
}
