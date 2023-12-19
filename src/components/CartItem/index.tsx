import React from "react";
import Button from "../common/Button";
import { ProductCardType } from "@/utils/types";
import Image from "next/image";
import CounterBtn from "../products/CounterBtn";

const CartItem = ({ data }: ProductCardType) => {
	return (
		<li className="grid grid-cols-[25%_1fr] max-sm:grid-cols-[40%_1fr] py-2 gap-4">
			<div className="overflow-hidden rounded-md border  relative border-gray/30 aspect-square">
				<Image
					src={data.productThumbnail.url}
					alt={data.productName}
					fill
					style={{ objectFit: "contain" }}
				/>
			</div>

			<div className="flex flex-col gap-2 justify-between">
				<div className="flex gap-x-4 justify-between flex-wrap">
					<p className="text-body2 font-medium">{data.productName}</p>
					<p className="font-semibold text-caption1">{data.productPrice}</p>
				</div>
				<div className="flex gap-4 justify-between flex-wrap">
					{/* <p className="text-gray/60 text-caption2">Qty 5</p> */}
					<CounterBtn />
					{/* <Button
            variant="outlined"
            className="font-medium text-red-500 hover:text-red-600 !border-none !p-0"
          >
            Remove
          </Button> */}
				</div>
			</div>
		</li>
	);
};

export default CartItem;
