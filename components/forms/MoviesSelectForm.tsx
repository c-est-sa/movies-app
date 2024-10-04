import React from "react";
import {
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
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Box,
} from "@gluestack-ui/themed";

const MoviesSelectForm = (props) => {
  const { selectedType, handleOnValueChange } = props;
  return (
    <Box p="$4">
      <FormControl>
        <FormControlLabel mb="$1">
          <FormControlLabelText>Search Type</FormControlLabelText>
        </FormControlLabel>
        <Select
          selectedValue={selectedType}
          onValueChange={handleOnValueChange}
        >
          <SelectTrigger variant="outline" size="md">
            <SelectInput placeholder="Select" width="100%" />
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
              <SelectItem label="Now Playing" value="now_playing" />
              <SelectItem label="Popular" value="popular" />
              <SelectItem label="Top Rated" value="top_rated" />
              <SelectItem label="Upcoming" value="upcoming" />
            </SelectContent>
          </SelectPortal>
        </Select>
      </FormControl>
    </Box>
  );
};

export default MoviesSelectForm;
