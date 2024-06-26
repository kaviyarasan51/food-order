import RestaurantMenuListItem from "./RestaurantMenuListItem";

const RestaurantSubCategory = (props) => {
  const { subCategory, showSubCategoryDetails, setShowSubCategoryIndex } =
    props;

  const showHideSubCategory = () => {
    setShowSubCategoryIndex();
  };

  return (
    <div className='mx-7 py-2' key={subCategory.title}>
      <div
        className='px-2 py-1 flex justify-between  bg-gray-200 cursor-pointer'
        onClick={showHideSubCategory}>
        <p className='font-semibold text-sm select-none'>{subCategory.title}</p>
        <p className='select-none'>⏬</p>
      </div>
      {showSubCategoryDetails ? (
        <div>
          {subCategory.itemCards.map((categoryItem) => {
            return (
              <RestaurantMenuListItem
                key={categoryItem.card.info.id}
                cardItems={categoryItem}
              />
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default RestaurantSubCategory;
