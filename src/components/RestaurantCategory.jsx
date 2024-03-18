import ItemsList from "./ItemsList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log(data);
  // const [showItems, setShowItem] = useState(false);

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-8/12 bg-gray-100 shadow-lg p-4 mb-4 mx-auto my-4">
        <div
          className="flex flex-row justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="font-bold text-2xl"> {showItems ? "↑" : "↓"}</span>
        </div>

        {showItems && <ItemsList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
