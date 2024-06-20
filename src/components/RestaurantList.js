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
      <div className='filter-cont flex mx-10 my-3 justify-between'>
        <button
          className='bg-indigo-900 text-white px-2 py-2 font-normal rounded-md'
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
            className='border border-gray-500 rounded w-4/6 mx-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            id='searchInput'
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className='bg-indigo-900 text-white px-2 py-2 font-normal rounded-md'
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
          className='bg-indigo-900 text-white px-2 py-2 font-normal rounded-md'
          onClick={() => {
            setFilteredRestaurantList(restaurantList);
            setSearchText("");
          }}>
          Reset
        </button>
      </div>
      <div className='rest-list-cont flex flex-wrap mx-10  mt-6'>
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
