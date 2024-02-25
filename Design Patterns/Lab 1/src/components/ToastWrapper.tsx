import React, { useEffect, useState } from "react";
import Toast from "./Toast";
import { ToastEvents, observable, toastType } from "../services/toast";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function ToastWrapper() {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  const onClose = (id: number): void => {
    setToasts((e) => e.filter((toast) => toast.id !== id));
  };

  const [toasts, setToasts] = useState<toastType[]>([]);

  useEffect(() => {
    const unsubscribe = observable.subscribe((data: ToastEvents) =>
      setToasts((pre) => [...pre, data])
    );
    if (toasts.length > 8) {
      const clonedArray = [...toasts];
      clonedArray.shift();
      setToasts(clonedArray);
    }
    return unsubscribe;
  }, [toasts]);

  return (
    <div ref={parent} className="flex flex-col items-center mt-3 gap-2">
      {toasts.map((e) => (
        <Toast
          variant={e.variant}
          text={e.text}
          id={e.id}
          key={e.id}
          onClose={() => onClose(e.id)}
        />
      ))}
      {toasts.length ? (
        <button
          className=" bg-black rounded-md text-white p-3 px-5"
          onClick={() => setToasts([])}
        >
          Dismiss All
        </button>
      ) : null}
    </div>
  );
}
