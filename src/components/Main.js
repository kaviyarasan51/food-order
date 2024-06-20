import Banner from "./Banner";
import RestaurantList from "./RestaurantList";

const Main = () => {
  return (
    <div className='main mx-10'>
      <Banner />
      <p className='font-bold text-2xl my-5'>
        Restaurants with online food delivery in Chennai
      </p>
      <RestaurantList />
    </div>
  );
};
export default Main;
