import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch("http://localhost:3001/api/restaurants");

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
