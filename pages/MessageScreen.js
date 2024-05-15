// src/pages/Message.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MessageScreen = ({ sender, content, time }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sender}>{sender}</Text>
      <Text>{content}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginVertical: 4,
    borderRadius: 8,
    backgroundColor: "#e0e0e0",
  },
  sender: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: "gray",
    alignSelf: "flex-end",
  },
});

export default MessageScreen;
