import { get } from "~/utils/apiClient";
import { SearchData, SearchResponse } from "~/types/Search";

const searchService = async (
  query: string,
  signal?: AbortSignal,
): Promise<SearchData | undefined> => {
  try {
    const res = await get<SearchResponse>("/posts/search", {
      params: { params: query },
      signal,
    });

    return res.data;
  } catch (err: any) {
    if (err.name === "CanceledError") return;
    console.error("Failed to fetch search results", err);
    throw err;
  }
};

export default searchService;
