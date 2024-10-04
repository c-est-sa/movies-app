import React from "react";
import {
  Box,
  Button,
  ButtonText,
  Center,
  HStack,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useRouter } from "expo-router";

const MoviesListItem = (props: {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
}) => {
  const { title, overview, release_date, poster_path } = props;

  const router = useRouter();
  const handleMoreDetails = () => {
    router.push({
      pathname: "/details/[id]",
      params: { id: props.id, media_type: "movie" },
    });
  };

  return (
    <Box my="$2" mx="$4">
      <HStack space="md" p="$4">
        <Image
          source={
            poster_path
              ? { uri: `https://image.tmdb.org/t/p/w500${poster_path}` }
              : {
                  uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                }
          }
          alt={title}
        />
        <VStack>
          <Text fontSize="$lg" fontWeight="$bold">
            {title}
          </Text>
          {release_date && (
            <Text fontSize="$sm">Release Date: {release_date}</Text>
          )}
          <Button onPress={handleMoreDetails} size="sm" mt="$2">
            <ButtonText>more details</ButtonText>
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};

export default MoviesListItem;
