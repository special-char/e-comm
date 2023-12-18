import CartTotals from "@/components/CartTotals";
import CouponForm from "@/components/CouponForm";
import CartItemList from "@/containers/CartItemList";

type Props = {};

const Cart = (props: Props) => {
  return (
    <section className="grid  grid-cols-1 md:grid-cols-[1fr_40%] justify-center gap-14">
      <CartItemList />
      <div className="flex flex-col gap-14 h-max sticky top-[100px]">
        <CouponForm />
        <CartTotals />
      </div>
    </section>
  );
};

export default Cart;
