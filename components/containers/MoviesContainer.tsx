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
  Image,
  Text,
  VStack,
  FlatList,
} from "@gluestack-ui/themed";
import axios from "axios";
import React, { useState } from "react";

import { API_KEY, BASE_URL } from "../config/apiConfig";

const MoviesList = (props: { movies: Movie[] }) => {
  const { movies } = props;
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MovieCard
          title={item.title}
          overview={item.overview}
          release_date={item.release_date}
          poster_path={item.poster_path}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const MovieCard = (props: {
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
}) => {
  const { title, overview, release_date, poster_path } = props;
  return (
    <Center>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
        alt={title}
      />
      <Text>{title}</Text>
      <Text>{overview}</Text>
      <Text>Released on: {release_date}</Text>
    </Center>
  );
};

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

  const callApi = async (selectedValue: string) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/movie/${selectedValue}?language=en-US&page=1&api_key=${API_KEY}`
      );
      setMoviesArray(res.data.results);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleOnValueChange = (selectedValue: string) => {
    setSelectedType(selectedValue);
    callApi(selectedValue);
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
      <MoviesList movies={moviesArray} />
    </VStack>
  );
};

export default MoviesContainer;
