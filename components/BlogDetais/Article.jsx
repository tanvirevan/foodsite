import { getRecipesWithId } from "@/data/recipesWithId";
import Image from "next/image";

export default function Article({recipe_id})
 {
   const recipesData = getRecipesWithId();

    const RecipeData = recipesData.find((recipe) => recipe.id === recipe_id);
   return (
    <article>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">A full guide for a better and smarter cooking</h1>
      <div className="flex items-center space-x-4 mb-6">
        <Image 
          src="/avater.png" 
          alt="Author" 
          className="w-8 h-8 rounded-full"
          width={100}
          height={100}
        />
        <span className="text-gray-600">{RecipeData.author}</span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-600">{RecipeData.cooking_time}</span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-600">{RecipeData.published_date}</span>
      </div>
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 inline-block mr-2" 
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
            Share
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 inline-block mr-2" 
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
            Save
          </button>
        </div>
      </div>
      <div className="relative h-[845px] mb-8">
        <Image 
          src="/single-banner.jpg" 
          alt="Cooking Image" 
          className="w-full rounded-lg" 
          fill
        />
      </div>
      <p className="text-gray-600 mb-8">
        One thing I learned living in the Catskills section of Brooklyn, NY was how to cook a good Italian meal. Here
        is a recipe I created after having this dish in a restaurant. Enjoy!
      </p>

      <h2 className="text-3xl font-bold mb-4">Before you begin</h2>
      <p className="mb-8">
        Food qualities braise chicken cuts bowl through slices butternut snack. Tender meat juicy dinners. One-pot low
        heat plenty of time adobo fat raw soften fruit. sweet renders bone-in marrow richness kitchen, fricassee
        basted putter.
      </p>

      <h2 className="text-3xl font-bold mb-4">Here are the basics</h2>
      <p className="mb-8">
        Juicy meatballs brisket slammin&apos; baked shoulder. Juicy smoker soy sauce burgers brisket. polenta mustard hunk
        greens. Wine technique snack skewers chuck excess. Oil heat slowly. slices natural delicious, set aside magic
        tbsp skillet, bay leaves brown centerpiece. fruit soften edges frond slices onion snack pork steem on wines
        excess technique cup; Cover smoker soy sauce.
      </p>

      <blockquote className="text-3xl font-bold italic text-center my-12 px-4">
        &quot;One cannot think well, love well, sleep well, if one has not dined well.&quot;
      </blockquote>
      <p className="text-center text-gray-600 mb-12">— Virginia Woolf, A Room of One&apos;s Own</p>

      <h2 className="text-3xl font-bold mb-4">{RecipeData.title}</h2>
      <p className="mb-8">
        Gastronomy atmosphere set aside. Slice butternut cooking home. Delicious romantic undisturbed raw platter will
        meld. Thick Skewers skillet natural, smoker soy sauce wait roux. slices rosette bone-in simmer. Romantic
        fall-off-the-bone butternut chuck under romas, Skewers on culinary experience.
      </p>

      <div className="relative h-[340px] mb-8">
        <Image 
          src={RecipeData.thumbnail} 
          alt="Cooking in kitchen"
          className="w-full rounded-lg max-w-xl mx-auto" 
          fill
        />
      </div>

      <p className="mb-8">
        Juicy meatballs brisket slammin&apos; baked shoulder. Juicy smoker soy sauce burgers brisket. polenta mustard hunk
        greens. Wine technique snack skewers chuck excess. Oil heat slowly. slices natural delicious, set aside magic
        tbsp skillet, bay leaves brown centerpiece. fruit soften edges frond slices onion snack pork steem on wines
        excess technique cup; Cover smoker soy sauce.
      </p>
    </article>
   );
 };
