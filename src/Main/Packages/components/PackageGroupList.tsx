import { useState, useMemo } from "react";
import ProductFilter from "./ProductFilter";
import ProductCard from "./ProductCard";

const PackageGroupList = ({ data }: { data: any[] }) => {
  const [filters, setFilters] = useState<any>({});

  const uniqueSizes = useMemo(() => {
    const all = data
      ?.map((p) => (p.availableSizes ? p.availableSizes.split(",") : []))
      ?.flat()
      ?.map((s) => s.trim());
    return Array.from(new Set(all));
  }, [data]);

  const filteredProducts = useMemo(() => {
    return data?.filter((p) => {
      const passSize =
        !filters.size ||
        (p.availableSizes && p.availableSizes.includes(filters.size));
      const passPrice =
        !filters.maxPrice || p.finalPrice <= filters.maxPrice;
      return passSize && passPrice;
    });
  }, [data, filters]);

  return (
    <div className="flex gap-6 p-6">
      <ProductFilter onFilterChange={setFilters} availableSizes={uniqueSizes} />

      <div className="grid grid-cols-4 gap-4 flex-1">
        {filteredProducts?.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default PackageGroupList;
