import React, { FC } from "react";
import { FlatList } from "@gluestack-ui/themed";

import MoviesListItem from "../listItems/MoviesListItem";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

interface MovieResultsListProps {
  movies: Movie[];
}

const MoviesList: FC<MovieResultsListProps> = (props) => {
  const { movies } = props;
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MoviesListItem
          title={(item as Movie).title}
          overview={(item as Movie).overview}
          release_date={(item as Movie).release_date}
          poster_path={(item as Movie).poster_path}
        />
      )}
      keyExtractor={(item) => (item as Movie).id.toString()}
    />
  );
};

export default MoviesList;
