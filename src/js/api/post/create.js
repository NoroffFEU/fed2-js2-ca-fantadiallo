import { API_SOCIAL_POSTS } from "../constants";

export async function createPost({ title, body, tags, media }) {
  const token = localStorage.getItem("token");
  
  const response = await fetch(API_SOCIAL_POSTS, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({ title, body, tags, media }),
  });

  if (response.ok) {
    const postData = await response.json();
    return postData;
  }

  const errorResponse = await response.json();
  throw new Error(errorResponse.message || "Failed to create post");
}
