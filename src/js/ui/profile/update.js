import { updateProfile } from "../../api/profile/update"; // Ensure this points to the update function

export async function onUpdateProfile(event) {
  event.preventDefault(); 
  const form = event.target; 
  const formData = new FormData(form); 

  // Convert formData to an object
  const profileData = Object.fromEntries(formData.entries());

  try {

    const updatedProfile = await updateProfile(profileData);
    console.log("Profile updated successfully:", updatedProfile);
    alert("Profile updated successfully!");

    
    window.location.reload(); 
  } catch (error) {
    console.error("Error updating profile:", error);
    alert("Failed to update profile. Please try again.");
  }
}
