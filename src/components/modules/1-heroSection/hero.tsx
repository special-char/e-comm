import React from "react";
import Image from "next/image";
import HeroImg from "../../../../public/images/hero1.png";
import Button from "../../button/button";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="bg-[#D18F62] grid py-12 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center">
      <div className="items-center justify-center flex xl:p-10 lg:p-9 md:p-6">
        <Image src={HeroImg} alt="heroSection" className="w-[50dvw]" />
      </div>
      <div className="flex flex-col pl-10 md:pt-10 pt-10">
        <p className="text-white xl:text-6xl xl:font-bold lg:text-5xl lg:font-bold md:text-3xl md:font-semibold text-2xl font-semibold">
          We Care & Share Love For Pets.
        </p>
        <div className="xl:pt-10 xl:text-3xl lg:pt-10 lg:text-2xl md:pt-6 md:text-lg pt-2 text-xs">
          <Button>Shop Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
