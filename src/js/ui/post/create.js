
import { createPost } from "../../api/post/create"; 

export async function onCreatePost(event) {
  event.preventDefault(); 
  const form = event.target;
  const formData = new FormData(form);

  const data = Object.fromEntries(formData.entries());

  try {
    const post = await createPost(data); 
    console.log("Post created successfully", post);
    window.location.href = `/post/${post.id}`; 
  } catch (error) {
    console.error("Error during post creation:", error);
    alert("Failed to create the post. Please try again.");
  }
}
