import { getRecipesWithId } from "@/data/recipesWithId";
import Image from "next/image";
import Link from "next/link";
import categoriesData from "@/data/categories.json";
const recipesData = getRecipesWithId()

function getlatestRecipes(Recipes) 
  {
    return Recipes.slice().sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date));
  }

export default function LatestRecipes() {
  const latestRecipes = getlatestRecipes(recipesData).slice(0, 4);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {latestRecipes.map((Rec) => {
          const category = categoriesData.find((item) => item.id === Rec.category_id);
          return (
            <Link href={`/category/recipes/${Rec.id}`} key={Rec.id}>
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
    </section>
  );
}
