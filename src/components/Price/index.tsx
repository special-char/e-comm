import React from "react";

type Props = {
  price: {
    productDiscountPrice: string;
    productOriginalPrice: string;
  };
  className?: any;
};

const Price = (data: Props) => {
  return (
    <div className="flex gap-4 items-center">
      <p className="font-bold text-body1">{data.price.productDiscountPrice}</p>
      <p className="line-through text-black text-opacity-70 text-body2">
        {data.price.productOriginalPrice}
      </p>
    </div>
  );
};

export default Price;
