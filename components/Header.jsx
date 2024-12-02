import Image from "next/image";
import Link from "next/link";

export default function Header()
 {
   return (
      <header className="container w-full mx-auto px-4 py-4 shadow-lg fixed top-0 right-0 left-0 bg-white z-50 rounded-md">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold">
          <div className="flex">
            <div className="border-[1px] rounded-full border-[#ea580c]">
            <Image 
              src="/logo.png"
              alt="FoodSite" 
              className="h-10" 
              width={40}
              height={40} 
            />
            </div>
            <span className="text-gray-400">|</span>
            <div>
              <div className="text-[#ea580c] text-base ml-1">
                Food<span className="text-black text-2xl">Site</span>
              </div>

            </div>

          </div>
          </Link>

          <ul className="hidden md:flex space-x-6">
            <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link href="/category" className="hover:text-orange-500">Categories</Link></li>
            <li><Link href="/recipes" className="hover:text-orange-500">Latest Recipes</Link></li>
          </ul>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </Link>
          </div>
        </nav>
      </header>
   );
 };
