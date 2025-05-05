import React from "react";

export function Button({ children, className = "", asChild = false, ...props }) {
  const Element = asChild ? "span" : "button";

  return (
    <Element
      className={`px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition ${className}`}
      {...props}
    >
      {children}
    </Element>
  );
}
