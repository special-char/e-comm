import React from "react";
import Box5 from "../../box/box5";
import Title from "../../title/title";
import Image from "next/image";
import Groom from "../../../../public/icons/groom.svg";
import Daycare from "../../../../public/icons/daycare.svg";
import Walking from "../../../../public/icons/walking.svg";
import Boarding from "../../../../public/icons/boarding.svg";
import Traning from "../../../../public/icons/training.svg";
import Veterinary from "../../../../public/icons/veterinary.svg";

type Props = {};

const Services = (props: Props) => {
  return (
    <section className="py-12 bg-[#FFE3BD]">
      <Title>Services</Title>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6 ">
        <Box5>
          <Image src={Groom} alt="service" />
          <p>Grooming</p>
        </Box5>

        <Box5>
          <Image src={Daycare} alt="service" />
          <p>Daycare</p>
        </Box5>

        <Box5>
          <Image src={Walking} alt="service" />
          <p>Walking</p>
        </Box5>

        <Box5>
          <Image src={Boarding} alt="service" />
          <p>Boarding</p>
        </Box5>

        <Box5>
          <Image src={Traning} alt="service" />
          <p>Traning</p>
        </Box5>

        <Box5>
          <Image src={Veterinary} alt="service" />
          <p>Veterinary</p>
        </Box5>
      </div>
    </section>
  );
};

export default Services;
