import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AddNote from "./components/AddNote.js";
import Notes from "./components/Notes.js";

export default function App() {
  const [notes, setNotes] = useState([]);

  const addingNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <View style={styles.container}>
      <AddNote saveNote={addingNote} />
      <Notes notes={notes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    backgroundColor: "#fff",
  },
});
