import { ProductCardType } from "@/utils/types";
import StarIcon from "@/public/icons/star.svg";
import clsx from "clsx";
import AddToCartBtn from "../AddToCartBtn";
import Price from "@/components/Price";
import ReactMarkdown from "react-markdown";

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
			<span className="text-gray prose-sm">
				<ReactMarkdown>{data.productDescription}</ReactMarkdown>
			</span>
			<p className="text-gray">
				<span className="font-bold">Category: </span>
				{data.category}
			</p>
			<p className="text-gray">
				<span className="font-bold">Weight: </span>
				{data.weight}
			</p>
			<p className="text-gray">
				<span className="font-bold">Ingredients:</span> {data.ingredients}
			</p>
			<p className="text-gray">
				<span className="font-bold">How To Use:</span> {data.howToUse}
			</p>
			{data.additionalInformation && (
				<p className="text-gray">{data.additionalInformation}</p>
			)}
		</div>
	);
};

export default ProductDetails;
