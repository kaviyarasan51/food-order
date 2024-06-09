import { RESTAURANT_LIST_IMAGE_URL } from "../../utils/constants";

const RestaurantDetails = (props) => {
  const {
    name,
    avgRating,
    sla,
    cuisines,
    locality,
    areaName,
    cloudinaryImageId,
  } = props.restData.info;
  return (
    <div className="rest-container">
      <div className="img-cont">
        <img
          className="img"
          src={`${RESTAURANT_LIST_IMAGE_URL}${cloudinaryImageId}`}
          alt="Image"
        />
      </div>
      <h3>{name}</h3>
      <p>{avgRating}</p>
      <p>{sla.slaString}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{`${locality}, ${areaName}`}</p>
    </div>
  );
};

export default RestaurantDetails;
