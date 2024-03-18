import { CDN_URL } from "../utils/constants";

const ItemsList = ({ items }) => {
  // console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="text-left py-4 m-2 border-b-2 border-gray-300"
        >
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-3/4 ">
              <span className="font-bold ">{item.card.info.name}</span>
              <span className="font-bold text-red-700"> | </span>
              <span className="font-bold">
                Rs. {item.card.info.price / 100}
              </span>
              <p className="mt-2 text-gray-500">{item.card.info.description}</p>
            </div>
            <div className="">
              <div className="absolute">
                <button className="p-1 bg-black text-white font-semibold shadow-lg border-2 rounded-md">
                  Add+
                </button>
              </div>
              <img
                className="w-40 p-2"
                src={CDN_URL + item.card.info.imageId}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
