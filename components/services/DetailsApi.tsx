import axios from "axios";
import { API_KEY, BASE_URL } from "../config/apiConfig";

const DetailsApi = async (id: number, type: "movie" | "tv" | "person") => {
  try {
    const res = await axios.get(
      `${BASE_URL}/${type}/${id}?language=en-US&api_key=${API_KEY}`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default DetailsApi;
