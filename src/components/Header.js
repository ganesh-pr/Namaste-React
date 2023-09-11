import Food_Villa_New from "../assets/img/Food_Villa_New.png";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/">
      <img
        src={Food_Villa_New}
        className="h-28 px-2"
        alt="Food"
        srcSet=""
        data-testid="logo"
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      <div className="flex justify-between bg-cyan-200 shadow-2xl shadow-blue-50 sm:bg-purple-200">
        <Title />
        <ul className="flex py-10">
          <li className="px-3">
            <Link className="hover:text-orange-600" to="/">
              Home
            </Link>
          </li>
          <li className="px-3">
            <Link className="hover:text-orange-600" to="/about">
              About Us
            </Link>
          </li>
          <li className="px-3">
            <Link className="hover:text-orange-600" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="px-3">
            <Link className="hover:text-orange-600" to="/instamart">
              Instamart
            </Link>
          </li>
          <li className="px-3">
            <Link
              className="hover:text-orange-600"
              to="/cart"
              data-testid="cart"
            >
              Cart - {cartItems.length} items
            </Link>
          </li>
        </ul>
        <h1 className="p-10 font-bold text-red-900">{user.name}</h1>

        <h1
          className="py-10"
          title="Your internet is active"
          data-testid="online-status"
        >
          {isOnline ? "✅" : "🔴"}
        </h1>
        {/*  Windows + dot for emoji */}
        {isLoggedIn ? (
          <button
            className="p-2 m-2 bg-blue-700 text-white hover:bg-cyan-300 rounded-xl"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="p-2 m-2 bg-blue-700 text-white hover:bg-cyan-300 rounded-xl"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        )}
      </div>
    </>
  );
};

/* Example
const Header = () => {
  const [title, setTitle] = useState("Food Villa");
  console.log("render");
  return (
    <>
      <h1>{title}</h1>
      <button onClick={() => setTitle("Food Villa 2")}>Change Title</button>
      <div className="header" style={{ backgroundColor: "yellow" }}>
        <Title />
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </>
  );
};
*/
export default Header;
