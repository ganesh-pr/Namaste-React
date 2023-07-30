export const filterRestaurantData = (searchTxt, allRestaurants) => {
  console.log(allRestaurants);
  return allRestaurants.filter(
    (res) =>
      res?.info?.name?.toLowerCase().indexOf(searchTxt.toLowerCase()) > -1
  );
};
