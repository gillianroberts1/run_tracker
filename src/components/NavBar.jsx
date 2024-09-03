import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-[#242424] py-4 md:p-4 fixed top-0 left-0 w-full z-10">
      <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center items-center mt-4 md:mt-0">
        <li>
          <Link
            to="/"
            className="bg-blue-500 text-white py-2 px-6 w-36 h-12 flex items-center justify-center rounded-full hover:bg-blue-800 transition duration-300 text-center"
          >
            RT Home
          </Link>
        </li>
        <li>
          <Link
            to="/record"
            className="bg-green-500 text-white py-2 px-6 w-36 h-12 flex items-center justify-center rounded-full hover:bg-green-600 transition duration-300 text-center"
          >
            Record Run
          </Link>
        </li>
        <li>
          <Link
            to="/display"
            className="bg-red-500 text-white py-2 px-6 w-36 h-12 flex items-center justify-center rounded-full hover:bg-red-600 transition duration-300 text-center"
          >
            Display Runs
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
