import { useState } from "react";

const CartList = () => {

    const storedCartItems = localStorage.getItem('cartItems');
    const [cartItems, setCartItems] = useState(storedCartItems ? JSON.parse(storedCartItems) : []);

    const deleteCartItems = (itemId) => {
      const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };
   

    return (
        <div className="p-4">
            <div className="card shadow  bg-body rounded mt-5 p-4">
            <h2>Cart:</h2>
        {cartItems?.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <div className="card p-4 m-3">
                <span key={item.id}><b>{item.title}</b> <img src={item.Poster} alt={item.Title} />
              <i className="fa fa-trash" style={{"color":"red", "font-size":"1.5rem", "float":"right" }} onClick={() => deleteCartItems(item.id)}></i>
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