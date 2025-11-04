import { useDispatch } from "react-redux";
import { fetchByTagRequest } from "../slice";
import { useNavigate } from "react-router-dom";
import {resetSearchPackageState} from "../../Packages/slice";
const categories = [
  { name: "Watches", img: "https://res.cloudinary.com/do8shaoon/image/upload/v1760106330/productGroups/jwsbwbutmrrmtxbuflle.webp" },
  { name: "Perfume", img: "https://res.cloudinary.com/do8shaoon/image/upload/v1760106330/productGroups/jwsbwbutmrrmtxbuflle.webp" },
  { name: "Belt & Wallet", img: "https://res.cloudinary.com/do8shaoon/image/upload/v1760106330/productGroups/jwsbwbutmrrmtxbuflle.webp" },
  { name: "Sunglasses", img: "https://res.cloudinary.com/do8shaoon/image/upload/v1760106330/productGroups/jwsbwbutmrrmtxbuflle.webp" },
  { name: "Electronic Items", img: "https://res.cloudinary.com/do8shaoon/image/upload/v1760106330/productGroups/jwsbwbutmrrmtxbuflle.webp" },
  { name: "Shoes", img: "https://res.cloudinary.com/do8shaoon/image/upload/v1760106330/productGroups/jwsbwbutmrrmtxbuflle.webp" },
  { name: "Formal Shoes", img: "https://res.cloudinary.com/do8shaoon/image/upload/v1760106330/productGroups/jwsbwbutmrrmtxbuflle.webp" },
  { name: "Flip Flop", img: "https://res.cloudinary.com/do8shaoon/image/upload/v1760106330/productGroups/jwsbwbutmrrmtxbuflle.webp" },
];

export default function CategoryGrid() {
  const dispatch = useDispatch();
  const navigate =  useNavigate();

const handleClick = (name: string) => {
  // Encode the name for URL
  const encodedName = encodeURIComponent(name);

  dispatch(fetchByTagRequest(encodedName));
  dispatch(resetSearchPackageState());

  navigate(`/packages`);
};


  return (
    <div className="px-4 py-10">
      {/* ✨ Section Heading */}
    
      <div className="text-center mt-12 mb-8 relative">
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-wide font-[Poppins] inline-flex items-center justify-center gap-3">
              <span className="block w-2 h-10 bg-amber-950 rounded-full"></span>
              <span className="relative">
                Shop by <span className="font-bold">Category</span>
              </span>
              <span className="block w-2 h-10 bg-amber-950 rounded-full"></span>
            </h2>

            <p className="text-gray-500 mt-2 text-base font-medium">
          Explore our top collections — stylish, elegant, and trending
            </p>
          </div>

      {/* 🛍️ Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={()=>handleClick(cat.name)}

            className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-300"></div>
            <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold drop-shadow-lg">
              {cat.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
