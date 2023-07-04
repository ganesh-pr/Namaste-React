import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  console.log("cartItems", cartItems);
  return (
    <>
      <div className="flex">
        <h1 className="font-bold text-2xl p-4 m-4">
          Cart Items - {cartItems.length}
        </h1>
        <button
          className="bg-green-200 p-2 m-5"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItem {...item} key={item.id} />
          //<li className="px-5 m-5">{item.name}</li>
        ))}
      </div>
    </>
  );
};

export default Cart;
