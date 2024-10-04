import React from "react";
import {
  Center,
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
  Text,
  VStack,
  Box,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@gluestack-ui/themed";

const TVsSelectForm = (props) => {
  const { selectedType, handleOnValueChange } = props;
  return (
    <Box p="$4">
      <FormControl>
        <FormControlLabel mb="$1">
          <FormControlLabelText>TV Search Type</FormControlLabelText>
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
              <SelectItem label="Airing Today" value="airing_today" />
              <SelectItem label="On the Air" value="on_the_air" />
              <SelectItem label="Popular" value="popular" />
              <SelectItem label="Top Rated" value="top_rated" />
            </SelectContent>
          </SelectPortal>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TVsSelectForm;
