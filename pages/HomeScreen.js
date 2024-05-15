import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isFollowActive, setFollowActive] = useState(false);

  const toggleFollow = () => {
    setFollowActive(!isFollowActive);
  };

  const navigateToChatScreen = () => {
    navigation.navigate("Chat");
  };
  //const navigateToMessageScreen = () => {
  //  navigation.navigate("Message");
  //};

  const navigateToExploreScreen = () => {
    navigation.navigate("Explore");
  };
  const navigateToCameraScreen = () => {
    navigation.navigate("Camera");
  };

  return (
    <LinearGradient colors={["#ccc", "#5599"]} style={styles.container}>
      <Image source={require("./img/everton.jpg")} style={styles.foto} />
      <View style={styles.descricao}>
        <Text style={styles.nomeUsuario}>@evertonmoscaleski</Text>
        <Text style={styles.descricao}>
          Estudante de Engenharia de Software
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          {/*<TouchableOpacity
            onPress={navigateToMessageScreen}
            style={[styles.button, { marginRight: 10 }]}
          >
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>*/}
          <TouchableOpacity
            onPress={navigateToCameraScreen}
            style={[styles.button, { marginRight: 10 }]}
          >
            <Text style={styles.buttonText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigateToExploreScreen}
            style={[styles.button, { marginRight: 10 }]}
          >
            <Text style={styles.buttonText}>Explore</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigateToChatScreen}
            style={[styles.button, { marginRight: 10 }]}
          >
            <Text style={styles.buttonText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleFollow}
            style={[
              styles.button,
              isFollowActive ? styles.activeButton : styles.disabledButton,
            ]}
          >
            <Text style={styles.buttonText}>
              {isFollowActive ? "Seguindo" : "Seguir"}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={[styles.row, styles.center]}>
            {/* Primeira linha */}
            <View style={styles.imageRow}>
              <Image
                source={require("./img/corrida.jpg")}
                style={styles.fotoContainer}
              />
              <Image
                source={require("./img/corridab.jpg")}
                style={styles.fotoContainer}
              />
            </View>
            {/* Segunda linha */}
            <View style={styles.imageRow}>
              <Image
                source={require("./img/Moska.jpg")}
                style={styles.fotoContainer}
              />
              <Image
                source={require("./img/corridad.jpg")}
                style={styles.fotoContainer}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    paddingBottom: 30,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 150,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    padding: 10,
  },
  activeButton: {
    backgroundColor: "#cccc",
  },
  disabledButton: {
    backgroundColor: "#CCCCCC",
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 10,
    borderColor: "#f0f8ff",
    borderWidth: 5,
  },
  descricao: {
    alignSelf: "center",
    fontSize: 16,
  },
  nomeUsuario: {
    alignSelf: "center",
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  fotoContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    width: 100,
    height: 100,
    borderRadius: 80,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    borderColor: "#ccc",
    borderWidth: 5,
    borderRadius: 10,
  },
});

export default HomeScreen;
