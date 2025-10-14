import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";

export default function BucketListAdventures() {
  const { dataImage } = useSelector((state: RootState) => state.home);
  const images = Array.isArray(dataImage) ? dataImage : [];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, [images]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Responsive height */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[480px]">
        <div
          className="w-full h-full flex transition-transform duration-700"
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
      </div>
    </div>
  );
}
