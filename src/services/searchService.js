// services/searchService.js
export async function searchPosts(query, signal) {
  const res = await fetch(
    `https://backend-quiz-627bed8ec3c5.herokuapp.com/v1/posts/search?params=${encodeURIComponent(
      query
    )}`,
    { signal }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch search results");
  }

  return res.json();
}
