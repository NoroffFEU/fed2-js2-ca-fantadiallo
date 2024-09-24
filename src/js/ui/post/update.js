import { updatePost } from "../../api/post/update"; // Adjust the path as necessary

export async function onUpdatePost(event) {
  event.preventDefault(); 
  const form = event.target; 
  const formData = new FormData(form); 
  const postId = form.dataset.postId; 

  const data = Object.fromEntries(formData.entries()); 

  try {
    const updatedPost = await updatePost(postId, data); 
    console.log("Post updated successfully:", updatedPost);
    alert("Post updated successfully!");
    window.location.href = `/post/${postId}`; 
  } catch (error) {
    console.error("Error updating post:", error);
    alert("Failed to update the post.");
  }
}
