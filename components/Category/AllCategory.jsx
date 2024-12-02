import Image from "next/image";
import Link from "next/link";
export default function DetailsCategory({item})
 {
   return (
    <Link href={`/category/${item.name}`}>
      <div className="text-center">
        <div className="w-[224px] h-[224px] overflow-hidden rounded-full mb-4 relative cursor-pointer">
          <Image 
            src={item.image} 
            alt={item.name}
            className="transform transition-transform duration-300 ease-in-out hover:scale-110"
            fill
          />
        </div>
        <h2 className="text-xl font-semibold">{item.name}</h2>
      </div>
    </Link>
   );
 };