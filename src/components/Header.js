import Food_Villa_New from "../assets/img/Food_Villa_New.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
  return (
    <a href="/">
      <img src={Food_Villa_New} className="h-28 px-2" alt="Food" srcSet="" />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <>
      <div className="flex justify-between bg-cyan-200 shadow-2xl shadow-blue-50 sm:bg-emerald-200">
        <Title />
        <ul className="flex py-10">
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-3">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
        <h1 className="py-10">{isOnline ? "✅" : "🔴"}</h1>
        {isLoggedIn ? (
          <button
            className="p-2 m-2 bg-purple-600 hover:bg-cyan-300 rounded-xl"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="p-2 m-2 bg-purple-600 hover:bg-cyan-300 rounded-xl"
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
