import { deletePost } from "../../api/post/delete";

export async function onDeletePost(event) {
  event.preventDefault(); 
  const postId = event.target.dataset.postId; 

  const confirmed = confirm("Are you sure you want to delete this post?");
  if (!confirmed) return;

  try {
    await deletePost(postId); 
    alert("Post deleted successfully");
    window.location.reload(); 
  } catch (error) {
    console.error("Error deleting post:", error);
    alert("Failed to delete the post.");
  }
}
