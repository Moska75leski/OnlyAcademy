import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const messages = [
  { id: "1", text: "Fala Time Grande, bom dia!", type: "received" },
  { id: "2", text: "Bom dia, daí time, bão?", type: "sent" },
  { id: "3", text: "Temo porque Cêmo", type: "received" },
  {
    id: "4",
    text: "E aí, terminou o projeto do Professor Jeferson?",
    type: "received",
  },
  {
    id: "5",
    text: "Nada, tô me batendo igual lambari no aquário!",
    type: "sent",
  },
];

const ChatScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <View
        style={
          item.type === "sent" ? styles.sentMessage : styles.receivedMessage
        }
      >
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.chatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5ddd5",
    padding: 10,
  },
  chatList: {
    flex: 1,
  },
  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#dcf8c6",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    maxWidth: "80%",
  },
  receivedMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    maxWidth: "80%",
  },
  messageText: {
    fontSize: 16,
  },
});

export default ChatScreen;
