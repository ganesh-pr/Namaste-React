import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "../Constants";

const useRestaurant = (resId) => {
  const [restaurantDetail, setRestaurantDetail] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(RESTAURANT_MENU_API + resId);
    const json = await data.json();
    console.log(json);
    const restaurantInfo = json?.data?.cards?.[0]?.card?.card?.info;
    const restaurantMenuItems =
      json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
        ?.card?.card?.itemCards;
    setRestaurantDetail({ restaurantInfo, restaurantMenuItems });
  }

  return restaurantDetail;
};

export default useRestaurant;
