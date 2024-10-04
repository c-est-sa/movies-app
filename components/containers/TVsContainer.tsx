import { SafeAreaView, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import React, { useState } from "react";

import TVsApi from "../services/TVsApi";
import TVsList from "../lists/TVsList";
import TVsSelectForm from "../forms/TVsSelectForm";

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
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack>
          <TVsSelectForm
            selectedType={selectedType}
            handleOnValueChange={handleOnValueChange}
          />

          {isLoading ? <Text>Loading...</Text> : <TVsList TVs={TVsArray} />}
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TVsContainer;
