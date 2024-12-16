import React, { useState } from "react";
import "./AddBook.css";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/bookSlice";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    image: "",
    category: "",
    rating: 0,
    description: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Book title is required.";
    if (!formData.author.trim()) newErrors.author = "Book author is required.";
    if (!formData.publishedYear.trim())
      newErrors.publishedYear = "Book published year is required.";
    if (!formData.image.trim()) newErrors.image = "Book image url is required.";
    if (!formData.category.trim())
      newErrors.category = "Book category is required.";
    if (!formData.rating || formData.rating < 1 || formData.rating > 5) {
      newErrors.rating = "Book rating must be between 1 and 5.";
    }
    if (!formData.description.trim())
      newErrors.description = "Book description is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      let data = { ...formData, id: Math.random() };
      dispatch(addItem(data));
      navigate("/browseBooks");
    }
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
        <div className="container">
          <h2 className="text-center text-2xl font-bold py-4 mt-4 underline">
            Add Books
          </h2>
          <form
            onSubmit={handleSubmit}
            className="border-2 border-gray-500 rounded-lg shadow-lg w-[100%] sm:w-2/3 p-4 mx-auto flex flex-col gap-4"
          >
            <h2 className="font-bold text-xl text-center underline">
              Book Details
            </h2>
            <div>
              <input
                type="text"
                name="title"
                placeholder="Book Title"
                onChange={handleChange}
                className="border-2 border-slate-300 rounded-lg shadow-md p-2 w-[100%] focus:outline-none mx-auto"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="author"
                placeholder="Book Author"
                onChange={handleChange}
                className="border-2 border-slate-300 rounded-lg shadow-md p-2 w-[100%] focus:outline-none mx-auto"
              />
              {errors.author && (
                <p className="text-red-500 text-sm">{errors.author}</p>
              )}
            </div>
            <div>
              <input
                type="number"
                name="publishedYear"
                placeholder="Book Publish"
                onChange={handleChange}
                className="remove-arrow border-2 border-slate-300 rounded-lg shadow-md p-2 w-[100%] focus:outline-none mx-auto"
              />
              {errors.publishedYear && (
                <p className="text-red-500 text-sm">{errors.publishedYear}</p>
              )}
            </div>
            <div>
              <input
                type="url"
                name="image"
                placeholder="Book Image URL"
                onChange={handleChange}
                className="border-2 border-slate-300 rounded-lg shadow-md p-2 w-[100%] focus:outline-none mx-auto"
              />
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image}</p>
              )}
            </div>
            <div>
              <select
                name="category"
                onChange={handleChange}
                className="border-2 border-slate-300 rounded-lg shadow-md p-2 w-[100%] focus:outline-none mx-auto"
              >
                <option value="">Select Book Category</option>
                <option value="Fiction">Fiction</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Romance">Romance</option>
                <option value="Adventure">Adventure</option>
                <option value="Historic">Historic</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm">{errors.category}</p>
              )}
            </div>
            <div>
              <input
                type="number"
                step="0.01"
                name="rating"
                placeholder="Book Rating"
                onChange={handleChange}
                className="remove-arrow border-2 border-slate-300 rounded-lg shadow-md p-2 w-[100%] focus:outline-none mx-auto"
              />
              {errors.rating && (
                <p className="text-red-500 text-sm">{errors.rating}</p>
              )}
            </div>
            <div>
              <textarea
                rows={4}
                name="description"
                placeholder="Book Description"
                onChange={handleChange}
                className="remove-arrow border-2 border-slate-300 rounded-lg shadow-md p-2 w-[100%] focus:outline-none mx-auto"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">{errors.description}</p>
              )}
            </div>
            <button
              type="submit"
              className="remove-arrow border-2 border-stone-300 rounded-lg shadow-md p-2 w-[100%] focus:outline-none mx-auto font-bold hover:bg-cyan-500 hover:text-black"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBook;
