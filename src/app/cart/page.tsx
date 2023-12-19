import CartTotals from "@/components/CartTotals";
import CouponForm from "@/components/CouponForm";
import Banner from "@/components/common/Banner";
import CartItemList from "@/containers/CartItemList";
import { cartPageBanner } from "@/lib/data";

type Props = {};

const Cart = (props: Props) => {
	return (
		<>
			<Banner data={cartPageBanner} />
			<section className="grid  grid-cols-1 md:grid-cols-[1fr_40%] justify-center gap-14">
				<CartItemList />
				<div className="flex flex-col gap-14 h-max sticky top-[100px]">
					<CouponForm />
					<CartTotals />
				</div>
			</section>
		</>
	);
};

export default Cart;
