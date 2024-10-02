import { View, Text, StyleSheet } from "react-native";

export default function searchScreen() {
  return (
    <View style={styles.container}>
      <Text>Search screen</Text>
    </View>
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
