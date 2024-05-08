import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

const UserProfileScreen = () => {
  return (
    <ImageBackground source={require('./assets/fundo.jpg')} style={styles.container}>
      {/* Restante do conteúdo */}
      {/* Contêiner para a foto do usuário */}
      <Image
        source={require('./assets/everton.jpg')} // Substitua pelo caminho da sua foto
        style={styles.userPhoto}
      />
      
      {/* Nome do usuário */}
      <Text style={styles.userName}>@evertonmoscaleski</Text>
      
      {/* Breve descrição do usuário */}
      <Text style={styles.userDescription}>Estudante de Engenharia de Software</Text>
      
      {/* Botões "Seguindo" e "Mensagem" */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>Seguindo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Mensagem</Text>
        </TouchableOpacity>
      </View>
      
      {/* Botões para ver "todas as fotos" e "todos os vídeos" */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>Todas as Fotos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Todos os Vídeos</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  userPhoto: {
    width: 200,
    height: 200,
    borderRadius: 100, // Para tornar a foto circular
    alignSelf: 'center',
    marginTop: 50,
  },
  userName: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  userDescription: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#c6cdf1', // Cor dos botões
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
});

export default UserProfileScreen;

