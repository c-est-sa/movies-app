import MoviesContainer from "@/components/containers/MoviesContainer";
import { Center } from "@gluestack-ui/themed";
import { View, Text, StyleSheet } from "react-native";

export default function moviesScreen() {
  return (
    // <View style={styles.container}>
    //   <Text>TV Screen</Text>

    // </View>
    <MoviesContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5ddfc",
  },
});
