import { API_BASE, API_POSTS } from "../constants"; // Adjust the import path as necessary

/**
 * Fetch a single post by ID.
 * @param {string} id - The ID of the post.
 * @returns {Promise<Object>} The post data.
 */
export async function readPost(id) {
    const response = await fetch(`${API_BASE}${API_POSTS}/${id}`);

    if (response.ok) {
        return await response.json();
    }

    throw new Error("Could not fetch the post");
}

/**
 * Fetch a list of posts with optional pagination and tag filtering.
 * @param {number} [limit=12] - The number of posts to fetch.
 * @param {number} [page=1] - The page number for pagination.
 * @param {string} [tag] - An optional tag to filter posts.
 * @returns {Promise<Array>} The list of posts.
 */
export async function readPosts(limit = 12, page = 1, tag) {
    const url = new URL(`${API_BASE}${API_POSTS}`);
    const params = { limit, page };

    if (tag) {
        params.tag = tag;
    }

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    const response = await fetch(url);

    if (response.ok) {
        return await response.json();
    }

    throw new Error("Could not fetch posts");
}

/**
 * Fetch posts created by a specific user with pagination and optional tag filtering.
 * @param {string} username - The username of the user.
 * @param {number} [limit=12] - The number of posts to fetch.
 * @param {number} [page=1] - The page number for pagination.
 * @param {string} [tag] - An optional tag to filter posts.
 * @returns {Promise<Array>} The list of posts by the user.
 */
export async function readPostsByUser(username, limit = 12, page = 1, tag) {
    const url = new URL(`${API_BASE}${API_POSTS}/user/${username}`);

    const params = { limit, page };

    if (tag) {
        params.tag = tag;
    }

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    const response = await fetch(url);

    if (response.ok) {
        return await response.json();
    }

    throw new Error("Could not fetch posts by user");
}
