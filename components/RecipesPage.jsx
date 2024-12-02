import RecipesCategory from './Recipes/RecipesCategory';
import Recipes from './Recipes/Recipes';
import { getRecipesWithId } from '@/data/recipesWithId';
const categoriesData = require('@/data/categories.json');
const recipesData = getRecipesWithId()

export default function RecipesPage({name})
 {
  const categoryId = categoriesData.find((item) => (item.name === name))?.id;
  const recipes = recipesData.filter((Rec) => Rec.category_id === categoryId);

   return (
      <main className="container mx-auto px-4 py-8 mt-[100px] "  style={{ minHeight: `calc(100vh - 315px)` }}>
        <div className="flex justify-between items-center mb-8">
          <RecipesCategory name = {name} TotalRec = {recipes.length}/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Recipes CategoryByRecipes = {recipes}/>
        </div>
      </main>
   );
 };
