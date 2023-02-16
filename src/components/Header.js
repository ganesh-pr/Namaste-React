import Food_Villa_New from "../assets/img/Food_Villa_New.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a href="/">
      <img
        src={Food_Villa_New}
        width="80px"
        height="80px"
        alt="Food"
        srcSet=""
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="header" style={{ backgroundColor: "yellow" }}>
        <Title />
        <ul className="nav-items">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
        </ul>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
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
