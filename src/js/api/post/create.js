import { API_BASE, API_POSTS } from "../constants"; // Adjust the path as necessary

export async function createPost({ title, body, tags, media }) {
  const token = localStorage.getItem("token"); // Assuming you're using token-based authentication
  
  const response = await fetch(API_BASE + API_POSTS, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Attach token for protected routes
    },
    method: "POST",
    body: JSON.stringify({ title, body, tags, media }), // Send the post data in the body
  });

  if (response.ok) {
    const postData = await response.json(); // Return the created post's data
    return postData;
  }

  const errorResponse = await response.json();
  throw new Error(errorResponse.message || "Failed to create post");
}
