import Hero from "@/components/modules/1-heroSection/hero";
import Feature from "@/components/modules/2-Features/feature";
import Trending from "@/components/modules/3-trendingSection/trending";
import ShopByPets from "@/components/modules/4-shopByPets/shopByPets";
import BestSelling from "@/components/modules/5-bestSelling/best";
import BookAppo from "@/components/modules/8-bookAnAppo/bookAnAppo";
import Services from "@/components/modules/6-Services/services";
import Deal from "@/components/modules/7-petsDeals/deals";
import Tips from "@/components/modules/9-tips/tips";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Feature></Feature>
      <Trending></Trending>
      <ShopByPets></ShopByPets>
      <BestSelling></BestSelling>
      <Services></Services>
      <Deal></Deal>
      <BookAppo></BookAppo>
      <Tips></Tips>
    </main>
  );
}
