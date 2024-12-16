import React from "react";
import { useParams, Link } from "react-router-dom";
import booksData from "../utils/BookData";
import { FaArrowLeft } from "react-icons/fa";

const FilterBookCategory = () => {
  const params = useParams();
  const filteredBooks = booksData.filter(
    (book) => book.category == params.categories
  );

  return (
    <>
      <div className="px-3 py-4">
        <Link to={"/"}>
          <button className="text-center border-2 border-stone-300 hover:bg-cyan-500 hover:text-black transition-all flex gap-2 items-center w-[8rem] my-2 rounded-md  px-4 py-[3px] cursor-pointer">
            <FaArrowLeft />
            Back
          </button>
        </Link>
        <h2 className="font-bold text-center text-xl">
          Category:- {params.categories}
        </h2>
        <div className="box-border p-4 m-4 flex gap-6 flex-wrap py-2">
          {filteredBooks.map((data) => (
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

export default FilterBookCategory;
