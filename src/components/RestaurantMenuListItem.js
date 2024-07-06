import { useDispatch } from "react-redux";

import { MENU_DETAILS_IMAGE_URL } from "../../utils/constants";
import { addItem, removeItem } from "../store/CartSlice";

const RestaurantMenuListItem = (props) => {
  const type = props.type;
  const { id, imageId, ratings, defaultPrice, name, price, description } =
    props?.cardItems?.card?.info;

  const dispatch = useDispatch();

  const addItemsToCart = () => {
    console.log("called");
    // Action to be dispatched
    // props?.cardItems

    dispatch(addItem(props.cardItems));
  };

  const deleteItemFromCart = () => {
    dispatch(removeItem(props.cardItems));
  };

  return (
    <div className='mx-10 py-5 border-b-2 flex justify-between'>
      <div className='w-8/12'>
        <p className='font-semibold text-lg'>{name}</p>
        <p className='font-semibold text-lg'>
          ₹ {(price ? price : defaultPrice) / 100}
        </p>
        <p className='text-gray-400 text-base'>
          {ratings.aggregatedRating.rating}
        </p>
        <p className='text-gray-400 text-base'>{description}</p>
      </div>
      <div className='w-2/12 max-w-28 h-28 bg-green-200 overflow-hidden rounded-lg relative'>
        <button
          className='px-2 py-1 bg-black left-1/4 bottom-0 text-white rounded-lg absolute'
          onClick={addItemsToCart}>
          Add+
        </button>
        <img
          width='100%'
          height='100%'
          src={`${MENU_DETAILS_IMAGE_URL}${imageId}`}
        />
      </div>
      {type === "cart" ? (
        <div className='w-2/12 flex justify-center items-center'>
          <button
            className='bg-black rounded-lg text-white px-3 py-1'
            onClick={deleteItemFromCart}>
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default RestaurantMenuListItem;
