import {
  RestaurantListData,
  RESTAURANT_FETCH_ERROR,
  SWIGGY_API_URL,
} from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterRestaurantData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="flex flex-wrap h-auto ">
      {restaurants.map((res) => {
        return (
          <Link to={"restaurant/" + res?.data.id} key={res?.data.id}>
            <RestaurantCard {...res?.data} />
          </Link>
        );
      })}
    </div>
  );
};

const Body = () => {
  // let searchTxt = "KFC"; - Creating a local variable in JS
  const [allRestaurants, setAllRestaurants] = useState([]); //Creating a local state variable in react
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); //Creating a local state variable in react
  const [searchTxt, setSearchTxt] = useState("Kwality");
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   console.log("search is updated");
  // }, [searchTxt]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(SWIGGY_API_URL);
    console.log(data);
    let list = await data.json();
    console.log(list);
    if (list.statusCode !== 1) {
      setAllRestaurants(list?.data?.cards?.[2]?.data?.data?.cards);
      setFilteredRestaurants(list?.data?.cards?.[2]?.data?.data?.cards);
    } else {
      setErrorMessage(RESTAURANT_FETCH_ERROR);
    }
  }

  // const isOnline = useOnline();

  // if (!isOnline) {
  //   return <h1>🔴 Offline, please check your internet connection!!</h1>;
  // }

  console.log("render");

  //Avoid rendering
  //if (!allRestaurants) return null;

  // Conditional rendering using ternary operator
  return errorMessage ? (
    <h4 class="error-message">{errorMessage}</h4>
  ) : allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container py-5 px-3 my-4 bg-emerald-200">
        <input
          type="text"
          name="Search"
          id="Search"
          className="focus:bg-cyan-300"
          value={searchTxt}
          onChange={(e) => {
            //searchTxt = e.target.value;
            setSearchTxt(e.target.value);
          }}
        />
        {
          // Expression
          ((a = 10), console.log(a))
        }
        <button
          className="p-2 m-2 bg-purple-600 hover:bg-cyan-300 rounded-xl"
          onClick={() => {
            console.log(searchTxt);
            const filteredRestaurants = filterRestaurantData(
              searchTxt,
              allRestaurants
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {filteredRestaurants.length > 0 ? (
        <RestaurantList restaurants={filteredRestaurants} />
      ) : (
        <h1>No Restaurants found</h1>
      )}
    </>
  );
};

export default Body;
