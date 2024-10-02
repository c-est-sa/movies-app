import React from "react";
import { Center, Image, Text } from "@gluestack-ui/themed";

const MoviesListItem = (props: {
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
      <Text>Release Date: {release_date}</Text>
    </Center>
  );
};

export default MoviesListItem;
