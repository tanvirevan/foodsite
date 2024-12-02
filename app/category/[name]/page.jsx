import RecipesPage from "@/components/RecipesPage";

export default function CategoryByRacipesPage({params: {name}})
 {
   return (
     <div>
        <RecipesPage name = {name} />
     </div>
   );
 };
