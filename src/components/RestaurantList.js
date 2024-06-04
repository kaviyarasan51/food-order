import RestaurantDetails from "./RestaurantDetails";
import { useState } from "react";

import * as RestaurantJSONdata from "../../assets/data/restaurant-data.json";
import { RESTAURANT_LIST_URL } from "../../utils/constants";

const restaurantData =
  RestaurantJSONdata.data.cards[0].card.card.gridElements.infoWithStyle
    .restaurants;

// const fetchRestaurantList = async () => {
//   const data = await fetch(RESTAURANT_LIST_URL);
//   const restaurantData = await data.json();
//   console.log(restaurantData);
// };
// fetchRestaurantList()

const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState(restaurantData);
  const [filteredRestaurantList, setFilteredRestaurantList] =
    useState(restaurantData);
  const [searchText, setSearchText] = useState("");

  return (
    <div className='main-cont'>
      <div className='filter-cont'>
        <button
          onClick={() => {
            const filteredOutput = restaurantList.filter((rest) => {
              return rest.info.avgRating > 4.5;
            });
            setFilteredRestaurantList(filteredOutput);
          }}>
          Show top rated restaurants
        </button>
        <div className='search-cont'>
          <input
            type='text'
            id='searchInput'
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredOutput = restaurantList.filter((rest) => {
                return rest.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurantList(filteredOutput);
            }}>
            Search
          </button>
        </div>

        <button
          onClick={() => {
            setFilteredRestaurantList(restaurantList);
            setSearchText("");
          }}>
          Reset
        </button>
      </div>
      <div className='rest-list-cont'>
        {filteredRestaurantList.map((rest) => {
          return <RestaurantDetails key={rest?.info?.id} restData={rest} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantList;
