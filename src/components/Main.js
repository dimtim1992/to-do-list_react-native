import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Item from "./Item";
import Form from "./Form";

export default function Main() {
  const [itemsList, setItemsList] = useState([
    { key: 3, title: "Task 4" },
    { key: 2, title: "Task 3" },
    { key: 1, title: "Task 2" },
    { key: 0, title: "Task 1" },
  ]);

  function addHandler(inputText) {
    setItemsList((list) => {
      return [{ key: Math.random().toString(), title: inputText }, ...list];
    });
  }

  function deleteHandler(key) {
    setItemsList((list) => {
      return list.filter((item) => item.key !== key);
    });
  }

  return (
    <View style={styles.container}>
      <Form addHandler={addHandler} />
      <FlatList
        style={styles.list}
        data={itemsList}
        renderItem={({ item }) => (
          <Item item={item} deleteHandler={deleteHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: "1 0 auto",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "calc(100vh - 100px)",
    backgroundColor: "#FFF",
  },
  list: {},
  item: {
    fontSize: 14,
    color: "#OOO",
  },
});
