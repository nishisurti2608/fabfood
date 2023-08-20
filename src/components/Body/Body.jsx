import { useState } from "react";
import { restaurantList } from "../../data/mockdata";
import Restcard from "../Restaurantcards/Restcard";

const Body = () => {
  const [filteredRestro, setfilteredRestro] = useState(restaurantList);

  const filterRestrobyRating = (restros, ratingCriteria) => {
    const filterData = restros?.filter((restro) => {
      return restro?.data?.avgRating > ratingCriteria;
    });
    setfilteredRestro(filterData);
  };

  return (
    <div className="body bg-gradient-to-r from-seagreen to-green-200">
      <div className="filter">
        <button
          className="mt-[120px] px-4 py-2 bg-green-100 m-2 rounded-lg"
          onClick={() => filterRestrobyRating(restaurantList, "4.0")}
        >
          Top Ratings
        </button>
        <button
          onClick={() => setfilteredRestro(restaurantList)}
          className="mt-[120px] px-4 py-2 bg-green-100 m-2 rounded-lg"
        >
          All
        </button>
      </div>
      <div className="res-container pt-[120px] px-10 flex flex-wrap">
        {filteredRestro?.map((restaurant) => {
          return <Restcard {...restaurant?.data} key={restaurant?.data?.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
