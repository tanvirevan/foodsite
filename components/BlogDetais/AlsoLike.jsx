import { getRecipesWithId } from "@/data/recipesWithId";
import Image from "next/image";
import Link from "next/link";

const recipesData = getRecipesWithId();

function getRecipesByCategory(recipeId, recipesData) {
  const targetRecipe = recipesData.find((recipe) => recipe.id === recipeId);
  if (!targetRecipe) {
    throw new Error("Recipe not found");
  }

  const { categoryId } = targetRecipe;

  const sameCategoryRecipes = recipesData.filter(
    (recipe) => recipe.categoryId === categoryId && recipe.id !== recipeId
  );

  let recipesToReturn = sameCategoryRecipes.slice(0, 4);

  if (recipesToReturn.length < 4) {
    const remainingSlots = 4 - recipesToReturn.length;

    const otherRecipes = recipesData.filter(
      (recipe) => recipe.categoryId !== categoryId && recipe.id !== recipeId
    );

    const randomFillers = shuffleArray(otherRecipes).slice(0, remainingSlots);

    recipesToReturn = [...recipesToReturn, ...randomFillers];
  }

  return recipesToReturn;
}

function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export default function AlsoLike({ recipe_id }) {
  const relatedRecipes = getRecipesByCategory(recipe_id, recipesData);

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8">You might also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {relatedRecipes.length > 0 ? (
          relatedRecipes.map((recipe) => (
            <Link href={`/category/recipes/${recipe.id}`} key={recipe.id}>
              <div>
                <div className="relative h-60 mb-2">
                  <Image
                    src={recipe.thumbnail}
                    alt={recipe.title}
                    className="w-full object-cover rounded-lg"
                    fill
                  />
                </div>
                <h3 className="font-semibold">{recipe.title}</h3>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 col-span-4">No related recipes found.</p>
        )}
      </div>
    </section>
  );
}
