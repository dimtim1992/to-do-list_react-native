import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logo</Text>
      <Text style={styles.text}>User</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    backgroundColor: "#000",
  },
  text: {
    fontSize: 14,
    color: "#FFF",
  },
});
