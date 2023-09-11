import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, RESTAURANT_MENU_API } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  // How to read a dynamic URL params
  const params = useParams();
  const { id } = useParams();
  //console.log(params);

  const restaurantDetail = useRestaurant(id);
  const dispatch = useDispatch();
  console.log(restaurantDetail);
  //console.log(dispatch);
  //console.log(typeof dispatch);
  // const handleAddItem = () => {
  //   dispatch(addItem("Grapes"));
  // };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

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
      <div>
        {/* <button
          className="m-2 p-2 bg-green-300"
          onClick={() => handleAddItem()}
        >
          Add Item
        </button> */}
      </div>
      <div className="mx-auto mt-10">
        <h1 className="text-xl font-bold">Menu</h1>
        <ul className="list-disc" data-testid="menu">
          {restaurantDetail?.restaurantMenuItems &&
            Object.values(restaurantDetail?.restaurantMenuItems).map((item) => {
              const itemInfo = item.card.info;
              return (
                <>
                  <li key={itemInfo.id}>{itemInfo.name}</li>
                  <button
                    className="p-1 bg-green-50"
                    onClick={() => addFoodItem(itemInfo)}
                    key={itemInfo.id + "- button"}
                    data-testid="add-btn"
                  >
                    AddItem
                  </button>
                </>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
