import { useState } from "react";
import "./App.css";
import Item from "./components/Item";

function App() {
  const [data, setdata] = useState([
    { name: "Burger", count: 3 },
    { name: "Pizza", count: 5 },
    { name: "Cola", count: 2 },
  ]);

  const handleIncrement = (p) => {
    const newArray = [...data];
    const newIndex = newArray.findIndex((e) => e.name === p);
    const newObject = { ...newArray[newIndex] };
    newObject.count++;
    newArray[newIndex] = newObject;
    setdata(newArray);
  };
  const handleDecrement = (p) => {
    const newArray = [...data];
    const newIndex = newArray.findIndex((e) => e.name === p);
    const newObject = { ...newArray[newIndex] };
    newObject.count--;
    newArray[newIndex] = newObject;
    setdata(newArray);
  };
  const handleDelete = (p) => {
    const newArray = data.filter((e) => e.name !== p);
    setdata(newArray);
  };
  const handlereset = () => {
    const newData = data.map((e) => {
      let newItem = { ...e, count: 0 };
      return newItem;
    });
    setdata(newData);
  };
  return (
    <>
      {data.map((ele) => (
        <Item
          key={ele.name}
          item={ele}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleDelete={handleDelete}
        />
      ))}
      <button onClick={handlereset}>Reset</button>
    </>
  );
}

export default App;
