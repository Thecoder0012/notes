import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

export default function AddNote({ saveNote }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  const addNote = () => {
    saveNote({ noteTitle, noteContent });
    setNoteTitle("");
    setNoteContent("");
  };

  return (
    <View style={styles.noteContainer}>
      <TextInput
        style={styles.input}
        placeholder="Note title"
        onChangeText={setNoteTitle}
        value={noteTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Note content"
        onChangeText={setNoteContent}
        value={noteContent}
      />
      <Button title="Add Note" onPress={addNote} />
    </View>
  );
}

const styles = StyleSheet.create({
  noteContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
