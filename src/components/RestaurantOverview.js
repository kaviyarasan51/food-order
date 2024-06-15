import { useParams } from "react-router-dom";
import useRestaurantMenuList from "../custom-hooks/useRestaurantMenuList";
const RestaurantOverview = () => {
  let { id } = useParams();
  const menuDetails = useRestaurantMenuList(id);
  const restaurantMenuList = menuDetails.menuList;
  const restaurantName = menuDetails.restaurantName;

  return restaurantMenuList.length ? (
    <div className='main-cont'>
      <h1>{restaurantName}</h1>
      {restaurantMenuList.map((restMenu) => {
        const price = restMenu.card.info.price
          ? restMenu.card.info.price
          : restMenu.card.info.defaultPrice;
        const rating = restMenu.card.info.ratings.aggregatedRating.rating
          ? restMenu.card.info.ratings.aggregatedRating.rating
          : "No rating";
        const ratingCountV2 = restMenu.card.info.ratings.aggregatedRating
          .ratingCountV2
          ? restMenu.card.info.ratings.aggregatedRating.ratingCountV2
          : "No rating";
        return (
          <div className='rest-menu-list-cont'>
            <h3>{restMenu.card.info.name}</h3>
            <div>{`$ ${price / 100}`}</div>
            <div>{`${rating} (${ratingCountV2})`}</div>
            <div>Info</div>
          </div>
        );
      })}
    </div>
  ) : (
    <h3>Loading...</h3>
  );
};

export default RestaurantOverview;
