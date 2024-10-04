import React, { FC } from "react";
import {
  Center,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from "@gluestack-ui/themed";

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
  popularity: number;
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
  popularity: number;
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
          id={result.id}
          media_type="movie"
          title={result.title}
          overview={result.overview}
          release_date={result.release_date}
          poster_path={result.poster_path}
          popularity={result.popularity}
        />
      );
    } else if (searchType === "tv") {
      const result = item as ResultTV;
      return (
        <SearchResultsListItem
          id={result.id}
          media_type="tv"
          name={result.name}
          overview={result.overview}
          first_air_date={result.first_air_date}
          poster_path={result.poster_path}
          popularity={result.popularity}
        />
      );
    } else if (searchType === "multi") {
      const result = item as ResultMovie | ResultPerson | ResultTV;
      if (result.media_type === "movie") {
        return (
          <SearchResultsListItem
            id={(result as ResultMovie).id}
            media_type="movie"
            title={(result as ResultMovie).title}
            overview={(result as ResultMovie).overview}
            release_date={(result as ResultMovie).release_date}
            poster_path={(result as ResultMovie).poster_path}
            popularity={(result as ResultMovie).popularity}
          />
        );
      } else if (result.media_type === "person") {
        return (
          <SearchResultsListItem
            id={(result as ResultPerson).id}
            media_type="person"
            name={(result as ResultPerson).name}
            profile_path={(result as ResultPerson).profile_path}
          />
        );
      } else if (result.media_type === "tv") {
        return (
          <SearchResultsListItem
            id={(result as ResultTV).id}
            media_type="tv"
            name={(result as ResultTV).name}
            overview={(result as ResultTV).overview}
            first_air_date={(result as ResultTV).first_air_date}
            poster_path={(result as ResultTV).poster_path}
            popularity={(result as ResultTV).popularity}
          />
        );
      }
    }
  };

  return (
    <SafeAreaView>
      {results.length === 0 ? (
        <Center>
          <Text>No Result... Try something else!</Text>
        </Center>
      ) : (
        <FlatList
          data={results}
          renderItem={renderItemFn}
          keyExtractor={(item) => (item as Result).id.toString()}
          scrollEnabled={false}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchResultsList;
