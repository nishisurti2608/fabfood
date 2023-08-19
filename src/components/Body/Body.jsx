import { useState } from "react";
import Restcardlist from "../Restaurantcards/Restcardlist";
import { restaurantList } from "../../data/mockdata";
import Restcard from "../Restaurantcards/Restcard";

const Body = () => {
  const [listofres, setlistofres] = useState(restaurantList);

  return (
    <div className="body bg-gradient-to-r from-seagreen to-green-200">
      <div className="filter">
        <button
          className="mt-[120px] px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            const filteredres = listofres.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(filteredres);
            setlistofres(filteredres);
          }}
        >
          Top Ratings
        </button>
      </div>
      <div className="res-container pt-[120px] px-10 flex flex-wrap -mx-4">
        {restaurantList.map((restaurant) => {
          return <Restcard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
