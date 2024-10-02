import React from 'react'
import axios from "axios";
import { API_KEY, BASE_URL } from "../config/apiConfig";

const MoviesApi = async (selectedValue: string) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/${selectedValue}?language=en-US&page=1&api_key=${API_KEY}`
    );
    return res.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default MoviesApi