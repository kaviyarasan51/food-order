import { BANNER_LIST_URL } from "../../utils/constants";

const BannerImage = (props) => {
  const { imageId } = props.bannerContent;
  return (
    <img
      src={`${BANNER_LIST_URL}${imageId}`}
      width='160'
      height='160'
      alt='Image'
    />
  );
};

export default BannerImage;
