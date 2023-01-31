import Food_Villa_New from "../../Food_Villa_New.png";

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
  return (
    <div className="header" style={{ backgroundColor: "yellow" }}>
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

export default Header;
