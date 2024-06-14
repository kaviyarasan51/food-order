import BannerImage from "./BannerImage";

import * as ImagesData from "../../assets/data/data.json";

const imgData = ImagesData.data.cards[0].card.card.imageGridCards.info;

export default Banner = () => {
  return (
    <div>
      <div className="btn-container">
        <div className="para">What's on your mind?</div>
        <button
          className="btn"
          onClick={() => {
            document.getElementById("container").scrollLeft -= 160 * 5;
          }}
        >
          &lt;
        </button>
        <button
          className="btn"
          onClick={() => {
            document.getElementById("container").scrollLeft += 160 * 5;
          }}
        >
          &gt;
        </button>
      </div>
      <div className="img-container" id="container">
        {imgData.map((banner) => {
          return <BannerImage key={banner.id} bannerContent={banner} />;
        })}
      </div>
    </div>
  );
};
