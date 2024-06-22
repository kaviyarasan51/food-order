import { useParams } from "react-router-dom";
import useRestaurantMenuList from "../custom-hooks/useRestaurantMenuList";
import RestaurantMenuListItem from "./RestaurantMenuListItem";

const RestaurantOverview = () => {
  let { id } = useParams();
  const menuDetails = useRestaurantMenuList(id);
  // const restaurantMenuList = menuDetails.menuList;
  const restaurantName = menuDetails.restaurantName;
  const cardDetails = menuDetails.cardDetails;

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
      {categories.map((category) => {
        return (
          <div
            className='shadow-lg shadow-gray-300 mb-5'
            key={category.card.card.title}>
            <div className='flex justify-between bg-gray-300 py-2 px-5'>
              <p className='font-semibold text-lg'>
                {category.card.card.title}
                {category.card.card?.itemCards?.length
                  ? " (" + category.card.card?.itemCards?.length + " )"
                  : ""}
              </p>
              <p>⏬</p>
            </div>
            {category.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ? (
              <div>
                {category.card.card.categories.map((subCategory) => {
                  return <p key={subCategory.title}>{subCategory.title}</p>;
                })}
                <p>Sub category</p>
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
        );
        // return (
        //   <div className='shadow-lg shadow-gray-300 my-5'>
        //     <div className='flex bg-gray-300 px-3 py-2'>
        //       <p className='w-11/12 font-semibold text-xl'>
        //         {category.card.card.title}
        //       </p>
        //       <p className='w-1/12'>🔽</p>
        //     </div>
        //     <div className='px-3 py-2'>
        //       {category.card.card["@type"] ===
        //       "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ? (
        //         category.card.card.categories.map((subCategory) => {
        //           return (
        //             <div>
        //               <p className='font-medium text-xl'>{subCategory.title}</p>
        //               {subCategory.itemCards.map((items) => {
        //                 return <RestaurantMenuListItem cardItems={items} />;
        //               })}
        //             </div>
        //           );
        //         })
        //       ) : (
        //         <div>
        //           {category.card.card.itemCards.map((items) => {
        //             return <RestaurantMenuListItem cardItems={items} />;
        //           })}
        //         </div>
        //       )}
        //     </div>
        //   </div>
        // );
      })}
    </div>
  ) : (
    <h3>Loading...</h3>
  );
};

export default RestaurantOverview;
