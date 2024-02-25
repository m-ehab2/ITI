import React, { useEffect } from "react";

import { toastType } from "../services/toast";
export default function Toast({ id, variant, text, onClose }: toastType) {
  useEffect(() => {
    setTimeout(() => {
      onClose(id);
    }, 4000);
  });
  return (
    <div
      className={`font-sans p-3 relative rounded  w-56 text-wrap text-left ${
        variant === "default"
          ? "bg-slate-400"
          : variant === "confirm"
          ? "bg-green-500"
          : variant === "cancel"
          ? "bg-red-500"
          : ""
      }`}
    >
      {text}
      <button
        onClick={() => onClose(id)}
        className="absolute right-2 text-white font-bold top-0"
      >
        x
      </button>
    </div>
  );
}
