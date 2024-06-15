import { BANNER_LIST_URL } from "../../utils/constants";

const BannerImage = (props) => {
  const { imageId } = props.bannerContent;
  return (
    <div>
      <a href="#">
        <img
          className="ban-img"
          src={`${BANNER_LIST_URL}${imageId}`}
          width="144"
          height="180"
          alt="Image"
        />
      </a>
    </div>
  );
};

export default BannerImage;
