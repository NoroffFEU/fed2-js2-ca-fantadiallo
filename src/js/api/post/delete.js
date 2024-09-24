import { API_SOCIAL_POSTS } from "../constants";

export async function deletePost(id) {
  const token = localStorage.getItem("token");
  
  const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    return true;
  }

  const errorResponse = await response.json();
  throw new Error(errorResponse.message || "Failed to delete post");
}
