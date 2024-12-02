import Image from "next/image";
import Svg from "../Svg";
import Link from "next/link";
import { getRecipesWithId } from "@/data/recipesWithId";
const Racipes = require('@/data/recipes.json'); 
const recipesWithId = getRecipesWithId()

function getTopRecipesByRating(recipesWithId) 
  {

    const validRecipes = recipesWithId.filter((Rec) => Rec.rating && Rec.rating.average_rating);

    validRecipes.sort((a, b) => b.rating.average_rating - a.rating.average_rating);

    return validRecipes.slice(0, 3);
  }
  
  export default function SuperDelicious()
  {
   const topRecipes = getTopRecipesByRating(recipesWithId);

   return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {
          topRecipes.map((Rec) => (
            <Link href={`/category/recipes/${Rec.id}`} key={Rec.id}>
              <div >
                <div className="relative w-full h-[300px]">
                  <Image 
                    src={Rec.thumbnail} 
                    alt="Chicken Meatball with Creamy Cheese"
                    className="w-full h-[300px] object-cover rounded-lg mb-4"
                    fill
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{Rec.title}</h3>
                <div className="flex items-center text-yellow-500 mb-2">
                {
                  Array.from({ length: Math.round(Rec.rating.average_rating) }, (_, index) => 
                    (
                      <Svg key={index} />
                    ))
                }
                </div>
                <p className="text-gray-600">{Rec.cooking_time}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </section>
   );
 };
