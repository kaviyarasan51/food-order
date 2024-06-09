import RestaurantDetails from "./RestaurantDetails";
import { useState, useEffect } from "react";

// import * as RestaurantJSONdata from "../../assets/data/restaurant-data.json";
import { RESTAURANT_LIST_URL } from "../../utils/constants";
import RestaurantShimmer from "./restaurantShimmer";
import RestaurantShimmerPage from "./restaurantShimmer";

const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchRestaurantList();
  }, []);
  const fetchRestaurantList = async () => {
    const data = await fetch(RESTAURANT_LIST_URL);
    const restaurantJSON = await data.json();
    const restaurantData =
      restaurantJSON.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants;
    setRestaurantList(restaurantData);
    setFilteredRestaurantList(restaurantData);
  };
  return filteredRestaurantList.length ? (
    <div className="main-con">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterOutput = restaurantList.filter(
              (rest) => rest.info.avgRating >= 4.3
            );
            setFilteredRestaurantList(filterOutput);
          }}
        >
          Top Rated in Restaurant
        </button>

        <div className="search">
          <input
            type="text"
            id="searchInput"
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
            }}
          >
            Search
          </button>
        </div>

        <button
          onClick={() => {
            setFilteredRestaurantList(restaurantList);
            setSearchText("");
          }}
        >
          Reset
        </button>
      </div>

      <div className="rest-list-cont">
        {filteredRestaurantList.map((rest) => {
          return <RestaurantDetails key={rest.info.id} restData={rest} />;
        })}
      </div>
    </div>
  ) : (
    // <div className="loaded">
    //   <h1>Loading...</h1>
    // </div>
    <RestaurantShimmerPage />
  );
};

export default RestaurantList;
