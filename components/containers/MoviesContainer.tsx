import {
  Text,
  VStack,
  SafeAreaView,
  ScrollView,
  Center,
} from "@gluestack-ui/themed";
import React, { useState } from "react";

import MoviesApi from "../services/MoviesApi";
import MoviesList from "../lists/MoviesList";
import MoviesSelectForm from "../forms/MoviesSelectForm";

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
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack>
          <MoviesSelectForm
            selectedType={selectedType}
            handleOnValueChange={handleOnValueChange}
          />

          {isLoading ? (
            <Center>
              <Text>Loading...</Text>
            </Center>
          ) : (
            <MoviesList movies={moviesArray} />
          )}
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoviesContainer;
