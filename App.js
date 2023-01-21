import { createElement as ce, useState } from "react";
import ReactDOM from "react-dom/client";
import Food_Villa_New from "./Food_Villa_New.png";

/* 
      Header
        - Logo
        - Nav Items
        - Cart
      Body
        - Search bar
        - Restaurant list
          - REstaurant card
            - Image
            - Name
            - Ratings
            - Cuisines
      Footer
        - links
        - Copyright
      */

const Title = () => <img src="Food" alt="" srcset="" />;

const HeaderComponent5 = () => {
  return (
    <div className="header">
      <Title />
      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const AppLayOut = () => {
  return <Title />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent5 />);
