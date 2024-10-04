import React, { useEffect, useState } from "react";
import {
  Text,
  Heading,
  ScrollView,
  Image,
  Divider,
} from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";
import DetailApi from "@/components/services/DetailsApi";
import { Center } from "@gluestack-ui/themed";
import { VStack } from "@gluestack-ui/themed";
import { HStack } from "@gluestack-ui/themed";

const detailScreen = () => {
  const { id, media_type } = useLocalSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [detail, setDetail] = useState<any | null>(null);

  const fetchDetail = async (id: number, type: "movie" | "tv" | "person") => {
    setIsLoading(true);
    try {
      const detail = await DetailApi(id, type);
      console.log("Fetched Detail:", detail);
      setDetail(detail);
    } catch (error) {
      alert("Something went wrong.");
    }
    //  finally {
    //   setIsLoading(false);
    // }
  };

  useEffect(() => {
    console.log("ID:", id);
    console.log("Media Type:", media_type);
    fetchDetail(Number(id), media_type as "movie" | "tv" | "person");
  }, [id, media_type]);

  if (isLoading) {
    return (
      <Center>
        <Text>Loading...</Text>
      </Center>
    );
  }

  if (!detail) {
    return (
      <Center>
        <Text>No detail available.</Text>
      </Center>
    );
  }

  return (
    <ScrollView>
      <VStack space="md" p="$4">
        <Center>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${
                detail.poster_path || detail.profile_path
              }`,
            }}
            alt={
              media_type === "person"
                ? detail.name
                : media_type === "movie"
                ? detail.title
                : detail.name
            }
            size="2xl"
          />
        </Center>

        <Heading size="xl">
          {media_type === "person"
            ? detail.name
            : media_type === "movie"
            ? detail.title
            : detail.name}
        </Heading>

        {media_type === "person" && (
          <>
            <HStack space="sm">
              <Text fontWeight="bold">Born:</Text>
              <Text>
                {detail.birthday} in {detail.place_of_birth}
              </Text>
            </HStack>
            <HStack space="sm">
              <Text fontWeight="bold">Known for:</Text>
              <Text>{detail.known_for_department}</Text>
            </HStack>
            <VStack space="sm">
              <Text fontWeight="bold">Biography:</Text>
              <Text>{detail.biography}</Text>
            </VStack>
          </>
        )}

        {media_type === "movie" && (
          <>
            <HStack space="sm">
              <Text fontWeight="bold">Release Date:</Text>
              <Text>{detail.release_date}</Text>
            </HStack>
            <HStack space="sm">
              <Text fontWeight="bold">Runtime:</Text>
              <Text>{detail.runtime} minutes</Text>
            </HStack>
            <HStack space="sm">
              <Text fontWeight="bold">Rating:</Text>
              <Text>{detail.vote_average.toFixed(1)} / 10</Text>
            </HStack>
            <VStack space="sm">
              <Text fontWeight="bold">Overview:</Text>
              <Text>{detail.overview}</Text>
            </VStack>
          </>
        )}

        {media_type === "tv" && (
          <>
            <HStack space="sm">
              <Text fontWeight="bold">First Air Date:</Text>
              <Text>{detail.first_air_date}</Text>
            </HStack>
            <HStack space="sm">
              <Text fontWeight="bold">Seasons:</Text>
              <Text>{detail.number_of_seasons}</Text>
            </HStack>
            <HStack space="sm">
              <Text fontWeight="bold">Episodes:</Text>
              <Text>{detail.number_of_episodes}</Text>
            </HStack>
            <HStack space="sm">
              <Text fontWeight="bold">Rating:</Text>
              <Text>{detail.vote_average.toFixed(1)} / 10</Text>
            </HStack>
            <VStack space="sm">
              <Text fontWeight="bold">Created By:</Text>
              <Text>
                {detail.created_by.map((creator) => creator.name).join(", ")}
              </Text>
            </VStack>
            <Divider />
            <VStack space="sm">
              <Text fontWeight="bold">Overview:</Text>
              <Text>{detail.overview}</Text>
            </VStack>
          </>
        )}
      </VStack>
    </ScrollView>
  );
};

export default detailScreen;
