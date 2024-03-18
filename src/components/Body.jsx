import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const restaurantList = useRestaurantList();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    setFilteredList(restaurantList);
  }, [restaurantList]);

  // console.log("res list", restaurantList);

  const isOnline = useOnlineStatus();
  if (isOnline === false) {
    return (
      <h2>
        Seems like you have disconnected from your network, please check your
        internet
      </h2>
    );
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-row justify-center">
        <div className="flex flex-row gap-8 ">
          <div className="flex flex-row gap-2">
            <input
              className="px-4 py-1 bg-gray-200 border-2 border-gray-500 rounded-lg"
              type="text"
              placeholder="Search Food or Restaurant"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                const filteredRestaurantList = restaurantList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setFilteredList(filteredRestaurantList);
              }}
            >
              🔍
            </button>
          </div>
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded-lg shadow-lg"
            onClick={() => {
              const filteredList = restaurantList.filter(
                (res) => res.info.avgRating >= 4.0
              );

              setFilteredList(filteredList);
            }}
          >
            Top-rated restaurant
          </button>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-y-12 mt-10 justify-between">
        {filteredList.map((item) => {
          return (
            <Link
              to={`restaurants/${item.info.id}`}
              key={item.info.id}
              style={{
                textDecoration: "none",
                display: "block",
                width: "18%",
              }}
            >
              {/*if the restaurant is top rated add a top-rated (promoted) label to it*/}
              {item.info.avgRating > 4.5 ? (
                <RestaurantCardPromoted restaurant={item.info} />
              ) : (
                <RestaurantCard restaurant={item.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
