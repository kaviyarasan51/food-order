import RestaurantDetails from "./RestaurantDetails";
import { useState, useEffect } from "react";

import RestaurantShimmerPage from "./RestaurantShimmerPage";
import useRestaurantList from "../custom-hooks/useRestaurantList";
const RestaurantList = () => {
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const restaurantList = useRestaurantList();
  useEffect(() => {
    setFilteredRestaurantList(restaurantList);
  }, [restaurantList]);

  return filteredRestaurantList.length ? (
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
  ) : (
    // <div className='loader-cont'>
    //   <h1>Loading...</h1>
    // </div>

    <RestaurantShimmerPage />
  );
};

export default RestaurantList;
