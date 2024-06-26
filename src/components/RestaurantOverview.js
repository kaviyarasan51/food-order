import { useParams } from "react-router-dom";
import useRestaurantMenuList from "../custom-hooks/useRestaurantMenuList";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantOverview = () => {
  let { id } = useParams();
  const menuDetails = useRestaurantMenuList(id);
  const restaurantName = menuDetails.restaurantName;
  const cardDetails = menuDetails.cardDetails;

  const [showIndex, setShowIndex] = useState(0);

  const categories = cardDetails.filter((category) => {
    return (
      category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  });

  return cardDetails.length ? (
    <div className='main-cont w-10/12 m-auto'>
      <h1 className='font-extrabold text-2xl my-5'>{restaurantName}</h1>
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category.card.card.title}
            category={category}
            showDetails={index === showIndex && showIndex !== -1 ? true : false}
            setShowIndex={() => setShowIndex(index !== showIndex ? index : -1)}
          />
        );
      })}
    </div>
  ) : (
    <h3>Loading...</h3>
  );
};

export default RestaurantOverview;
