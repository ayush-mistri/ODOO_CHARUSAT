import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    userType: "",
    mobileNo: "",
    profilePic: "",
  });
  const [mobileNo, setMobileNo] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userEmail = localStorage.getItem("userEmail"); // Assume email is stored after login
        const { data } = await axios.get(`http://localhost:5000/api/profile/${userEmail}`);
        setProfile(data);
        setMobileNo(data.mobileNo || "");
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const formData = new FormData();
      formData.append("email", profile.email);
      formData.append("mobileNo", mobileNo);
      if (image) formData.append("profilePic", image);

      const { data } = await axios.put("http://localhost:5000/api/profile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setProfile(data);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-xl font-semibold mb-4">User Profile</h2>
      <div className="mb-4">
        <label className="block font-medium">Profile Picture:</label>
        <img src={preview || profile.profilePic || "https://via.placeholder.com/150"} 
             alt="Profile" className="w-24 h-24 rounded-full mt-2 object-cover"/>
        <input type="file" accept="image/*" className="mt-2" onChange={handleImageChange} />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Full Name:</label>
        <input type="text" value={profile.name} className="w-full p-2 border rounded-md bg-gray-100" disabled />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Email:</label>
        <input type="email" value={profile.email} className="w-full p-2 border rounded-md bg-gray-100" disabled />
      </div>

      <div className="mb-4">
        <label className="block font-medium">User Type:</label>
        <input type="text" value={profile.userType} className="w-full p-2 border rounded-md bg-gray-100" disabled />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Mobile Number:</label>
        <input type="text" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)}
               className="w-full p-2 border rounded-md" />
      </div>

      <button onClick={handleUpdateProfile} className="w-full bg-blue-500 text-white py-2 rounded-md">
        Update Profile
      </button>
    </div>
  );
};

export default Profile;
