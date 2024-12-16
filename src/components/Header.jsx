import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-stone-300 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img className="w-10" src="/library-logo.png" alt="Library Logo" />
          <Link to={"/"}>
            <h2 className="font-bold text-black text-2xl hover:text-cyan-500 hover:underline cursor-pointer">
              Online Library App
            </h2>
          </Link>
        </div>
        <div className="flex">
          <ul className="flex flex-row gap-x-10 gap-y-6 text-lg font-semibold">
            <Link to={"/"}>
              <li className="border-2 border-gray-900 rounded-lg px-4 py-2 hover:bg-cyan-500 hover:text-black transition-all cursor-pointer">
                Home
              </li>
            </Link>
            <Link to={"/browseBooks"}>
              <li className="border-2 border-gray-900 rounded-lg px-4 py-2 hover:bg-cyan-500 hover:text-black transition-all cursor-pointer">
                Browse Books
              </li>
            </Link>
            <Link to={"/addBook"}>
              <li className="border-2 border-gray-900 rounded-lg px-4 py-2 hover:bg-cyan-500 hover:text-black transition-all cursor-pointer">
                Add Books
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
