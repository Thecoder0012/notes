import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function Notes({ notes }) {
  const renderItem = ({ item }) => (
    <View style={styles.note}>
      <Text style={styles.title}>{item.noteTitle}</Text>
      <Text>{item.noteContent}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  note: {
    padding: 10,
    backgroundColor: "#f5f5f5",
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  }
});
