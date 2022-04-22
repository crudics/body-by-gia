import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import firstPage from "./pages/firstPage";
import OneSignal from "react-native-onesignal";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  useEffect(() => {
    //OneSignal Init Code
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId("e63dfc93-ed8b-46e9-befe-7a78d747cf90D");
    //END OneSignal Init Code

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler((notification) => {
      console.log("OneSignal: notification opened:", notification);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="Body By Gia"
          component={firstPage}
          options={{
            title: "Body By Gia", //Set Header Title

            headerStyle: {
              backgroundColor: "#ec078f", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold",
              alignContent: "center",
              //Set Header text style
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
