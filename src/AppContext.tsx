import React, { useContext, useReducer } from "react";
import CartContext, { ICart, IProduct } from "./CartContext";

type CartActionType = {
  type: "ADD_PRODUCT" | "REMOVE_PRODUCT";
  payload: IProduct;
};

const AppContext: React.FC = () => {
  const cars = useReducer(
    (state: ICart, action: CartActionType) => {
      switch (action.type) {
        case "ADD_PRODUCT":
          return {
            ...state,
            products: [...state.products, action.payload],
          };
        default:
          return state;
      }
    },
    {
      products: [],
      shipping_value: 0,
    }
  );
  const { products } = useContext(CartContext);
  return (
    <ul>
      {products?.map((product) => (
        <li>{product.name}</li>
      ))}
    </ul>
  );
};

export default AppContext;
