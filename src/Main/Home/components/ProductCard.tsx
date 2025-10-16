import React from "react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: {
    _id: string;
    modelName: string;
    finalPrice: number;
    price: number;
    photos: { url: string }[];
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const image = product.photos?.[0]?.url || "https://via.placeholder.com/300x200";
  const discount =
    product.price > product.finalPrice
      ? Math.round(((product.price - product.finalPrice) / product.price) * 100)
      : 0;

  const handleClick = () => {
    navigate(`/packages/pck/${product._id}`);
  }

  return (
    <div onClick={handleClick} className="cursor-pointer min-w-[260px] max-w-[260px] bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.03]">
      <img
        src={image}
        alt={product.modelName}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-base mb-1 truncate text-gray-800">
          {product.modelName}
        </h3>

        <div className="flex items-center gap-2">
          <p className="text-indigo-600 font-bold text-base">
            ₹{product.finalPrice}
          </p>
          {discount > 0 && (
            <p className="text-gray-400 text-sm line-through">
              ₹{product.price}
            </p>
          )}
        </div>

        {discount > 0 && (
          <p className="text-green-600 text-sm font-medium mt-1">
            {discount}% OFF
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
