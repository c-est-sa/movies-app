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
} from "@gluestack-ui/themed";
import React, { useState } from "react";

import TVsApi from "../services/TVsApi";
import TVsList from "../lists/TVsList";

interface TV {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  first_air_date: string;
}

const TVsContainer = () => {
  const [selectedType, setSelectedType] = useState("");
  const [TVsArray, setTVsArray] = useState<TV[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTVs = async (selectedValue: string) => {
    setIsLoading(true);
    try {
      const movies = await TVsApi(selectedValue);
      setTVsArray(movies);
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnValueChange = (selectedValue: string) => {
    setSelectedType(selectedValue);
    fetchTVs(selectedValue);
  };

  return (
    <VStack>
      <Select selectedValue={selectedType} onValueChange={handleOnValueChange}>
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

      {isLoading ? <Text>Loading...</Text> : <TVsList TVs={TVsArray} />}
    </VStack>
  );
};

export default TVsContainer;
