// features/Banner/components/BannerForm.tsx
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBannerRequest, resetCreated } from "../slice";
import type { RootState } from "../../../redux/store";

const BannerForm = () => {
  const dispatch = useDispatch();
  const { created, loading, error } = useSelector((state: RootState) => state.banner);

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", file);

    dispatch(createBannerRequest(formData));
  };

  useEffect(() => {
    if (created) {
      setFile(null);
      dispatch(resetCreated());
    }
  }, [created, dispatch]);

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800">Create New Banner</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="border rounded px-3 py-2 w-full text-gray-800"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        {loading ? "Uploading..." : "Upload Banner"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default BannerForm;
