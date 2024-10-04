import React, { FC } from "react";
import { FlatList } from "@gluestack-ui/themed";

import TVsListItem from "../listItems/TVsListItem";

interface TV {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  first_air_date: string;
}

interface TVResultsListProps {
  TVs: TV[];
}

const TVsList: FC<TVResultsListProps> = (props) => {
  const { TVs } = props;
  return (
    <FlatList
      data={TVs}
      renderItem={({ item }) => (
        <TVsListItem
          name={(item as TV).name}
          overview={(item as TV).overview}
          first_air_date={(item as TV).first_air_date}
          poster_path={(item as TV).poster_path}
        />
      )}
      keyExtractor={(item) => (item as TV).id.toString()}
    />
  );
};

export default TVsList;
