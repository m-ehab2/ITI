import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link } from "react-router-dom";
export default function Table(props) {
  const {
    products,
    handleAddToCart,
    arrOfPages,
    handlePageChange,
    currentPage,
    search,
  } = props;
  return (
    <div className="w-full flex flex-col ">
      <table className=" border border-orange-500 rounded-full mx-32 ">
        <thead>
          <tr className="bg-orange-500 text-white">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4"></th>
            <th className="py-2 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => {
            return (
              <tr key={p.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="py-2 px-4 text-center">{p.name}</td>
                <td className="py-2 px-4 text-center">{p.price}</td>
                <td className="py-2 px-4 text-center">
                  <div onClick={() => handleAddToCart(p.id)}>
                    <AddShoppingCartIcon
                      fontSize="large"
                      className={`cursor-pointer  text-orange-500  hover:bg-orange-500 hover:text-white rounded-full p-1 transition-all ${
                        p.inCart ? "bg-orange-500 text-white" : ""
                      }`}
                    />
                  </div>
                </td>
                <td className="py-2 px-4 text-center">
                  <Link to={`/product/${p.id}`}>
                    <OpenInNewIcon className="text-orange-500" />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex self-center gap-4 my-4">
        {arrOfPages.map((e) => (
          <div
            className={` text-white p-2 w-8 h-10 text-center cursor-pointer hover:bg-orange-600 ${
              e === currentPage ? "bg-orange-600" : "bg-orange-400"
            }`}
            key={e}
            onClick={() => handlePageChange(e)}
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
}
