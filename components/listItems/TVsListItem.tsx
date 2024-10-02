import React from "react";
import { Center, Image, Text } from "@gluestack-ui/themed";

const TVsListItem = (props: {
  name: string;
  overview: string;
  first_air_date: string;
  poster_path: string;
}) => {
  const { name, overview, first_air_date, poster_path } = props;
  return (
    <Center>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
        alt={name}
      />
      <Text>{name}</Text>
      <Text>{overview}</Text>
      <Text>First Air Date: {first_air_date}</Text>
    </Center>
  );
};

export default TVsListItem;
