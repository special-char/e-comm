import React from "react";
import Button from "../common/Button";
import { ProductCardType } from "@/utils/types";
import Image from "next/image";
import CounterBtn from "../products/CounterBtn";
import Price from "../Price";

const CartItem = ({ data }: ProductCardType) => {
  return (
    <li className="grid grid-cols-[25%_1fr] max-sm:grid-cols-[40%_1fr] py-2 gap-4">
      <div className="overflow-hidden rounded-md border max-w-[150px] relative border-gray/30 aspect-square">
        <Image
          src={data.productThumbnail.url}
          alt={data.productName}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex flex-col gap-2 justify-between">
        <div>
          <p className="text-subtitle2 font-bold">{data.productName}</p>
          <Price price={data.price} />
        </div>
        <CounterBtn />
      </div>
    </li>
  );
};

export default CartItem;
