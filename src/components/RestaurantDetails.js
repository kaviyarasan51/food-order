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
  } = props?.restData?.info;
  return (
    <div className='rest-container w-[300] mr-5 mb-5 bg-slate-300'>
      <div className='img-cont w-[300] m-auto'>
        <img
          className='img'
          src={`${RESTAURANT_LIST_IMAGE_URL}${cloudinaryImageId}`}
          alt='Image'
          width='90%'
          height='auto'
        />
      </div>
      <Link to={`/details/${id}`}>
        <h3>{name}</h3>
      </Link>
      <p>{avgRating}</p>
      <p>{sla.slaString}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{`${locality}, ${areaName}`}</p>
    </div>
  );
};

export default RestaurantDetails;
