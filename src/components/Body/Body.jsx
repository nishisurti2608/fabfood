import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Restcard from "../Restaurantcards/Restcard";
import Shimmer from "../../Shimmer/Shimmer";

const Body = () => {
  const [filteredRestro, setfilteredRestro] = useState([]);
  const [listofRestro, setlistofRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

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
    setlistofRestro(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
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

  //Veg and nonveg Function

  const filterRestrobyVeg = (restros, vegCriteria) => {
    const filterData = restros?.filter((restro) => {
      return restro?.info?.veg === vegCriteria;
    });
    filterData.length === 0
      ? console.log("Fix this logic for none restro")
      : setfilteredRestro(filterData);
  };

  //Search Function

  const filteredRestrobysearch = (restro, searchtext) => {
    const filterData = listofRestro?.filter((restro) => {
      return restro?.info?.name
        .toLowerCase()
        .includes(searchtext.toLowerCase());
    });
    setfilteredRestro(filterData);
  };

  //Body Component

  return filteredRestro?.length === 0 ? (
    <Shimmer />
  ) : (
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
        <div className="pt-2 relative mx-auto text-gray-600 flex">
          <input
            placeholder="Search"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            type="submit"
            className=" px-4 py-2 bg-green-100 m-2 rounded-lg"
            onClick={() => {
              filteredRestrobysearch(filteredRestro, searchText);
            }}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="res-container pt-[120px] px-10 flex flex-wrap">
        {filteredRestro?.map((restaurant) => {
          return (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              <Restcard {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
