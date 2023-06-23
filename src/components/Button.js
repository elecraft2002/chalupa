import React from "react";

export default function Button({ children, type = "primary" }) {
  if (type == "primary")
    return (
      <button className="rounded bg-orange-500 px-9 py-2 text-white">
        {children}
      </button>
    );
  if (type == "secondary")
    return (
      <button className="rounded border border-slate-800 px-9 py-2 bg-glass-200">
        {children}
      </button>
    );
  if (type == "tertiary")
    return (
      <button className="underline">
        {children}
      </button>
    );
}
