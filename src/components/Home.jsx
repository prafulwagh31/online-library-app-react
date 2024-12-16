import React from "react";
import booksData from "../utils/BookData";
import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    "Fiction",
    "Science Fiction",
    "Romance",
    "Adventure",
    "Historic",
    "Fantasy",
    "Horror",
  ];

  const popularBooks = booksData.filter((book) => book.rating >= 4.3);

  return (
    <>
      <div className="px-2">
        <h2 className="py-4 text-lg">Book Category:- </h2>
        <div className="flex gap-4 flex-wrap">
          {categories.map((data, index) => (
            <Link key={index} to={`/books/${data}`}>
              <button className="font-semibold border-2 rounded-lg px-4 my-4 border-stone-300 hover:bg-cyan-500 hover:text-black transition-all">
                {data}
              </button>
            </Link>
          ))}
        </div>
        <h2 className="text-center text-2xl font-bold py-4 mt-4 underline">
          Popular Books
        </h2>
        <div className="box-border p-4 m-4 flex gap-6 flex-wrap py-2">
          {popularBooks.map((data) => (
            <div
              key={data.id}
              className="flex flex-col w-[300px] h-[580px] m-5 rounded-md shadow-xl shadow-gray-300"
            >
              <img className="w-[19rem] h-[20rem]" src={data.image} alt="" />
              <h2 className="text-lg m-3 text-center">{data.title}</h2>
              <h3 className="font-semibold text-center">{data.author}</h3>
              <p className="text-justify text-wrap m-4">
                {data.description.length > 80
                  ? `${data.description.slice(0, 84)}..`
                  : data.description}
              </p>
              <Link
                to={`/book/${data.id}`}
                className="py-2 text-center border-4 border-stone-300 m-4 font-bold hover:bg-cyan-500 hover:text-black transition-all"
              >
                <button>View Book</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
