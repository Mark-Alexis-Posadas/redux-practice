import React from "react";

export default function Input() {
  return (
    <div className="flex flex-col">
      <label
        htmlFor=""
        className="text-base leading-relaxed text-gray-500 dark:text-gray-400"
      >
        name
      </label>
      <input type="text" placeholder="name" />
    </div>
  );
}
