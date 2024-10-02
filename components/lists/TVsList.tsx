import React from "react";
import { FlatList } from "@gluestack-ui/themed";

import TVsListItem from "../listItems/TVsListItem";

interface TV {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  first_air_date: string;
}

const TVsList = (props: { TVs: TV[] }) => {
  const { TVs } = props;
  return (
    <FlatList
      data={TVs}
      renderItem={({ item }) => (
        <TVsListItem
          name={item.name}
          overview={item.overview}
          first_air_date={item.first_air_date}
          poster_path={item.poster_path}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TVsList;
