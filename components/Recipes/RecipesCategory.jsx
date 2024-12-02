
export default function RecipesCategory({name, TotalRec})
 {
   return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">
          {name} <span className="text-gray-500 text-2xl font-normal">({TotalRec} Recipes)</span>
        </h1>
        <p className="text-gray-600">
          One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good Italian meal. Here
          is a recipe I created after having this dish in a restaurant. Enjoy!
        </p>
      </div>
    </div>
   );
 };
