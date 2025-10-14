// features/Banner/components/BannerCard.tsx
import { useDispatch } from "react-redux";
import { deleteBannerRequest } from "../slice";

type BannerCardProps = {
  banner: {
    _id: string;
    image: {
      url: string;
      public_id: string;
    };
  };
};

const BannerCard: React.FC<BannerCardProps> = ({ banner }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this banner?")) {
      dispatch(deleteBannerRequest(banner._id));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center">
      <img
        src={banner.image.url}
        alt="banner"
        className="w-full h-48 object-cover"
      />
      <div className="p-2 w-full flex justify-between items-center">
        <span className="text-sm text-gray-600 truncate">{banner.image.public_id}</span>
        <button
          onClick={handleDelete}
          className="text-red-600 hover:text-red-800 text-sm font-semibold"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BannerCard;
