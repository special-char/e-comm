import React from "react";
import SubmitButton from "../common/formElements/SubmitButton";
import Input from "../common/formElements/Input";

type Props = {};

const CouponForm = (props: Props) => {
  async function couponFormSubmit(formData: FormData) {
    "use server";

    const rawFormData = {
      coupon: formData.get("coupon"),
    };

    console.log("formdata", rawFormData);

    // mutate data
    // revalidate cache
  }
  return (
    <div className="flex flex-col gap-2  bg-gray/5 rounded-lg  px-6 py-4 ">
      <p className="font-semibold text-heading6">Coupon</p>
      <form className="flex flex-col gap-4 py-2" action={couponFormSubmit}>
        <span>Enter your coupon code if you have one.</span>
        <Input name="coupon" placeholder="Coupon Code" />
        <div>
          <SubmitButton variant="fill" color="green" className="!rounded-xl">
            Apply Coupon
          </SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default CouponForm;
