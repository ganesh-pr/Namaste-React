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
    <div className="detail">
      <div>
        <h1>Restaurant Id: {id}</h1>
        <h2>{restaurantDetail?.name}</h2>
        <img src={IMG_CDN_URL + restaurantDetail?.cloudinaryImageId} />
        <h2>{restaurantDetail?.area}</h2>
        <h2>{restaurantDetail?.city}</h2>
        <h2>{restaurantDetail?.avgRating} Stars</h2>
        <h2>{restaurantDetail?.costForTwo}</h2>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restaurantDetail &&
            restaurantDetail?.menu &&
            Object.values(restaurantDetail?.menu?.items).map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
