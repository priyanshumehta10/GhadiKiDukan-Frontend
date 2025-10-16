import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function BucketListAdventures() {
  const { dataImage } = useSelector((state: RootState) => state.home);
  const images = Array.isArray(dataImage) ? dataImage : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  if (images.length === 0) return null;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel container */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[480px] relative">
        {/* Sliding images */}
        <div
          className="w-full h-full flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((item, index) => (
            <div key={index} className="min-w-full h-full flex-shrink-0">
              <img
                src={item.url}
                alt={`carousel-${index}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* View Products button (always visible on carousel) */}
        <button
          className="absolute bottom-5 right-5 bg-white/80 backdrop-blur-md text-black font-semibold px-5 py-2 rounded-full shadow-md hover:bg-black hover:text-white transition-all z-10"
          onClick={() => navigate("/packages")}
        >
          View Products
        </button>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/70 hover:bg-black hover:text-white text-black p-2 rounded-full shadow-md transition-all z-10"
        >
          <LeftOutlined />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/70 hover:bg-black hover:text-white text-black p-2 rounded-full shadow-md transition-all z-10"
        >
          <RightOutlined />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
