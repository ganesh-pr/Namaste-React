import { IMG_CDN_URL } from "../Constants";

const FoodItem = ({ name, imageId, price }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-purple-50">
      <img src={IMG_CDN_URL + imageId} alt="Image" />
      <h2 className="font-bold text-xl">{name}</h2>
      <h4>{price / 100} INR</h4>
      {/* <h4>{user.email}</h4>
      <h5>
        {contextUser.name} - {contextUser.email}
      </h5> */}
    </div>
  );
};

export default FoodItem;
