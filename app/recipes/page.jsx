import { getRecipesWithId } from "@/data/recipesWithId";
import Image from "next/image";
import Link from "next/link";
const recipesData = getRecipesWithId();
const categoriesData = require('@/data/categories.json');

function getlatestRecipes(Recipes) 
  {
    return Recipes.slice().sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date));
  }

export default function CategoryByRacipesPage()
 {
   const latestRecipes = getlatestRecipes(recipesData);
   return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
    <h1 className="text-5xl font-bold mb-12">Latest Recipes</h1>

    <div className="grid md:grid-cols-4 gap-8">
        {latestRecipes.map((Rec) => {
          const category = categoriesData.find((item) => item.id === Rec.category_id);
          return (
            <Link href={`/category/recipes/${Rec.id}`} key={Rec.category_id}>
              <div>
                <div className="relative w-full h-[300px]">
                  <Image
                    src={Rec.thumbnail}
                    alt="Strawberry Cream"
                    className="object-cover rounded-lg mb-4"
                    fill
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{Rec.title}</h3>
                {category && <p className="text-gray-600">{category.name}</p>}
              </div>
            </Link>
          );
        })}
      </div>
    </main>
   );
 };