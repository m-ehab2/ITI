import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { useState } from "react";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import { getRange } from "./utils/range";
import Product from "./components/Product/Product";

function App() {
  // Setting States
  const [data, setData] = useState([
    {
      id: 1,
      categoryId: 1,
      inCart: false,
      name: "Small Burger",
      price: 15,
      count: 0,
    },
    {
      id: 2,
      categoryId: 1,
      inCart: false,
      name: "Cheeseburger",
      price: 20,
      count: 0,
    },
    {
      id: 3,
      categoryId: 1,
      inCart: false,
      name: "Double Burger",
      price: 25,
      count: 0,
    },
    {
      id: 4,
      categoryId: 1,
      inCart: false,
      name: "Veggie Burger",
      price: 18,
      count: 0,
    },
    {
      id: 5,
      categoryId: 1,
      inCart: false,
      name: "Bacon Burger",
      price: 22,
      count: 0,
    },
    {
      id: 6,
      categoryId: 2,
      inCart: false,
      name: "Small Fries",
      price: 8,
      count: 0,
    },
    {
      id: 7,
      categoryId: 2,
      inCart: false,
      name: "Medium Fries",
      price: 10,
      count: 0,
    },
    {
      id: 8,
      categoryId: 2,
      inCart: false,
      name: "Large Fries",
      price: 12,
      count: 0,
    },
    {
      id: 9,
      categoryId: 3,
      inCart: false,
      name: "Soda",
      price: 3,
      count: 0,
    },
    {
      id: 10,
      categoryId: 3,
      inCart: false,
      name: "Milkshake",
      price: 5,
      count: 0,
    },
  ]);
  const [categories, setCategories] = useState([
    { id: 0, name: "All" },
    { id: 1, name: "Burgers" },
    { id: 2, name: "Fries" },
    { id: 3, name: "Beverages" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  // Function to handle incrementing product count
  const handleIncrement = (id) => {
    const newArray = [...data];
    const newIndex = newArray.findIndex((e) => e.id === id);
    const newObject = { ...newArray[newIndex] };
    newObject.count++;
    newArray[newIndex] = newObject;
    setData(newArray);
  };

  // Functions for decrementing, deleting, adding to cart, resetting, selecting category, handling page change, and searching
  const handleDecrement = (id) => {
    const newArray = [...data];
    const newIndex = newArray.findIndex((e) => e.id === id);
    const newObject = { ...newArray[newIndex] };
    newObject.count > 1 ? newObject.count-- : newObject.count;
    newArray[newIndex] = newObject;
    setData(newArray);
  };

  const handleDelete = (id) => {
    const newArray = [...data];
    const newIndex = newArray.findIndex((e) => e.id === id);
    const newObject = { ...newArray[newIndex] };
    newObject.inCart = false;
    newArray[newIndex] = newObject;
    setData(newArray);
  };

  const handleAddToCart = (id) => {
    const newArray = [...data];
    const newIndex = newArray.findIndex((e) => e.id === id);
    const newObject = { ...newArray[newIndex] };
    newObject.inCart = !newObject.inCart;
    newObject.count = 1;
    newArray[newIndex] = newObject;
    setData(newArray);
  };

  const handleReset = () => {
    const newData = data.map((e) => {
      let newItem = { ...e, count: 1 };
      return newItem;
    });
    setData(newData);
  };

  const handleSelectCategory = (id) => {
    setSelectedCategory(id);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (query) => {
    setSearch(query);
    setCurrentPage(1);
  };

  // Filter products that are in the cart
  const inCart = data.filter((e) => e.inCart);

  // Filter products based on selected category
  const categoryData = selectedCategory
    ? data.filter((e) => e.categoryId === selectedCategory)
    : [...data];

  // Filter products based on search query
  const arrayToSearch = search
    ? categoryData.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase())
      )
    : categoryData;

  // Calculate pagination parameters
  const itemsPerPage = 3;
  const totalNumberOfItems = arrayToSearch.length;
  const numberOfPages = Math.ceil(totalNumberOfItems / itemsPerPage);
  const arrOfPages = getRange(numberOfPages);
  const startIndex = (currentPage - 1) * itemsPerPage;
  console.log(startIndex);
  // Returning paginated array
  const pagintadArray = arrayToSearch.slice(startIndex, startIndex + 3);
  console.log(pagintadArray);
  // Rendering Components
  return (
    <div className="h-screen flex flex-col">
      <BrowserRouter>
        <Header inCart={inCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <Products
                products={pagintadArray}
                categories={categories}
                selectedCategory={selectedCategory}
                handleAddToCart={handleAddToCart}
                handleSelectCategory={handleSelectCategory}
                arrOfPages={arrOfPages}
                handlePageChange={handlePageChange}
                currentPage={currentPage}
                handleSearch={handleSearch}
                search={search}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/cart"
            element={
              <Cart
                inCart={inCart}
                handleDecrement={handleDecrement}
                handleDelete={handleDelete}
                handleIncrement={handleIncrement}
                handleReset={handleReset}
              />
            }
          />
          <Route path="/product/:id" element={<Product data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
