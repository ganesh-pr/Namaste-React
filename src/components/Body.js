import {
  RestaurantListData,
  RESTAURANT_FETCH_ERROR,
  SWIGGY_API_URL,
} from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="restaurant-list">
      {restaurants.map((res) => {
        return <RestaurantCard {...res?.data} key={res?.data.id} />;
      })}
    </div>
  );
};

const filterRestaurantData = (searchTxt, allRestaurants) => {
  console.log(allRestaurants);
  return allRestaurants.filter(
    (res) =>
      res?.data?.name?.toLowerCase().indexOf(searchTxt.toLowerCase()) > -1
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
      <div className="search-container">
        <input
          type="text"
          name="Search"
          id="Search"
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
