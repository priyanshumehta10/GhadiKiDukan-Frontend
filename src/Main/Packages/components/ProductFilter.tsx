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

  return (
    <div className="w-full bg-white border rounded-lg shadow-sm p-4">
      <h3 className="font-semibold text-gray-800 mb-3">Filters</h3>

      {/* Size */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Size</h4>
        <div className="flex flex-wrap gap-2">
          {availableSizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size === selectedSize ? null : size)}
              className={`text-xs px-2 py-1 rounded-md border ${
                selectedSize === size
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Max Price</h4>
        <input
          type="number"
          placeholder="Enter price"
          className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
          value={maxPrice ?? ""}
          onChange={(e) => setMaxPrice(Number(e.target.value) || null)}
        />
      </div>

      <button
        onClick={handleApply}
        className="w-full bg-indigo-600 text-white text-sm py-1.5 rounded-md hover:bg-indigo-700 transition"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default ProductFilter;
