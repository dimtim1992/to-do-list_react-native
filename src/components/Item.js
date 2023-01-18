import { StyleSheet, TouchableHighlight, Text } from "react-native";

export default function Item({ item, deleteHandler }) {
  return (
    <TouchableHighlight onPress={() => deleteHandler(item.key)}>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 4,
    padding: 10,
    backgroundColor: "#fafafa",
    textAlign: "center",
  },
});
