import { useSelector } from "react-redux";

import RestaurantMenuListItem from "./RestaurantMenuListItem";

const Cart = () => {
  const cartSelector = useSelector((store) => {
    return store.cart.items;
  });

  return (
    <div className='w-8/12 mx-auto'>
      <h1 className='my-4 text-center text-2xl font-semibold'>
        Cart - {cartSelector.length}
      </h1>
      <hr />
      {cartSelector.map((item) => {
        return (
          <RestaurantMenuListItem
            type='cart'
            key={item.card.info.id}
            cardItems={item}
          />
        );
      })}
    </div>
  );
};

export default Cart;
