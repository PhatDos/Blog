import request from "~/utils/request";

async function searchService(query, signal) {
  try {
    const res = await request.get("/posts/search", {
      params: { params: query },
      signal
    });

    return res.data;
  } catch (err) {
    console.error("Failed to fetch search results", err);
    throw err;
  }
}

export default searchService;
