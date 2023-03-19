import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, RESTAURANT_MENU_API } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  // How to read a dynamic URL params
  const params = useParams();
  const { id } = useParams();
  console.log(params);

  const restaurantDetail = useRestaurant(id);

  if (!restaurantDetail) {
    return <Shimmer />;
  }

  return !restaurantDetail ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="m-10">
        {/* <h1 className="font-bold text-2xl">Restaurant Id: {id}</h1> */}
        <h2 className="font-bold text-xl">
          {restaurantDetail?.restaurantInfo?.name}
        </h2>
        <img
          className="my-5"
          src={
            IMG_CDN_URL + restaurantDetail?.restaurantInfo?.cloudinaryImageId
          }
        />
        <h2 className="text-xl">{restaurantDetail?.restaurantInfo?.city}</h2>
        <h2 className="text-xl">
          {restaurantDetail?.restaurantInfo?.avgRating} Stars
        </h2>
        <h2 className="text-xl">
          {restaurantDetail?.restaurantInfo?.costForTwo / 100} INR
        </h2>
      </div>
      <div className="mx-auto mt-10">
        <h1 className="text-xl font-bold">Menu</h1>
        <ul className="list-disc">
          {restaurantDetail?.restaurantMenuItems &&
            Object.values(restaurantDetail?.restaurantMenuItems).map(
              ({
                card: {
                  info: { id, name },
                },
              }) => (console.log("item", id), (<li key={id}>{name}</li>))
            )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
