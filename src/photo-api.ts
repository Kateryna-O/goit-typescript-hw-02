import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "BvMRqnxLDDDZ3Rum8WBLlCvuaicWcBiLwPGpjzahKU0";

async function getImages(searchQuery: string, page = 1) {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: ACCESS_KEY,
      query: searchQuery,
      page,
    },
  });
  return response.data.results;
}
export default getImages;
