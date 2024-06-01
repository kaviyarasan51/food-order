import BannerImage from "./BannerImage";

import * as ImagesData from "../../assets/data/data.json";

const imgData = ImagesData.data.cards[0].card.card.imageGridCards.info;

export default Banner = () => {
  return (
    <div className="img-container">
      {imgData.map((banner) => {
        return <BannerImage bannerContent={banner} />;
      })}
    </div>
  );
};
