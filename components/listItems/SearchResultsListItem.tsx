import React from "react";
import { Center, Image, Text } from "@gluestack-ui/themed";

interface Result {
  // movie
  title?: string;
  overview?: string;
  poster_path?: string;
  release_date?: string;
  // person
  name?: string;
  profile_path?: string;
  // tv
  first_air_date?: string;
}

const SearchResultsListItem = (props: Result) => {
  const {
    title,
    overview,
    release_date,
    poster_path,
    name,
    profile_path,
    first_air_date,
  } = props;
  return (
    <Center>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${poster_path || profile_path}`,
        }}
        alt={title || name}
      />
      <Text>{title || name}</Text>
      {overview && <Text>{overview}</Text>}
      {release_date && <Text>Release Date: {release_date}</Text>}
      {first_air_date && <Text>First Air Date: {first_air_date}</Text>}
    </Center>
  );
};

export default SearchResultsListItem;
