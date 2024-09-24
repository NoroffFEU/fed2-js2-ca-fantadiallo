import { API_SOCIAL_POSTS } from "../constants";

export async function readPost(id) {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`);

    if (response.ok) {
        return await response.json();
    }

    throw new Error("Could not fetch the post");
}

export async function readPosts(limit = 12, page = 1, tag) {
    const url = new URL(API_SOCIAL_POSTS);
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

export async function readPostsByUser(username, limit = 12, page = 1, tag) {
    const url = new URL(`${API_SOCIAL_POSTS}/user/${username}`);
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
