import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdThumbUp } from "react-icons/md";

export default function Card({ result }) {
  return (
    <div className="card max-w-48 max-h-auto mb-8  shadow-xl mx-4 bg-slate-400 dark:bg-slate-700 hover:opacity-75 cursor-pointer ">
      <Link href={`/movie/${result.id}`}>
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.poster_path || result.backdrop_path
            }`}
            alt={result.title}
            width={300}
            height={200}
            className="sm:rounded-sm"
          />
          <div className="card-body flex flex-col pb-1 h-full">
            <h2 className="card-title line-clamp-2 ">
              {result.title || result.name}
            </h2>
            <p className="">{result.release_date || result.first_air_date}</p>
            <div className="flex items-center mt-auto">
              <MdThumbUp className="mt-0 mr-1" />
              <p>{result.vote_count}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
