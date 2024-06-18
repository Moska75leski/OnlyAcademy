import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { createClient } from "@supabase/supabase-js";

// Configuração do cliente Supabase
const supabaseUrl = "https://your-supabase-url.supabase.co";
const supabaseKey = "your-anon-or-service-key";
const supabase = createClient(supabaseUrl, supabaseKey);

// Função para fazer o upload da imagem
async function uploadImage(file) {
  const { data, error } = await supabase.storage
    .from("user-images")
    .upload(`public/${file.name}`, file);

  if (error) {
    console.error("Error uploading image:", error);
    return null;
  }

  return data;
}

// Função para obter a URL pública da imagem
function getPublicUrl(filePath) {
  const { publicURL, error } = supabase.storage
    .from("user-images")
    .getPublicUrl(filePath);

  if (error) {
    console.error("Error getting public URL:", error);
    return null;
  }

  return publicURL;
}

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isFollowActive, setFollowActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const toggleFollow = () => {
    setFollowActive(!isFollowActive);
  };

  const navigateToChatScreen = () => {
    navigation.navigate("Chat");
  };

  const navigateToExploreScreen = () => {
    navigation.navigate("Explore");
  };
  const navigateToCameraScreen = () => {
    navigation.navigate("Camera");
  };

  const navigateToPayMensalScreen = () => {
    navigation.navigate("PayMensal");
  };

  const navigateToPayAnualScreen = () => {
    navigation.navigate("PayAnual");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0]);
    }
  };

  const handleUploadImage = async () => {
    if (selectedImage) {
      const response = await fetch(selectedImage.uri);
      const blob = await response.blob();
      const file = new File([blob], selectedImage.uri.split("/").pop(), {
        type: blob.type,
      });
      const uploadResult = await uploadImage(file);

      if (uploadResult) {
        const publicUrl = getPublicUrl(uploadResult.path);
        setImageUrl(publicUrl);
        console.log("Image URL:", publicUrl);
      }
    }
  };

  return (
    <ImageBackground
      source={require("./img/fundo.jpg")}
      style={styles.background}
    >
      {/*<LinearGradient colors={["#ccc", "#5599"]} style={styles.container}>*/}
      <Image source={require("./img/everton.jpg")} style={styles.foto} />
      <View style={styles.descricao}>
        <Text style={styles.nomeUsuario}>@evertonmoscaleski</Text>
        <Text style={styles.descricao}>
          Estudante de Engenharia de Software
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
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
        <View style={styles.subscriptionContainer}>
          <TouchableOpacity
            onPress={navigateToPayMensalScreen}
            style={[styles.subscriptionButton, { marginBottom: 10 }]}
          >
            <Text style={styles.subscriptionButtonText}>Pagamento Mensal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigateToPayAnualScreen}
            style={styles.subscriptionButton}
          >
            <Text style={styles.subscriptionButtonText}>Pagamento Anual</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={[styles.row, styles.center]}>
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
      <View style={styles.uploadContainer}>
        <Button title="Escolher Imagem" onPress={pickImage} />
        {selectedImage && (
          <View>
            <Image
              source={{ uri: selectedImage.uri }}
              style={styles.previewImage}
            />
            <Button title="Upload Imagem" onPress={handleUploadImage} />
          </View>
        )}
        {imageUrl && (
          <View>
            <Text>Image URL: {imageUrl}</Text>
          </View>
        )}
      </View>
      {/*</LinearGradient>*/}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    height: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 150,
    //paddingVertical: 5,
    //paddingHorizontal: 5,
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
    borderRadius: 0,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageRow: {
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#f0f8ff",
    borderRadius: 10,
  },
  subscriptionContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  subscriptionButton: {
    backgroundColor: "#fff",
    borderRadius: 150,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  subscriptionButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  uploadContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  previewImage: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginVertical: 10,
  },
});

export default HomeScreen;
