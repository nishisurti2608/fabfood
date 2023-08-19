import React from "react";
import { restaurantList } from "../../data/mockdata";
import { useState } from "react";

const Toprated = () => {
  const [listofres, setlistofres] = useState(restaurantList);
  return (
    <div>
      <button
        className=" mt-[120px] border-2 cursor-pointer border-black  text-black bg-transparent hover:text-darkseagreen "
        onClick={() => {
          const filteredres = listofres.filter((res) => res.data.avgRating > 4);
          setlistofres(filteredres);
        }}
      >
        Top Ratings
      </button>
    </div>
  );
};

export default Toprated;
