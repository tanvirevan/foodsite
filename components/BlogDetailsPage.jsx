import AsloLike from "./BlogDetais/AlsoLike";
import Article from "./BlogDetais/Article";

export default function BlogDetailsPage({recipe_id})
 {
   return (
      <main className="container mx-auto px-4 py-8 mt-[70px]">
        <Article recipe_id = {recipe_id}/>
        <AsloLike recipe_id = {recipe_id}/>
      </main>
   );
 };
