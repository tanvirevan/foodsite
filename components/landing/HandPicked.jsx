import { getRecipesWithId } from "@/data/recipesWithId";
import Image from "next/image";
import Link from "next/link";
const recipesData = getRecipesWithId();
export default function HandPicked()
 {
   const handPickedRecipes = recipesData.slice(0, 2);


   return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">Hand-Picked Collections</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {
          handPickedRecipes.map((Rec) => (

              <div key={Rec.id} className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer h-[400px]">
                <Link href={`/category/recipes/${Rec.id}`}>
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={Rec.thumbnail}
                      alt="Sushi Combos"
                      className="rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                      fill
                    />
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
                    <h3 className="text-xl font-semibold mb-2">{Rec.title}</h3>
                    <div>
                    <button className="text-orange-300 hover:underline">View Collection</button>
                    </div>
                  </div>
                </Link>
              </div>
          ))
        }
      </div>
    </section>
   );
 };
