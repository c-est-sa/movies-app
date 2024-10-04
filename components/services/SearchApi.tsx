import axios from "axios";
import { API_KEY, BASE_URL } from "../config/apiConfig";

interface SearchApiProps {
  query: string;
  type: "movie" | "multi" | "tv";
}

const SearchApi = async (props: SearchApiProps) => {
  const { query, type } = props;
  try {
    const res = await axios.get(
      `${BASE_URL}/search/${type}?language=en-US&page=1&query=${query}&api_key=${API_KEY}&page=1`
    );
    const limitedResults = res.data.results.slice(0, 10);
    return limitedResults;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default SearchApi;
