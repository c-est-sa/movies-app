import React from "react";
import { View, Text } from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";

const detailsScreen = () => {
  const { id, media_type } = useLocalSearchParams();

  return (
    <View>
      <Text>
        Details for {media_type} with ID: {id}
      </Text>
    </View>
  );
};

export default detailsScreen;
