import { secureHeapUsed } from "crypto";
import React from "react";
import Image from "next/image";
import Button from "../../button/button";
import Groom from "../../../../public/images/appo.jpg";

type Props = {};

const BookAppo = (props: Props) => {
  return (
    <section className="bg-[#D18F62] flex flex-wrap py-12 xl:flex-nowrap lg:flex-nowrap md:flex-wrap">
      <div className="py-6">
        <Image
          src={Groom}
          alt=""
          className="xl:w-[45dvw] lg:w-[45dvw] w-full hover:shadow-xl hover:scale-105 transition-all duration-500 hover:border-0 ease-in-out rounded-xl border-2 border-black border-dashed"
        />
      </div>
      <div className="flex flex-col xl:w-[50dvw] lg:w-[50dvw] w-full justify-center xl:px-10 lg:px-10 md:px-2 px-2">
        <p className="text-white xl:text-5xl xl:font-bold lg:text-4xl lg:font-bold md:text-4xl md:font-semibold text-2xl font-semibold pt-5">
          Get your groom on!
        </p>
        <p className="text-white xl:text-xl xl:font-normal xl:py-6 lg:text-xl lg:font-normal lg:py-6 md:text-xl md:font-normal md:py-6 text-base font-normal py-2">
          We offer professional grooming services for both dogs and cats! stop
          by the store or call us to book your appointment.
        </p>
        <Button className="xl:py-6 lg:py-6 md:py-3 py-2">Book Now</Button>
      </div>
    </section>
  );
};

export default BookAppo;
