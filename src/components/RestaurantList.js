import RestaurantDetails from "./RestaurantDetails";

import * as RestaurantJSONdata from "../../assets/data/restaurant-data.json";
import { RESTAURANT_LIST_URL } from "../../utils/constants";

const restaurantData =
  RestaurantJSONdata.data.cards[0].card.card.gridElements.infoWithStyle
    .restaurants;

const fetchRestaurantList = async () => {
  const data = await fetch(RESTAURANT_LIST_URL);
  const restaurantData = await data.json();
  console.log(restaurantData);
  // setRestaurantListData(
  //   restaurantData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //     ?.restaurants
  // );
};
// fetchRestaurantList();

const RestaurantList = () => {
  return (
    <div className="rest-list-cont">
      {restaurantData.map((rest) => {
        return <RestaurantDetails restData={rest} />;
      })}
    </div>
  );
};

export default RestaurantList;
