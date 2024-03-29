import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center mt-4">
      <h1 className="font-bold text-2xl">
        Cart ({cartItems.length} items added)
      </h1>
      {cartItems.length > 0 && (
        <button
          className="px-2 py-1 mt-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}
      {cartItems.length == 0 && (
        <p className="text-xl font-bold text-gray-500 mt-2">
          Your cart is empty. Add Items to the Cart !
        </p>
      )}

      <div className="w-6/12 mt-4 p-4 mx-auto border-2 border-pink-300 rounded-lg">
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
