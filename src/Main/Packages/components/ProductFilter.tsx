import React, { useState } from "react";

interface FilterProps {
  onFilterChange: (filters: any) => void;
  availableSizes: string[];
}

const ProductFilter: React.FC<FilterProps> = ({ onFilterChange, availableSizes }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const handleApply = () => {
    onFilterChange({
      size: selectedSize,
      maxPrice,
    });
  };

  const handleReset = () => {
    setSelectedSize(null);
    setMaxPrice(null);
    onFilterChange({
      size: null,
      maxPrice: null,
    });
  };

  return (
    <div className="w-full bg-white border rounded-xl shadow-md p-5">
      <h3 className="font-bold text-gray-800 text-lg mb-4">Filters</h3>

      {/* Size Filter */}
      <div className="mb-5">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Size</h4>
        <div className="flex flex-wrap gap-2">
          {availableSizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size === selectedSize ? null : size)}
              className={`text-sm px-3 py-1.5 rounded-lg border transition-colors duration-200 ${
                selectedSize === size
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Max Price Filter */}
      <div className="mb-5">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Max Price</h4>
        <input
          type="number"
          placeholder="Enter price"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={maxPrice ?? ""}
          onChange={(e) => setMaxPrice(Number(e.target.value) || null)}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={handleApply}
          className="flex-1 bg-indigo-600 text-white text-sm py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Apply
        </button>
        <button
          onClick={handleReset}
          className="flex-1 bg-gray-200 text-gray-700 text-sm py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
