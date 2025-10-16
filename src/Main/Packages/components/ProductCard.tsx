import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { fetchPackageDetailsRequest } from "../slice";

interface ProductCardProps {
  product: {
    _id: string;
    modelName: string;
    finalPrice: number;
    price: number;
    photos: { url: string }[];
    availableSizes?: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const discount =
    product.price > product.finalPrice
      ? Math.round(((product.price - product.finalPrice) / product.price) * 100)
      : 0;

  const sizes = product.availableSizes
    ? product.availableSizes.split(",").map((s) => s.trim())
    : [];

  const handleClick = () => {
    dispatch(fetchPackageDetailsRequest(product._id));
    navigate(`/packages/pck/${product._id}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 flex flex-col"
    >
      {/* Carousel */}
      <div className="w-full aspect-[4/3]">
        {product.photos?.length ? (
          <Slider {...settings}>
            {product.photos.map((photo, idx) => (
              <div key={idx}>
                <img
                  src={photo.url}
                  alt={`${product.modelName}-${idx}`}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <img
            src="https://via.placeholder.com/300x200"
            alt={product.modelName}
            className="w-full h-full object-cover rounded-t-xl"
          />
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-sm sm:text-base mb-1 truncate text-gray-800">
          {product.modelName}
        </h3>

        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <p className="text-indigo-600 font-bold text-sm sm:text-base">
            ₹{product.finalPrice}
          </p>
          {discount > 0 && (
            <p className="text-gray-400 text-xs sm:text-sm line-through">
              ₹{product.price}
            </p>
          )}
        </div>

        {discount > 0 && (
          <p className="text-green-600 text-xs sm:text-sm font-medium mb-2">
            {discount}% OFF
          </p>
        )}

        {sizes.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {sizes.map((size, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm border border-gray-300 px-2 py-[2px] rounded-md text-gray-700"
              >
                {size}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
