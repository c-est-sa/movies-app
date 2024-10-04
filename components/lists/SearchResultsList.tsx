import React, { FC } from "react";
import { Center, FlatList, Text } from "@gluestack-ui/themed";

import SearchResultsListItem from "../listItems/SearchResultsListItem";

interface Result {
  id: number;
  media_type?: string;
}

interface ResultMovie extends Result {
  media_type: "movie";
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

interface ResultPerson extends Result {
  media_type: "person";
  name: string;
  profile_path: string;
}

interface ResultTV extends Result {
  media_type: "tv";
  name: string;
  overview: string;
  poster_path: string;
  first_air_date: string;
}

interface SearchResultsListProps {
  searchType: "movie" | "multi" | "tv";
  results: Result[];
}

const SearchResultsList: FC<SearchResultsListProps> = (props) => {
  const { searchType, results } = props;

  const renderItemFn = ({ item }: { item: Result }) => {
    if (searchType === "movie") {
      const result = item as ResultMovie;
      return (
        <SearchResultsListItem
          title={result.title}
          overview={result.overview}
          release_date={result.release_date}
          poster_path={result.poster_path}
        />
      );
    } else if (searchType === "tv") {
      const result = item as ResultTV;
      return (
        <SearchResultsListItem
          name={result.name}
          overview={result.overview}
          first_air_date={result.first_air_date}
          poster_path={result.poster_path}
        />
      );
    } else if (searchType === "multi") {
      const result = item as ResultMovie | ResultPerson | ResultTV;
      if (result.media_type === "movie") {
        return (
          <SearchResultsListItem
            title={(result as ResultMovie).title}
            overview={(result as ResultMovie).overview}
            release_date={(result as ResultMovie).release_date}
            poster_path={(result as ResultMovie).poster_path}
          />
        );
      } else if (result.media_type === "person") {
        return (
          <SearchResultsListItem
            name={(result as ResultPerson).name}
            profile_path={(result as ResultPerson).profile_path}
          />
        );
      } else if (result.media_type === "tv") {
        return (
          <SearchResultsListItem
            name={(result as ResultTV).name}
            overview={(result as ResultTV).overview}
            first_air_date={(result as ResultTV).first_air_date}
            poster_path={(result as ResultTV).poster_path}
          />
        );
      }
    }
  };

  return results.length === 0 ? (
    <Center>
      <Text>No Result... Try something else!</Text>
    </Center>
  ) : (
    <FlatList
      data={results}
      renderItem={renderItemFn}
      keyExtractor={(item) => (item as Result).id.toString()}
    />
  );
};

export default SearchResultsList;
