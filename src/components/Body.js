import { RestaurantListData } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="restaurant-list">
      {restaurants.map((res, index) => {
        return <RestaurantCard {...res?.data} key={res?.data.id} />;
      })}
    </div>
  );
};

const filterRestaurantData = (searchTxt) => {
  return RestaurantListData.filter(
    (res) => res.data.name.indexOf(searchTxt) > -1
  );
};

const Body = () => {
  // let searchTxt = "KFC"; - Creating a local variable in JS
  const [restaurants, setRestaurants] = useState(RestaurantListData); //Creating a local state variable in react
  const [searchTxt, setSearchTxt] = useState("Kwality");

  return (
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
        <button
          onClick={() => {
            console.log(searchTxt);
            const filteredRestaurants = filterRestaurantData(searchTxt);
            setRestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>
      </div>
      <h1>{restaurants.length}</h1>
      <RestaurantList restaurants={restaurants} />
    </>
  );
};

export default Body;
