import Button from "@/components/common/Button";
import { ProductCardType } from "@/utils/types";
import Link from "next/link";
import StarIcon from "@/public/icons/star.svg";
import clsx from "clsx";
import AddToCartBtn from "../AddToCartBtn";
import Price from "@/components/Price";

const ProductDetails = ({ data }: ProductCardType) => {
  return (
    <div className="flex flex-col justify-between gap-4">
      <h3 className="font-bold max-md:hidden">{data.productName}</h3>
      <Price price={data.price} />
      <div className="flex items-center gap-2">
        <div className="flex">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={clsx("h-5 w-5 flex-shrink-0", {
                ["text-yellow"]: data.rating > rating,
                ["text-gray/20"]: data.rating <= rating,
              })}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="text-gray">{data.reviewCount} reviews</p>
      </div>
      <AddToCartBtn />
      <p className="text-gray text-caption1">{data.productDescription}</p>
      <p className="text-gray text-caption1">Category: {data.category}</p>
      <p className="text-gray text-caption1">Weight: {data.weight}</p>
      <p className="text-gray text-caption1">Ingredients: {data.ingredients}</p>
      <p className="text-gray text-caption1">{data.usage}</p>
    </div>
  );
};

export default ProductDetails;
