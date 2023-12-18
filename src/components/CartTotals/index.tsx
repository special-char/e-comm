import React from "react";
import Button from "../common/Button";

type Props = {};

const CartTotals = (props: Props) => {
  return (
    <div className="flex flex-col gap-2 bg-gray/5 rounded-lg px-6 py-4 ">
      <p className="font-semibold text-heading6">Cart Totals</p>
      <div className="flex flex-col py-2 text-gray divide-y divide-gray/30">
        <div className="flex justify-between py-2">
          <p className="text-caption1 font-semibold uppercase">Subtotal</p>
          <p className="text-caption1">45646</p>
        </div>

        <div className="flex justify-between py-2">
          <p className="text-caption1 font-semibold uppercase">Shipping</p>
          <p className="text-caption1">10</p>
        </div>

        <div className="flex justify-between py-2">
          <p className="text-caption1 font-semibold uppercase">Discount</p>
          <p className="text-caption1">7878</p>
        </div>

        <div className="flex justify-between py-2">
          <p className="text-caption1 font-semibold uppercase">Final Payment</p>
          <p className="text-caption1">9898</p>
        </div>
      </div>
      <div>
        <Button variant="fill" color="green" className={"!rounded-lg"}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartTotals;
