import Table from "./Table";
import Filter from "./Filter";
import { useState } from "react";

export default function Products(props) {
  const {
    products,
    categories,
    handleCatChange,
    selectedCategory,
    handleAddToCart,
    handleSelectCategory,
    arrOfPages,
    handlePageChange,
    currentPage,
    handleSearch,
    search,
  } = props;

  return (
    <div className="flex flex-col mt-2 items-center w-full">
      <Filter
        categories={categories}
        handleCatChange={handleCatChange}
        selectedCategory={selectedCategory}
        handleSelectCategory={handleSelectCategory}
        handleSearch={handleSearch}
        search={search}
      />
      <Table
        products={products}
        handleAddToCart={handleAddToCart}
        arrOfPages={arrOfPages}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        search={search}
      />
    </div>
  );
}
