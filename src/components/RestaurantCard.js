import { IMG_CDN_URL } from "../Constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  user,
}) => {
  const { user: contextUser } = useContext(UserContext);
  console.log("test");
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-purple-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="Rest" />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{user.email}</h4>
      <h5>
        {contextUser.name} - {contextUser.email}
      </h5>
    </div>
  );
};

export default RestaurantCard;
