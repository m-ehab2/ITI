import { CreateStore } from "../services/store";
import { useEffect, useState } from "react";

const useStore = CreateStore(0);

export function Trial1() {
  const [state, setState] = useState(0);
  const [count, setCount] = useStore();

  useEffect(() => {
    useStore.getObserver().subscribe(count);
    useStore.getObserver().subscribe(setState);
  }, []);

  return (
    <div className="flex p-2 gap-2 w-32 justify-between mx-auto bg-gray-100 rounded shadow-sm items-center">
      <button
        className="bg-red-300 text-slate-800 font-bold rounded px-3"
        onClick={() => setCount(count() - 1)}
      >
        -
      </button>
      <div>{count()}</div>
      <Trial2 />
    </div>
  );
}

export function Trial2() {
  const [state, setState] = useState(0);
  const [count, setCount] = useStore();

  useEffect(() => {
    useStore.getObserver().subscribe(count);
    useStore.getObserver().subscribe(setState);
  });

  return (
    <>
      <button
        className="bg-green-300 text-slate-800 font-bold rounded px-3"
        onClick={() => setCount(count() + 1)}
      >
        +
      </button>
    </>
  );
}
