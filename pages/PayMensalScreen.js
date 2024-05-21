import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const PayMensalScreen = () => {
  const navigation = useNavigation();

  const handlePayment = () => {
    alert("Pagamento mensal processado!");
    navigation.navigate("Home");
  };

  return (
    <ImageBackground
      source={require("./img/fundo.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Pagamento Mensal</Text>
        <TextInput placeholder="Número do Cartão" style={styles.input} />
        <TextInput placeholder="Data de Validade" style={styles.input} />
        <TextInput placeholder="CVV" style={styles.input} secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Confirmar Pagamento</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
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
});

export default PayMensalScreen;
