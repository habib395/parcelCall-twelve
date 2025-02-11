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
  if (loading || isLoading) return <LoadingSpinner></LoadingSpinner>;
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
    <div className="w-full p-4 sm:p-16 text-gray-800 rounded-xl bg-gray-50">
      <SectionTitle heading="My Profile"></SectionTitle>
      <div className="flex gap-10 px-4 py-2">
        <img
          className="rounded-full w-24 h-24 border-2 border-gray-300"
          src={user.photoURL || "https://via.placeholder.com/150"}
          alt="Profile"
        />
        <h4 className="text-2xl">
          I am {user.displayName} a {role}
        </h4>
      </div>
      <div className="px-5 py-2">
        <label htmlFor="image" className="block text-sm">
          Select a new profile picture:
        </label>
       <input required type="file" id="image" name="image" accept="image/*"  className="block w-full max-w-xs text-sm text-gray-700 my-2 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleImageChange}/>
      </div>
      <button
        onClick={handleProfileUpdate}
        className={`btn btn-sm bg-blue-500 text-white ml-5 ${
          uploading ? "opacity-50 cursor-not-allowed ml-5" : ""
        }`}
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : "Update"}
      </button>
    </div>
  );
};

export default MyProfile;
