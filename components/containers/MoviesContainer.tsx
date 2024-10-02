import {
  Center,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  Icon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  ChevronDownIcon,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import React, { useState } from "react";

import MoviesApi from "../services/MoviesApi";
import MoviesList from "../lists/MoviesList";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

const MoviesContainer = () => {
  const [selectedType, setSelectedType] = useState("");
  const [moviesArray, setMoviesArray] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (selectedValue: string) => {
    setIsLoading(true);
    try {
      const movies = await MoviesApi(selectedValue);
      setMoviesArray(movies);
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnValueChange = (selectedValue: string) => {
    setSelectedType(selectedValue);
    fetchMovies(selectedValue);
  };

  return (
    <VStack>
      <Select selectedValue={selectedType} onValueChange={handleOnValueChange}>
        <SelectTrigger variant="outline" size="md">
          <SelectInput placeholder="Select" width="100%" />
          <SelectIcon>
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="Now Playing" value="now_playing" />
            <SelectItem label="Popular" value="popular" />
            <SelectItem label="Top Rated" value="top_rated" />
            <SelectItem label="Upcoming" value="upcoming" />
          </SelectContent>
        </SelectPortal>
      </Select>

      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <MoviesList movies={moviesArray} />
      )}
    </VStack>
  );
};

export default MoviesContainer;
