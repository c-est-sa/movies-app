import React, { FC } from "react";
import { FlatList } from "@gluestack-ui/themed";

import TVsListItem from "../listItems/TVsListItem";

interface TV {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  first_air_date: string;
  popularity: number;
}

interface TVsListProps {
  TVs: TV[];
}

const TVsList: FC<TVsListProps> = (props) => {
  const { TVs } = props;
  return (
    <FlatList
      data={TVs}
      renderItem={({ item }) => (
        <TVsListItem
          id={(item as TV).id}
          name={(item as TV).name}
          overview={(item as TV).overview}
          first_air_date={(item as TV).first_air_date}
          poster_path={(item as TV).poster_path}
          popularity={(item as TV).popularity}
        />
      )}
      keyExtractor={(item) => (item as TV).id.toString()}
      scrollEnabled={false}
    />
  );
};

export default TVsList;
