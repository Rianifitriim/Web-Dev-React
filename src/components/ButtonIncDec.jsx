import React from "react";

export default function IncDec({ children }) {
  return (
    <div>
      <button class="hover:bg-B5C5F2 font-bold py-2 px-4 rounded border- border-4">
        {children}
      </button>
    </div>
  );
}
