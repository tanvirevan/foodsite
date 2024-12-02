import Image from "next/image";
import Link from "next/link";

export default function Recipes({ CategoryByRecipes }) {
  return (
    <>
      {
        CategoryByRecipes.map((Rec) => (
          <div key={Rec.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <Link href={`/category/recipes/${Rec.id}`} >
              <div className="relative h-48">
                <Image 
                  src={Rec.thumbnail}
                  alt={Rec.title} 
                  className="object-cover"
                  fill
                />
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">{Rec.title}</h2>
              </div>
            </Link>
          </div>
        ))
      }
    </>
  );
}
