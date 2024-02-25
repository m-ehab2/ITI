import "./App.css";
import Button from "./components/Button";
// import { range } from "./utils/range";
import ToastWrapper from "./components/ToastWrapper";
import { toast } from "./services/toast";
import { Trial2, Trial1 } from "./components/Trial";
function App() {
  return (
    <>
      <div>
        <Button onClick={() => toast("Toast with default message", "default")}>
          Default
        </Button>
        <Button onClick={() => toast("Toast with confirm message", "confirm")}>
          Confirm ✔️
        </Button>
        <Button onClick={() => toast("Toast with cancel message", "cancel")}>
          Cancel ❌
        </Button>
      </div>
      <ToastWrapper />
      <Trial1 />
    </>
  );
}
// const range1 = range(0, 10, 3);
// const range2 = range(0, 10, 2);

// console.log(range1.next());
// console.log(range1.next());
// console.log(range1.next());
// console.log(range1.next());
// console.log(range1.next());

// for (const iterator of range2) {
//   console.log(iterator);
// }
// console.log([...range(0, 10, 1), 15]);

export default App;
