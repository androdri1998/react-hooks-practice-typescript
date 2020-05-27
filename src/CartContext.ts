import { createContext } from "react";

export interface IProduct {
  id: number;
  name: string;
  price: number;
}

export interface ICart {
  products: IProduct[];
  shipping_value?: number;
}

const CartContext = createContext<ICart>({
  products: [],
  shipping_value: 0,
});

export default CartContext;
