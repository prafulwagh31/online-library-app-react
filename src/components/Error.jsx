import { Link, useRouteError } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Error() {
  const error = useRouteError();

  return (
    <>
      <div className="py-4 px-2 xs:px-8 text-center">
        <h2 className="text-5xl font-bold py-3">{error.status}</h2>
        <h2 className="text-xl">{error.data}</h2>
        <Link to={"/"}>
          <button className="text-center border-2 border-stone-300 hover:bg-cyan-500 hover:text-black transition-all flex gap-2 items-center w-[8rem] my-2 rounded-md  px-4 py-[3px] cursor-pointer mx-auto">
            <FaArrowLeft />
            Back
          </button>
        </Link>
      </div>
    </>
  );
}

export default Error;
