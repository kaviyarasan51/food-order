import { RESTAURANT_LIST_IMAGE_URL } from "../../utils/constants";

import { Link } from "react-router-dom";

const RestaurantDetails = (props) => {
  const {
    id,
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
      <div className="img-cont-para">
        <Link to={`/details/${id}`}>
          <h3>{name}</h3>
        </Link>
        <div className="img-content-para">
          <h3>{`⭐${avgRating}`}</h3>
          <p>{sla.slaString}</p>
        </div>
        <p>{cuisines.join(", ")}</p>
        <p>{`${locality}, ${areaName}`}</p>
      </div>
    </div>
  );
};

export default RestaurantDetails;
