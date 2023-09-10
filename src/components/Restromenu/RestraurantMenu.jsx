import { useEffect, useState } from "react";
import Shimmer from "../../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../data/constants";

const RestraurantMenu = () => {
  const [resInfo, setResinfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);

    setResinfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu pt-60">
      <h1>{name}</h1>
      <h2>
        {cuisines.join(",")}-{costForTwoMessage}
      </h2>
      <h1>Menu</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{"₹"}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}

        <li>Ramen</li>
      </ul>
    </div>
  );
};

export default RestraurantMenu;
