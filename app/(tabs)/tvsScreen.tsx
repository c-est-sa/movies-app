import { View, Text, StyleSheet } from "react-native";

export default function tvsScreen() {
  return (
    <View style={styles.container}>
      <Text>TV Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcdd",
  },
});
