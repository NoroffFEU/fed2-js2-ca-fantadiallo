import { API_BASE, API_PROFILE, API_PROFILES } from "../constants"; 

/**
 * Fetch a specific user profile by username.
 * @param {string} username - The username of the profile to fetch.
 * @returns {Promise<Object>} - The profile data.
 */
export async function readProfile(username) {
  const token = localStorage.getItem("token"); 

  const response = await fetch(`${API_BASE}${API_PROFILE}/${username}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    return await response.json(); 
  }

  const errorResponse = await response.json();
  throw new Error(errorResponse.message || "Failed to fetch the profile");
}

/**
 * Fetch multiple user profiles with pagination.
 * @param {number} [limit=10] - The number of profiles to fetch per page.
 * @param {number} [page=1] - The page number to fetch.
 * @returns {Promise<Object[]>} - The list of profiles.
 */
export async function readProfiles(limit = 10, page = 1) {
  const token = localStorage.getItem("token"); 

  const response = await fetch(`${API_BASE}${API_PROFILES}?limit=${limit}&page=${page}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`, 
    },
  });

  if (response.ok) {
    return await response.json(); 
  }

  const errorResponse = await response.json();
  throw new Error(errorResponse.message || "Failed to fetch profiles");
}
