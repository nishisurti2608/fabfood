import { useEffect, useState } from "react";

import Restcard from "../Restaurantcards/Restcard";

const Body = () => {
  const [filteredRestro, setfilteredRestro] = useState([]);

  //API call from swiggy

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setfilteredRestro(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //creating filterRestrobyRating on click function logic
  const filterRestrobyRating = (restros, ratingCriteria) => {
    const filterData = restros?.filter((restro) => {
      return restro?.info?.avgRating > ratingCriteria;
    });

    setfilteredRestro(filterData);
  };

  const filterRestrobyVeg = (restros, vegCriteria) => {
    const filterData = restros?.filter((restro) => {
      return restro?.info?.veg === vegCriteria;
    });

    setfilteredRestro(filterData);
  };

  return (
    <div className="body bg-gradient-to-r from-seagreen to-green-200">
      <div className="filter">
        <button
          className="mt-[120px] px-4 py-2 bg-green-100 m-2 rounded-lg"
          onClick={() => filterRestrobyRating(filteredRestro, "4.0")}
        >
          Top Ratings
        </button>
        <button
          className="mt-[120px] px-4 py-2 bg-green-100 m-2 rounded-lg"
          onClick={() => filterRestrobyVeg(filteredRestro, true)}
        >
          Vegetarian
        </button>

        <button
          className="mt-[120px] px-4 py-2 bg-green-100 m-2 rounded-lg"
          onClick={() => filterRestrobyVeg(filteredRestro, false)}
        >
          Non Vegetarian
        </button>

        <button
          onClick={() => setfilteredRestro(filteredRestro)}
          className="mt-[120px] px-4 py-2 bg-green-100 m-2 rounded-lg"
        >
          All
        </button>
      </div>
      <div className="res-container pt-[120px] px-10 flex flex-wrap">
        {filteredRestro?.map((restaurant) => {
          return <Restcard {...restaurant?.info} key={restaurant?.info?.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
