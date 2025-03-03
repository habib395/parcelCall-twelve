import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import useRole from "./../../../../hooks/useRole";
import LoadingSpinner from "../../../../pages/Shared/LoadingSpinner";
import { toast } from "react-hot-toast";
import { imageUpload, saveUser } from "../../../../api/utils";

const MyProfile = () => {
  const { user, setUser, loading } = useAuth();
  const [role, isLoading] = useRole();
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  if (loading || isLoading) return <LoadingSpinner />;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleProfileUpdate = async () => {
    if (!selectedImage) {
      toast.error("Please select an image to upload.");
      return;
    }
    setUploading(true);

    try {
      const imageUrl = await imageUpload(selectedImage);
      const updatedUser = { ...user, photoURL: imageUrl };
      await saveUser(updatedUser);
      setUser(updatedUser);
      toast.success("Profile picture updated successfully");
      setSelectedImage(null);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 sm:p-16 bg-white rounded-xl shadow-lg mt-6 dark:bg-gray-900 dark:text-white">
      <SectionTitle heading="My Profile" />

      <div className="flex items-center space-x-8">
        <div className="relative">
          <img
            className="rounded-full w-32 h-32 border-4 border-gray-300 shadow-lg dark:border-gray-600"
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
          />
          <div className="absolute bottom-0 right-0 p-2 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-600 transition">
            <span className="text-white text-xl">✏️</span>
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">{`I am ${user.displayName}, a ${role}`}</h4>
          <p className="text-lg text-gray-600 dark:text-gray-400">{user.email}</p>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
          Select a new profile picture:
        </label>
        <input
          required
          type="file"
          id="image"
          name="image"
          accept="image/*"
          className="block w-full max-w-xs mt-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-400"
          onChange={handleImageChange}
        />
      </div>

      <div className="mt-6 flex">
        <button
          onClick={handleProfileUpdate}
          className={`btn bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 focus:ring-4 focus:ring-blue-500 transition ease-in-out duration-200 ${
            uploading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Update Profile"}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
