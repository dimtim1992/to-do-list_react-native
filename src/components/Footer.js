import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: "0 0 auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "#000",
  },
  text: {
    fontSize: 14,
    color: "#FFF",
  },
});
