import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const restaurantList = useRestaurantList();

  useEffect(() => {
    setFilteredList(restaurantList);
  }, [restaurantList]);

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
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-btn"
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
          className="filter-btn"
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

      <div className="restaurantList">
        {filteredList.map((item) => {
          return (
            <>
              <Link
                to={`restaurants/${item.info.id}`}
                key={item.info.id}
                style={{
                  textDecoration: "none",
                  display: "block",
                  width: "18%",
                }}
              >
                <RestaurantCard restaurant={item.info} key={item.info.id} />
              </Link>
              {/* <RestaurantCard restaurant={item.info} key={item.info.id} /> */}
            </>
          );
          //<RestaurantCard {...item.info}
        })}
      </div>
    </div>
  );
};

export default Body;
