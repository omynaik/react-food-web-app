import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="card">
      <img src={`${CDN_URL}${restaurant.cloudinaryImageId}`} />
      <div className="card-content">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.cuisines.join(", ")}</p>
        <p>{restaurant.costForTwo}</p>
        <p>{restaurant.sla.slaString}</p>
        <h3>{restaurant.avgRating} stars</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
