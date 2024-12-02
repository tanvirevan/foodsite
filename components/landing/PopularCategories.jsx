import Image from "next/image";
import Link from "next/link";
const Racipes = require('@/data/recipes.json');
const categories = require('@/data/categories.json');

function getTopCategoriesByRecipeCount(Racipes) {
  const groupedRecipes = Racipes.reduce((acc, Rec) => 
    {
      if (!acc[Rec.category_id]) 
        {
          acc[Rec.category_id] = [];
        }
      acc[Rec.category_id].push(Rec);
      return acc;
    }, {});

  const categoryCounts = Object.entries(groupedRecipes).map(([category_id, recipes]) => 
    {
      return { category_id, count: recipes.length };
    });

  categoryCounts.sort((a, b) => b.count - a.count);

  const topCategories = categoryCounts.slice(0, 6);

  const topCategoriesWithRecipes = topCategories.map((category) => 
    {
      return {
        category_id: category.category_id,
        recipes: groupedRecipes[category.category_id],
      };
    });

  return topCategoriesWithRecipes;
}

export default function PopularCategories() 
  {
    const topCategories = getTopCategoriesByRecipeCount(Racipes);

    return (
      <section className="mb-16">
        <div className="flex justify-between items-top">
          <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
          <Link href="/category" className="text-orange-500">View All</Link>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {
            topCategories.map((category) => 
              {
                const categoryData = categories.find(cat => cat.id === category.category_id);

                if (categoryData) {
                  return (
                    <Link href={`/category/${categoryData.name}`} key={category.category_id}>
                      <div className="cursor-pointer text-center group">
                        <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
                          <Image
                            src={categoryData.image}
                            alt={categoryData.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            width={100}
                            height={100} 
                          />
                        </div>
                        <p className="transition-transform duration-300 group-hover:scale-105">{categoryData.name}</p>
                      </div>
                    </Link>
                  );
                }
                return null;
              })
          }
        </div>
      </section>
    );
  }
