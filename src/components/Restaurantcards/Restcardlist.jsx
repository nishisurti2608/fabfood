import React from "react";
import { restaurantList } from "../../data/mockdata";
import Restcard from "./Restcard";

const Restcardlist = () => {
  return (
    <div className="restaurant-list pt-[120px] px-10 flex flex-wrap -mx-4">
      {restaurantList?.map((restaurant) => {
        return <Restcard {...restaurant?.data} key={restaurant?.data?.id} />;
      })}
    </div>
  );
};

export default Restcardlist;
