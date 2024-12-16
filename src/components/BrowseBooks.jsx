import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BrowseBooks = () => {
  const booksData = useSelector((store) => store.book.items);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    setFilteredBooks(booksData);
  }, [booksData]);

  function handleChange(e) {
    const searchBook = e.target.value.toLowerCase();

    const filteredBook = booksData.filter((book) => {
      return (
        book.title.toLowerCase().includes(searchBook) ||
        book.author.toLowerCase().includes(searchBook)
      );
    });

    setFilteredBooks(filteredBook);
  }

  return (
    <>
      <div className="py-4 px-2 xs:px-8">
        <Link to={"/"}>
          <button className="text-center border-2 border-stone-300 hover:bg-cyan-500 hover:text-black transition-all flex gap-2 items-center w-[8rem] my-2 rounded-md  px-4 py-[3px] cursor-pointer">
            <FaArrowLeft />
            Back
          </button>
        </Link>
        <div className="flex justify-center m-4">
          <input
            className="border border-stone-300 p-1 pr-4 pl-4 w-[30%]"
            type="text"
            placeholder="Enter the Title or Author"
            onChange={handleChange}
          />
        </div>

        <h2 className="text-center text-2xl font-bold py-4 mt-4 underline">
          Browse Books
        </h2>
        <div className="box-border p-4 m-4 flex gap-6 flex-wrap py-2">
          {filteredBooks.map((data, index) => (
            <div
              key={index}
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

export default BrowseBooks;
