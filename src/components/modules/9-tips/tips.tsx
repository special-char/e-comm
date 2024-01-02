import React from "react";
import Title from "../../title/title";
import Box4 from "../../box/box4";
import Image from "next/image";
import Tip1 from "../../../../public/images/tip1.jpg";
import Tip2 from "../../../../public/images/tip2.jpg";
import Tip3 from "../../../../public/images/tip3.jpg";

type Props = {};

const Tips = (props: Props) => {
  return (
    <section className="py-12 w-full bg-[#FDFDFD]">
      <Title>Tips & Advice</Title>
      <div className="grid gap-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 grid-cols-1">
        <Box4 className="">
          <Image
            src={Tip1}
            alt="tip"
            className="rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-md ease-in-out"
          />
          <p>Tick Removal Tips.</p>
          <p>
            Most ticks have a preferred host at different stages of their lives,
            such as deer or mice…
          </p>
        </Box4>

        <Box4>
          <Image
            src={Tip2}
            alt="tip"
            className="rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-md ease-in-out"
          />
          <p>How to Travel with Cats.</p>
          <p>
            Most ticks have a preferred host at different stages of their lives,
            such as deer or mice…
          </p>
        </Box4>

        <Box4>
          <Image
            src={Tip3}
            alt="tip"
            className="rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-md ease-in-out"
          />
          <p>Holiday Food for Dogs.</p>
          <p>
            Most ticks have a preferred host at different stages of their lives,
            such as deer or mice…
          </p>
        </Box4>
      </div>
    </section>
  );
};

export default Tips;
