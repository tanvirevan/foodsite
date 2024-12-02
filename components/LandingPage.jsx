
import Hero from "./landing/Hero";
import SuperDelicious from "./landing/SuperDelicious";
import PopularCategories from "./landing/PopularCategories";
import Join from "./landing/Join";
import HandPicked from "./landing/HandPicked";
import LatestRecipes from "./landing/LatestRecipes";

export default function LandingPage()
 {
   return (
    <main className="container mx-auto px-4 mt-[100px]">
      <Hero />

      <SuperDelicious />

      <PopularCategories />

      <Join />

      <HandPicked />

      <LatestRecipes />
    </main>
   );
 };
