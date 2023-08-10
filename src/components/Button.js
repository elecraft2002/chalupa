import React from "react";

export default function Button({ children, type = "primary" }) {
  if (type == "primary")
    return (
      <button className="rounded bg-slate-200 px-9 py-2 text-slate-900 hover:scale-105 transition-all">
        {children}
      </button>
    );
  if (type == "secondary")
    return (
      <button className="rounded border border-secondary px-9 py-2 hover:scale-105 transition-all hover:bg-secondary hover:text-primary">
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
