import React from "react";
import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="flex flex-wrap justify-center max-w-6xl mx-auto py-4">
      {results.map((result) => (
        <Card
          key={result.id}
          result={result}
          className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 p-4"
        />
      ))}
    </div>
  );
}
