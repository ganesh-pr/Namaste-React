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
    setRestaurantDetail(json.data);
  }

  return restaurantDetail;
};

export default useRestaurant;
