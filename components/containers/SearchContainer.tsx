import React, { useState } from "react";
import {
  Text,
  VStack,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  HStack,
  Button,
  ButtonIcon,
  ButtonText,
  SearchIcon,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  Icon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  ChevronDownIcon,
  InputIcon,
  Center,
} from "@gluestack-ui/themed";

import SearchApi from "../services/SearchApi";
import SearchResultsList from "../lists/SearchResultsList";

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

  const fetchResults = async (
    query: string,
    type: "movie" | "multi" | "tv"
  ) => {
    setIsLoading(true);
    try {
      const results = await SearchApi({ query, type });
      setResultsArray(results);
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnPress = async () => {
    if (selectedType) {
      setSelectedTypeToPass(selectedType);
      fetchResults(searchQuery, selectedType);
    } else {
      alert("Please select a search type.");
    }
  };

  return (
    <VStack width="100%">
      <FormControl isRequired>
        <FormControlLabel mb="$1">
          <FormControlLabelText>Search Query</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField
            type="text"
            placeholder="Input search keyword..."
            onChangeText={(value) => {
              setSearchQuery(value);
            }}
            value={searchQuery}
          />
        </Input>
      </FormControl>

      <FormControl isRequired>
        <FormControlLabel mb="$1">
          <FormControlLabelText>Search Type</FormControlLabelText>
        </FormControlLabel>
        <Select
          selectedValue={selectedType}
          onValueChange={(value) => {
            setSelectedType(value as "movie" | "multi" | "tv");
          }}
        >
          <SelectTrigger>
            <SelectInput placeholder="Select search type..." />
            <SelectIcon>
              <Icon as={ChevronDownIcon} />
            </SelectIcon>
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="Movie" value="movie" />
              <SelectItem label="Multi" value="multi" />
              <SelectItem label="TV" value="tv" />
            </SelectContent>
          </SelectPortal>
        </Select>
      </FormControl>

      <FormControl>
        <Button onPress={handleOnPress}>
          <ButtonIcon as={SearchIcon} mr="$2" />
          <ButtonText>Search</ButtonText>
        </Button>
      </FormControl>

      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <SearchResultsList
          searchType={selectedTypeToPass}
          results={resultsArray}
        />
      )}
    </VStack>
  );
};

export default SearchContainer;
