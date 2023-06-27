import {
  RestaurantListData,
  RESTAURANT_FETCH_ERROR,
  SWIGGY_API_URL,
  RESTAURANT_LIST_ERROR_CODE,
  CORS_ERROR_MESSAGE,
} from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterRestaurantData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const RestaurantList = ({ restaurants, user }) => {
  console.log("res", restaurants);
  return (
    <div className="flex flex-wrap h-auto m-auto">
      {restaurants.map((res) => {
        return (
          <Link to={"restaurant/" + res?.data.id} key={res?.data.id}>
            <RestaurantCard {...res?.data} user={user} />
          </Link>
        );
      })}
    </div>
  );
};

const Body = ({ user: propsUser }) => {
  // let searchTxt = "KFC"; - Creating a local variable in JS
  const [allRestaurants, setAllRestaurants] = useState([]); //Creating a local state variable in react
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); //Creating a local state variable in react
  const [searchTxt, setSearchTxt] = useState("");
  const [user1, setUser1] = useState(propsUser);
  const [errorMessage, setErrorMessage] = useState("");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      const email = "test";
      //setUser1({ name: user.name, email: email });
    }, 10000);
  }, []);
  // useEffect(() => {
  //   console.log("search is updated");
  // }, [searchTxt]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(SWIGGY_API_URL);
      console.log("line 55", data);
      let list = await data.json();
      console.log(list);
      if (list.statusCode !== RESTAURANT_LIST_ERROR_CODE) {
        list?.data?.cards.forEach((restaurantListCard) => {
          if (restaurantListCard?.cardType === "seeAllRestaurants") {
            setAllRestaurants(restaurantListCard.data?.data?.cards);
            setFilteredRestaurants(restaurantListCard.data?.data?.cards);
          }
        });
      } else {
        setErrorMessage(RESTAURANT_FETCH_ERROR);
      }
    } catch (e) {
      setErrorMessage(CORS_ERROR_MESSAGE);
    }
  }

  // const isOnline = useOnline();

  // if (!isOnline) {
  //   return <h1>🔴 Offline, please check your internet connection!!</h1>;
  // }

  console.log("render", allRestaurants);
  console.log("errorMessage", errorMessage);
  //Avoid rendering
  //if (!allRestaurants) return null;

  // Conditional rendering using ternary operator
  return errorMessage ? (
    errorMessage === CORS_ERROR_MESSAGE ? (
      <>
        <h4 class="error-message cursor-pointer">{errorMessage}</h4>
        <a
          class="cursor-pointer underline text-sky-600"
          href="https://chrome.google.com/webstore"
          target="_blank"
        >
          URL: https://chrome.google.com/webstore
        </a>
      </>
    ) : (
      <h4 class="error-message cursor-pointer">{errorMessage}</h4>
    )
  ) : allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container py-5 px-3 my-4 bg-purple-200">
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

        <button
          className="p-2 m-2 bg-blue-700 text-white hover:bg-cyan-300 rounded-xl"
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
        <input
          value={user.name}
          onChange={(e) => {
            console.log(e.value);
            console.log(e.target.value);
            setUser({
              email: "ganesh@reactdev.com",
              name: e.target.value,
            });
          }}
        />
      </div>
      {filteredRestaurants.length > 0 ? (
        <RestaurantList restaurants={filteredRestaurants} user={user1} />
      ) : (
        <h1>No Restaurants found</h1>
      )}
    </>
  );
};

export default Body;
