const RestaurantMenuListItem = (props) => {
  const { name } = props.cardItems.card.info;
  return <p>{name}</p>;
};

export default RestaurantMenuListItem;
