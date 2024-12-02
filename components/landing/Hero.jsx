import { getRecipesWithId } from "@/data/recipesWithId";
import Image from "next/image";
import Link from "next/link";

const Racipes = getRecipesWithId()

function getMaxRatingRecipe(Racipes) 
  {
    let maxRatingRecipe = null; 
    let maxRating = -Infinity; 

    Racipes.forEach((Rec) => 
      {
        if (Rec.rating && Rec.rating.rating_count > maxRating) 
          {
            maxRating = Rec.rating.rating_count; 
            maxRatingRecipe = Rec; 
          }
      });

    return maxRatingRecipe; 
  }


export default function MainHeader() 
  {
    const selectedRacipes = getMaxRatingRecipe(Racipes);

    return (
      <section className="mb-16 bg-orange-50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px]">
            <Image 
              src={selectedRacipes.thumbnail} 
              alt="Mighty Super Cheesecake" 
              className="w-full h-[450px] object-cover rounded-lg"
              fill
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{selectedRacipes ? selectedRacipes.title : 'Loading...'}</h1>
            <p className="text-gray-600 mb-4">
              {selectedRacipes ? selectedRacipes.description : 'Loading description...'}
            </p>
            <Link href={`/category/recipes/${selectedRacipes.id}`}
              className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600">
              View Recipe
            </Link>
          </div>
        </div>
      </section>
    );
  }
