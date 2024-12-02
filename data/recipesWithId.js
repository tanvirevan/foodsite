import recipes from './recipes.json';

function getRecipesWithId() 
  {

    const categoryIdMap = new Map();

    const updatedRecipes = recipes
      .filter((recipe) => recipe.category_id) 
      .map((recipe) => 
        {
          if (!categoryIdMap.has(recipe.category_id)) 
            {
              categoryIdMap.set(recipe.category_id, 1);
            }


          const Id = `${recipe.category_id}R${categoryIdMap.get(recipe.category_id)}`;


          categoryIdMap.set(recipe.category_id, categoryIdMap.get(recipe.category_id) + 1);

          return {
            ...recipe,
            id: Id,
          };
      });

    return updatedRecipes;
  }

export { getRecipesWithId };
