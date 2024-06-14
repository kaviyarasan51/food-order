import { BANNER_LIST_URL } from "../../utils/constants";

const BannerImage = (props) => {
  const { imageId } = props.bannerContent;
  return (
    <div>
      {" "}
      <img
        src={`${BANNER_LIST_URL}${imageId}`}
        width="200"
        height="200"
        alt="Image"
      />
    </div>
  );
};

export default BannerImage;
