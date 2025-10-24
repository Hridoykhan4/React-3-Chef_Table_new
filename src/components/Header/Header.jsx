import { FaRegUserCircle } from "react-icons/fa";
import PropTypes from "prop-types";
const Header = ({ handleSearched }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="text-xl font-semibold">
          Healthy <span className="text-green-500">Bite</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="font-semibold text-gray-600 hover:bg-green-600 hover:text-white transition-colors duration-200 ease-in-out ">
              Home
            </a>
          </li>
          <li>
            <a className="font-semibold text-gray-600 hover:bg-green-600 hover:text-white transition-colors duration-200 ease-in-out ">
              Recipes
            </a>
          </li>
          <li>
            <a className="font-semibold text-gray-600 hover:bg-green-600 hover:text-white transition-colors duration-200 ease-in-out ">
              About
            </a>
          </li>
          <li>
            <a className="font-semibold text-gray-600 hover:bg-green-600 hover:text-white transition-colors duration-200 ease-in-out ">
              Search
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => handleSearched(e)}
            type="search"
            required
            placeholder="Search"
          />
        </label>
        <span className="bg-green-400 hidden sm:flex p-2 ml-2 rounded-full">
          <FaRegUserCircle className="text-2xl" />
        </span>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="font-semibold text-gray-600 hover:bg-green-600 hover:text-white transition-colors duration-200 ease-in-out ">
                Home
              </a>
            </li>
            <li>
              <a className="font-semibold text-gray-600 hover:bg-green-600 hover:text-white transition-colors duration-200 ease-in-out ">
                Recipes
              </a>
            </li>
            <li>
              <a className="font-semibold text-gray-600 hover:bg-green-600 hover:text-white transition-colors duration-200 ease-in-out ">
                About
              </a>
            </li>
            <li>
              <a className="font-semibold text-gray-600 hover:bg-green-600 hover:text-white transition-colors duration-200 ease-in-out ">
                Search
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  handleSearched: PropTypes.func,
};

export default Header;
