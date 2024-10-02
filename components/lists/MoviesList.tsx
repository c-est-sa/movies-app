import React from "react";
import { FlatList } from "@gluestack-ui/themed";

import MoviesListItem from "../listItems/MoviesListItem";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

const MoviesList = (props: { movies: Movie[] }) => {
  const { movies } = props;
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MoviesListItem
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

export default MoviesList;
