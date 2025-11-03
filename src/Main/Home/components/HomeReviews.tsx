import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";

type Review = {
  _id: string;
  username: string;
  message: string;
  image?: {
    url: string;
    public_id: string;
  };
};

const HomeReviews: React.FC = () => {
  const { Reviewsdata } = useSelector((state: RootState) => state.home);

  return (
    <div className="bg-[#F9F9FB] py-14 px-6">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-12 font-[Poppins]"
      >
        Loved by Our <span className="font-bold">Customers</span>
      </motion.h2>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {Reviewsdata?.map((review: Review, index: number) => (
          <motion.div
            key={review._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
          >
            {review.image?.url && (
              <img
                src={review.image.url}
                alt={review.username}
                className="h-40 w-full object-cover rounded-t-2xl"
              />
            )}
            <div className="p-5 text-center">
              <h3 className="text-base font-semibold text-gray-800">
                {review.username}
              </h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed line-clamp-3">
                {review.message}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeReviews;
