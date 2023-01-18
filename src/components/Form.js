import { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default function Form({ addHandler }) {
  const [inputText, setInputText] = useState("");

  function onChange(inputText) {
    setInputText(inputText);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.form}
        onChangeText={onChange}
        placeholder="add item..."
      />
      <Button
        style={styles.button}
        color="#000"
        title="+"
        onPress={() => addHandler(inputText)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  form: {
    borderBottomWidth: 2,
    borderBottomColor: "#fafafa",
    margin: 4,
    padding: 10,
    width: "85%",
  },
  button: {
    width: "15%",
    backgroundColor: "#fafafa",
  },
});
