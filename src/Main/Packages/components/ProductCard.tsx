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
    }

  // 🧭 Carousel settings
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
    <div onClick={handleClick} className="min-w-[260px] max-w-[260px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200" >
      {/* 🖼 Carousel for product photos */}
      <div className="w-full h-48"  >
        {product.photos?.length ? (
          <Slider {...settings}>
            {product.photos.map((photo, index) => (
              <div key={index}>
                <img
                  src={photo.url}
                  alt={`${product.modelName}-${index}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <img
            src="https://via.placeholder.com/300x200"
            alt={product.modelName}
            className="w-full h-48 object-cover"
          />
        )}
      </div>

      {/* 🛍 Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-1 truncate text-gray-800">
          {product.modelName}
        </h3>

        <div className="flex items-center gap-2 mb-1">
          <p className="text-indigo-600 font-bold text-sm">
            ₹{product.finalPrice}
          </p>
          {discount > 0 && (
            <p className="text-gray-400 text-xs line-through">
              ₹{product.price}
            </p>
          )}
        </div>

        {discount > 0 && (
          <p className="text-green-600 text-xs font-medium mb-2">
            {discount}% OFF
          </p>
        )}

        {sizes.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {sizes.map((size, index) => (
              <span
                key={index}
                className="text-xs border border-gray-300 px-2 py-[1px] rounded-md text-gray-700"
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
