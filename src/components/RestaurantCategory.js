import { useState } from "react";
import RestaurantSubCategory from "./RestaurantSubCategory";

import RestaurantMenuListItem from "./RestaurantMenuListItem";

const RestaurantCategory = (props) => {
  const { category, showDetails, setShowIndex } = props;

  const [showSubCategoryIndex, setShowSubCategoryIndex] = useState(0);

  const showHideDetailsMenu = () => {
    setShowIndex();
  };

  return (
    <div className='shadow-lg shadow-gray-400 mb-3'>
      <div
        className='flex justify-between bg-gray-300 py-2 px-5 cursor-pointer'
        onClick={showHideDetailsMenu}>
        <p className='font-semibold text-lg select-none'>
          {category.card.card.title}
          {category.card.card?.itemCards?.length
            ? " (" + category.card.card?.itemCards?.length + " )"
            : ""}
        </p>
        <p className='select-none'>⏬</p>
      </div>
      {showDetails ? (
        <div>
          {category.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ? (
            <div>
              {category.card.card.categories.map((subCategory, index) => {
                return (
                  <RestaurantSubCategory
                    subCategory={subCategory}
                    showSubCategoryDetails={
                      index === showSubCategoryIndex &&
                      showSubCategoryIndex !== -1
                        ? true
                        : false
                    }
                    setShowSubCategoryIndex={() =>
                      setShowSubCategoryIndex(
                        index !== showSubCategoryIndex ? index : -1
                      )
                    }
                  />
                );
              })}
            </div>
          ) : (
            category.card.card.itemCards.map((item) => {
              return (
                <RestaurantMenuListItem
                  key={item.card.info.id}
                  cardItems={item}
                />
              );
            })
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default RestaurantCategory;
