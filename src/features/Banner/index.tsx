// features/Banner/index.tsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { fetchBannerRequest } from "./slice";

import BannerForm from "./components/BannerForm";
import BannerCard from "./components/BannerCard";

const BannerManager = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.banner);

  useEffect(() => {
    dispatch(fetchBannerRequest());
  }, [dispatch]);

  return (
    <div className="p-6 space-y-6">
      {/* 🔹 Create Banner Section */}
      <BannerForm />

      {/* 🔹 Display Banners */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Existing Banners</h2>
        {loading && <p>Loading banners...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.map((banner: any) => (
            <BannerCard key={banner._id} banner={banner} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerManager;
