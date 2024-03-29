"use client";
import React from "react";

export default function Error({ error, reset }) {
  React.useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong, please try again</h1>
      <button
        className="hover:text-amber-600 bg-red-600 px-1 py-2 rounded-xl"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
