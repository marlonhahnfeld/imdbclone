import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdThumbUp } from "react-icons/md";

export default function Card({ result }) {
  return (
    <div className="card max-w-48 max-h-auto mb-8 bg-base-100 shadow-xl mx-4 bg-slate-400 dark:bg-slate-700 hover:opacity-75 cursor-pointer ">
      <Link href={`/movie/${result.id}`}>
        <figure>
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.poster_path || result.backdrop_path
            }`}
            alt={result.title}
            width={300}
            height={200}
            className="sm:rounded-sm"
          />
        </figure>
        <div className="card-body flex justify-center pb-1">
          <h2 className="card-title">{result.title || result.name}</h2>
          <div className="flex flex-col flex-end items-center">
            <p className="">
              {result.release_date || result.first_air_date}

              <MdThumbUp className="mt-3" />
              {result.vote_count}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
