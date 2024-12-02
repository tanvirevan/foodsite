import BlogDetailsPage from "@/components/BlogDetailsPage";

export default function RecipeDetailsPage({params: {recipe_id}})
 {
   return (
     <div>
        <BlogDetailsPage recipe_id = {recipe_id}/>
     </div>
   );
 };
