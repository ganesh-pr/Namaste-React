import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <h4 className="font-bold text-base p-5 m-5">
      This site is developed by {user.name} - {user.email}
    </h4>
  );
};

export default Footer;
