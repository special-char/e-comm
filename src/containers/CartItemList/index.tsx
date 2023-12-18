import React from "react";
import { products } from "@/lib/data";
import CartItem from "@/components/CartItem";

type Props = {};

const CartItemList = (props: Props) => {
  return (
    <ul role="list" className="divide-y divide-gray/30 bg-gray/5 rounded-lg">
      {products &&
        products.map((item) => (
          <div key={item.id} className="px-4 py-2">
            <CartItem data={item} />
          </div>
        ))}
    </ul>
  );
};

export default CartItemList;
