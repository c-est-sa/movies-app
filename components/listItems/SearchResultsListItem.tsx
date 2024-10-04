import React, { FC } from "react";
import {
  Badge,
  Box,
  Button,
  ButtonText,
  Center,
  HStack,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { BadgeText } from "@gluestack-ui/themed";
import { useRouter } from "expo-router";

interface Result {
  id: number;
  media_type: string;
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

type SearchResultsListItemProps = ResultMovie | ResultPerson | ResultTV;

const SearchResultsListItem: FC<SearchResultsListItemProps> = (props) => {
  const router = useRouter();
  const handleMoreDetails = () => {
    router.push({
      pathname: "/details/[id]",
      params: { id: props.id, media_type: props.media_type },
    });
  };

  const renderImage = () => {
    const imageUrl =
      props.media_type === "person" ? props.profile_path : props.poster_path;

    const alt =
      props.media_type === "person"
        ? props.name
        : props.media_type === "tv"
        ? props.name
        : props.title;

    if (!imageUrl) {
      return (
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          }}
        />
      );
    }

    return (
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${imageUrl}` }}
        alt={alt}
      />
    );
  };

  const renderContent = () => {
    if (props.media_type === "movie") {
      return (
        <>
          <Badge
            size="md"
            variant="solid"
            borderRadius="$none"
            action="info"
            mb="$1"
          >
            <BadgeText>{props.media_type}</BadgeText>
          </Badge>
          <Text fontSize="$lg" fontWeight="$bold">
            {props.title}
          </Text>
          {props.release_date && (
            <Text fontSize="$sm">Release Date: {props.release_date}</Text>
          )}
          {props.popularity && (
            <Text fontSize="$sm">Popularity: {props.popularity}</Text>
          )}
        </>
      );
    } else if (props.media_type === "tv") {
      return (
        <>
          <Badge
            size="md"
            variant="solid"
            borderRadius="$none"
            action="info"
            mb="$1"
          >
            <BadgeText>{props.media_type}</BadgeText>
          </Badge>
          <Text fontSize="$lg" fontWeight="$bold">
            {props.name}
          </Text>
          {props.first_air_date && (
            <Text fontSize="$sm">First Air Date: {props.first_air_date}</Text>
          )}
          {props.popularity && (
            <Text fontSize="$sm">Popularity: {props.popularity}</Text>
          )}
        </>
      );
    } else if (props.media_type === "person") {
      return (
        <>
          <Badge
            size="md"
            variant="solid"
            borderRadius="$none"
            action="info"
            mb="$1"
          >
            <BadgeText>{props.media_type}</BadgeText>
          </Badge>
          <Text fontSize="$lg" fontWeight="$bold">
            {props.name}
          </Text>
        </>
      );
    }
  };

  return (
    <Box my="$2" mx="$4">
      <HStack space="md" p="$4">
        {renderImage()}
        <VStack flex={1} space="xs">
          {renderContent()}
          <Button onPress={handleMoreDetails} size="sm" mt="$2">
            <ButtonText>more details</ButtonText>
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};

export default SearchResultsListItem;
