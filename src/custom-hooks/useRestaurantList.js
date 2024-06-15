import { useEffect, useState } from "react";

import { RESTAURANT_LIST_URL } from "../../utils/constants";

const useRestaurantList = () => {
  useEffect(() => {
    console.log("use effect called");
    fetchRestaurantList();
  }, []);

  const [restaurantList, setRestaurantList] = useState([]);

  const fetchRestaurantList = async () => {
    const data = await fetch(RESTAURANT_LIST_URL);
    const restaurantJSON = await data.json();
    const restaurantData =
      restaurantJSON.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants;
    setRestaurantList(restaurantData);
  };

  return restaurantList;
};

export default useRestaurantList;
