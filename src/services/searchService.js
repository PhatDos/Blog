import * as request from "~/utils/httpRequest";

async function searchService(query, signal) {
  try {
    const res = await request.get("/posts/search", {
      params: { params: query },
      signal
    });

    return res.data;
  } catch (err) {
    if (err.name === "CanceledError") return;
    console.error("Failed to fetch search results", err);
    throw err;
  }
}

export default searchService;
