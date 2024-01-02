import React from "react";
import Box from "../../box/box";
import Image from "next/image";
import Truck from "../../../../public/icons/truck.svg";
import Refund from "../../../../public/icons/refund.svg";
import Support from "../../../../public/icons/24hours.svg";

type Props = {};

const Feature = (props: Props) => {
  return (
    <section className="bg-[#FDFDFD] py-12 grid xl:grid-cols-3 xl:gap-5 lg:grid-cols-3 lg:gap-4 md:grid-cols-1 md:gap-4 grid-cols-1 gap-3 w-full justify-center items-center">
      <Box className="bg-[#E7D9FF] ">
        <Image src={Truck} alt="trucksvg" />
        <p>Free Shipping</p>
        <p>Get Free Delivery On every Products.</p>
      </Box>

      <Box className="bg-[#E7D9FF]">
        <Image src={Support} alt="trucksvg" />
        <p>Online Support</p>
        <p>Get 24/7 Online Support.</p>
      </Box>

      <Box className="bg-[#E7D9FF] ">
        <Image src={Refund} alt="trucksvg" />
        <p>Refund</p>
        <p>Refund Guarantee Under 5 Days.</p>
      </Box>
    </section>
  );
};

export default Feature;
