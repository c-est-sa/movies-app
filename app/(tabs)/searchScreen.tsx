import SearchContainer from "@/components/containers/SearchContainer";
import { SafeAreaView } from "@gluestack-ui/themed";
import { View, Text, StyleSheet } from "react-native";

export default function searchScreen() {
  return (
    <SafeAreaView flex={1}>
      <SearchContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
});
