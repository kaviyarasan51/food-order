const RestaurantMenuListItem = (props) => {
  const { id, imageId, ratings, defaultPrice, name, price, description } =
    props.cardItems.card.info;
  return (
    <div className='mx-10 py-5 border-b-2'>
      <p className='font-semibold text-lg'>{name}</p>
      <p className='font-semibold text-lg'>
        ₹ {(price ? price : defaultPrice) / 100}
      </p>
      <p>{ratings.aggregatedRating.ratings}</p>
      <p>{description}</p>
    </div>
  );
};

export default RestaurantMenuListItem;
