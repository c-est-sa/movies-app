import React from "react";
import { Center, FlatList, Text } from "@gluestack-ui/themed";

import SearchResultsListItem from "../listItems/SearchResultsListItem";

interface Result {
  id: number;
  media_type?: "movie" | "person" | "tv";
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

interface SearchResultsListProps {
  searchType: "movie" | "multi" | "tv";
  results: Result[];
}

const SearchResultsList = (props: SearchResultsListProps) => {
  const { searchType, results } = props;
  return results.length === 0 ? (
    <Center>
      <Text>No Result... Try something else!</Text>
    </Center>
  ) : searchType === "movie" ? (
    <FlatList
      data={results}
      renderItem={({ item }) => (
        <SearchResultsListItem
          title={item.title}
          overview={item.overview}
          release_date={item.release_date}
          poster_path={item.poster_path}
        />
      )}
    />
  ) : searchType === "tv" ? (
    <FlatList
      data={results}
      renderItem={({ item }) => (
        <SearchResultsListItem
          name={item.name}
          overview={item.overview}
          first_air_date={item.first_air_date}
          poster_path={item.poster_path}
        />
      )}
    />
  ) : searchType === "multi" ? (
    <FlatList
      data={results}
      renderItem={({ item }) =>
        item.media_type === "movie" ? (
          <SearchResultsListItem
            title={item.title}
            overview={item.overview}
            release_date={item.release_date}
            poster_path={item.poster_path}
          />
        ) : item.media_type === "person" ? (
          <SearchResultsListItem
            name={item.name}
            profile_path={item.profile_path}
          />
        ) : item.media_type === "tv" ? (
          <SearchResultsListItem
            name={item.name}
            overview={item.overview}
            first_air_date={item.first_air_date}
            poster_path={item.poster_path}
          />
        ) : null
      }
      keyExtractor={(item) => item.id.toString()}
    />
  ) : null;
};

export default SearchResultsList;
