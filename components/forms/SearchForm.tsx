import React, { FC } from "react";
import {
  VStack,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
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
  Box,
} from "@gluestack-ui/themed";

interface SearchFormProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  selectedType: "movie" | "multi" | "tv" | "";
  setSelectedType: React.Dispatch<
    React.SetStateAction<"movie" | "multi" | "tv" | "">
  >;
  handleOnPress: () => Promise<void>;
}

const SearchForm: FC<SearchFormProps> = (props) => {
  const {
    searchQuery,
    setSearchQuery,
    selectedType,
    setSelectedType,
    handleOnPress,
  } = props;
  return (
    <Box p="$4">
      <VStack space="md">
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
      </VStack>
    </Box>
  );
};

export default SearchForm;
