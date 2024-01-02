import React from "react";
import Image from "next/image";
import Box2 from "../../box/box2";
import TredImg1 from "../../../../public/images/trending-dog-1.jpg";
import TredImg2 from "../../../../public/images/trending-cat-2.jpg";
import TredImg3 from "../../../../public/images/trending-dog-3.jpg";
import Title from "../../title/title";

type Props = {};

const Trending = (props: Props) => {
  return (
    <section className="py-12 bg-[#FFE3BD]">
      <Title>Trending</Title>
      <div className="grid xl:grid-cols-3 xl:gap-5 lg:grid-cols-3 lg:gap-3 md:grid-cols-3 md:gap-2 grid-cols-1 gap-4">
        <Box2>
          <Image src={TredImg1} alt="trending image" className="rounded-xl " />
          <p>Outdoor Toys</p>
        </Box2>

        <Box2>
          <Image src={TredImg2} alt="trending image" className="rounded-xl" />
          <p>Vital Care</p>
        </Box2>

        <Box2>
          <Image src={TredImg3} alt="trending image" className="rounded-xl" />
          <p>Fresh & Frozen</p>
        </Box2>
      </div>
    </section>
  );
};

export default Trending;
