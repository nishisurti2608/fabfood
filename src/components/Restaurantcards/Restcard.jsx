import React from "react";

import { CDN_URL } from "../../data/constants";

const Restcard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
      <div className="w-full max-w-md  mx-auto  bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="max-w-md mx-auto ">
          <div className="p-0 sm:p-6">
            <img
              className="w-full h-[150px] object-cover rounded-t-lg"
              alt="res-logo"
              src={CDN_URL + cloudinaryImageId}
            />
            <div className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
              {name}
            </div>
            <div className="flex flex-row">
              <p className="text-[17px] font-bold text-[#0FB478]">
                {avgRating}
              </p>
            </div>
            <p className="text-[#7C7C80] font-[15px] resize-none">
              {cuisines.join(",")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restcard;
