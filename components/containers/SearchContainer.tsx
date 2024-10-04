import React, { useCallback, useState } from "react";
import { Text, VStack, Center, SafeAreaView } from "@gluestack-ui/themed";

import SearchApi from "../services/SearchApi";
import SearchResultsList from "../lists/SearchResultsList";
import SearchForm from "../forms/SearchForm";
import { ScrollView } from "@gluestack-ui/themed";

const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<
    "movie" | "multi" | "tv" | ""
  >("");
  const [selectedTypeToPass, setSelectedTypeToPass] = useState<
    "movie" | "multi" | "tv"
  >("movie");
  const [resultsArray, setResultsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isBeforeSearch, setIsBeforeSearch] = useState(true);

  const fetchResults = useCallback(
    async (query: string, type: "movie" | "multi" | "tv") => {
      setIsLoading(true);
      try {
        const results = await SearchApi({ query, type });
        setResultsArray(results);
      } catch (error) {
        alert("Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const handleOnPress = async () => {
    if (selectedType) {
      setIsBeforeSearch(false);
      setSelectedTypeToPass(selectedType);
      fetchResults(searchQuery, selectedType);
    } else {
      alert("Please specify a search query and a search type.");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack width="100%">
          <SearchForm
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            handleOnPress={handleOnPress}
          />

          {isBeforeSearch && (
            <Center>
              <Text textAlign="center">
                Specify a search query and a search type, and start searching!
              </Text>
            </Center>
          )}

          {isLoading ? (
            <Center>
              <Text>Loading...</Text>
            </Center>
          ) : (
            !isBeforeSearch && (
              <SearchResultsList
                searchType={selectedTypeToPass}
                results={resultsArray}
              />
            )
          )}
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchContainer;
