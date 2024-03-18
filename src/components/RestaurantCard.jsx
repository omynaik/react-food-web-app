import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="w-100 h-[100%] bg-pink-100 rounded-lg hover:scale-105 transition duration-500 ease-in-out text-gray-500 hover:text-gray-700 hover:shadow-xl">
      <img
        className="w-[100%] h-40 object-cover rounded-lg px-2 py-2 "
        src={`${CDN_URL}${restaurant.cloudinaryImageId}`}
      />
      <div className="px-2 py-2 flex flex-col gap-2">
        <h3 className="font-bold text-xl">{restaurant.name}</h3>
        <p>{restaurant.cuisines.join(", ")}</p>
        <p>{restaurant.costForTwo}</p>
        <p>{restaurant.sla.slaString}</p>
        <h3 className="font-bold">{restaurant.avgRating} stars</h3>
      </div>
    </div>
  );
};

//Higher Order Component
//input -> RestaurantCard --> output -> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return ({ restaurant }) => {
    return (
      <div className="h-full">
        <label className="absolute bg-slate-700 text-white rounded-md mt-1 ml-1">
          Promoted Restaurant
        </label>
        <RestaurantCard restaurant={restaurant} />
      </div>
    );
  };
};

export default RestaurantCard;
