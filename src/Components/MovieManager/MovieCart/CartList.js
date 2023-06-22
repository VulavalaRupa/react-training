import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../Redux/movies/cartslice";

const CartList = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (movieId) => {
    dispatch(removeFromCart(movieId));
  };



  return (
    <div className="p-4">
      <div className="card shadow  bg-body rounded mt-5 p-4">
        <h2>Cart:</h2>
        {cartItems?.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <div className="card p-4 m-3">
                <span key={item.imdbID}><b>{item.Title}</b>
                  <i className="fa fa-trash" style={{ "color": "red", "font-size": "1.5rem", "float": "right" }} onClick={() => handleRemoveFromCart(item.imdbID)}></i>
                </span>
              </div>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

    </div>
  );
}


export default CartList;