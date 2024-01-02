import React from "react";
import Box3 from "../../box/box3";
import Title from "../../title/title";

type Props = {};

const ShopByPets = (props: Props) => {
  return (
    <section className="py-12 bg-[#FDFDFD]">
      <Title>Shop By Pets</Title>
      <div className="grid xl:grid-cols-6 lg:grid-cols-6 lg:gap-2 md:grid-cols-3 md:gap-4 grid-cols-2 gap-2">
        <Box3>
          <a href="/product-category/dog/">🐕</a>
          <a href="/product-category/dog/">Dogs</a>
        </Box3>

        <Box3>
          <a href="/product-category/cat/">🐈‍</a>
          <a href="/product-category/cat/">Cats</a>
        </Box3>

        <Box3>
          <a href="/product-category/small/">🐇</a>
          <a href="/product-category/small/">Small</a>
        </Box3>

        <Box3>
          <a href="/product-category/fish/">🐟</a>
          <a href="/product-category/fish/">Fish</a>
        </Box3>

        <Box3>
          <a href="/product-category/reptile/">🦎</a>
          <a href="/product-category/reptile/">Reptile</a>
        </Box3>

        <Box3>
          <a href="/product-category/bird/">🦜</a>
          <a href="/product-category/bird/">Bird</a>
        </Box3>
      </div>
    </section>
  );
};

export default ShopByPets;
