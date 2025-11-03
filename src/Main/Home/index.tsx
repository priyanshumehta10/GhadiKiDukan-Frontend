import { useDispatch, useSelector } from "react-redux";
import { fetchHomeDataRequest, fetchReviewsRequest, fetchHomeImageRequest } from "./slice";
import { useEffect, useRef } from "react";
import type { RootState } from "../../redux/store";
import MainHome from "./components/MainHome";
import ProductCard from "./components/ProductCard";
import CategoryGrid from "./components/CategoryGrid";
import HomeReviews from "./components/HomeReviews";

export default function Home() {
  const dispatch = useDispatch();
  const fetchData = useRef(false);
  const { loadingPck, data } = useSelector((state: RootState) => state.home);
  const { loading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!fetchData.current) {
      fetchData.current = true;
      dispatch(fetchHomeDataRequest());
      dispatch(fetchReviewsRequest());
      dispatch(fetchHomeImageRequest());
    }
  }, [dispatch]);

  return (
    <div>
      {(loading || loadingPck) ? (
        <div className="h-screen flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          <MainHome />

          {/* ✨ Classy Section Heading */}
          <div className="text-center mt-12 mb-8 relative">
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-wide font-[Poppins] inline-flex items-center justify-center gap-3">
              <span className="block w-2 h-10 bg-amber-950 rounded-full"></span>
              <span className="relative">
                Featured <span className="font-bold">Products</span>
              </span>
              <span className="block w-2 h-10 bg-amber-950 rounded-full"></span>
            </h2>

            <p className="text-gray-500 mt-2 text-base font-medium">
              Discover our latest and most popular collections
            </p>
          </div>


          {/* 🛍️ Product Cards Row */}
          <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 pb-2 px-4">
            {data?.map((p: any) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        </>
      )}
      <CategoryGrid />
      <HomeReviews />
    </div>
  );
}
