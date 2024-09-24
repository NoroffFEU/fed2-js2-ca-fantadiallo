import { API_SOCIAL_POSTS } from "../constants";

export async function updatePost(id, { title, body, tags, media }) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, body, tags, media }),
  });

  if (response.ok) {
    return await response.json();
  }

  const errorResponse = await response.json();
  throw new Error(errorResponse.message || "Failed to update the post");
}
