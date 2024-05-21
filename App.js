import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./pages/HomeScreen";
import ChatScreen from "./pages/ChatScreen";
//import MessageScreen from "./pages/MessageScreen";
import ExploreScreen from "./pages/ExploreScreen";
import CameraScreen from "./pages/CameraScreen";
import PayAnualScreen from "./pages/PayAnualScreen";
import PayMensalScreen from "./pages/PayMensalScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.column}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
            {/*<Stack.Screen name="Message" component={MessageScreen} />*/}
            <Stack.Screen name="Explore" component={ExploreScreen} />
            <Stack.Screen name="Camera" component={CameraScreen} />
            <Stack.Screen name="PayMensal" component={PayMensalScreen} />
            <Stack.Screen name="PayAnual" component={PayAnualScreen} />
          </Stack.Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
});

export default App;
