"use client";
import Link from "next/link";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function LinkWithParams({ title, param }) {
  const SearchParams = useSearchParams();
  const genre = SearchParams.get("genre");

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-400 rounded-lg"
            : ""
        }`}
        href={"/?genre=" + param}
      >
        {title}
      </Link>
    </div>
  );
}

export default function NavbarItem({ title, param }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LinkWithParams title={title} param={param} />
    </Suspense>
  );
}
