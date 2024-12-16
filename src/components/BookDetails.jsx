import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const BookDetails = () => {
  const booksData = useSelector((store) => store.book.items);
  const params = useParams();
  const bookDeatils = booksData.filter((item) => item.id == params.id)[0];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-orange-500" />);
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} className="text-orange-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-orange-500" />);
      }
    }
    return stars;
  };

  return (
    <>
      <div className="py-4 px-2 xs:px-8">
        <Link to={"/"}>
          <button className="text-center border-2 border-stone-300 hover:bg-cyan-500 hover:text-black transition-all flex gap-2 items-center w-[8rem] my-2 rounded-md  px-4 py-[3px] cursor-pointer">
            <FaArrowLeft />
            Back
          </button>
        </Link>
        <h2 className="text-center text-2xl font-bold py-4 mt-4 underline">
          Book Details
        </h2>
        <div className="border-2 border-stone-300 flex gap-4 flex-col sm:flex-row sm:w-[40rem] shadow-lg py-4 px-4 sm:px-8 mx-auto">
          <img
            src={bookDeatils.image}
            className="w-[14rem] h-[19rem] object-cover border-4 border-gray-400"
            alt=""
          />
          <div>
            <h2 className="text-xl font-bold">
              <span className="font-bold">Title:-</span> {bookDeatils.title}
            </h2>
            <h3 className="font-semibold py-2">
              <span className="font-bold">Author:-</span> {bookDeatils.author}
            </h3>
            <p className="font-semibold py-2">
              <span className="font-bold">Publish Date:-</span>{" "}
              {bookDeatils.publishedYear}
            </p>
            <h3 className="font-semibold py-2">
              <span className="font-bold">Book Category:-</span>{" "}
              {bookDeatils.category}
            </h3>
            <p className="font-semibold py-2">
              <span className="font-bold">Description:-</span>{" "}
              {bookDeatils.description}
            </p>
            <h3 className="font-semibold py-2 flex flex-row items-center">
              <span className="font-bold">Rating:-</span>&nbsp;{" "}
              {bookDeatils.rating}
              <span className="ml-2 flex">
                {renderStars(bookDeatils.rating)}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
