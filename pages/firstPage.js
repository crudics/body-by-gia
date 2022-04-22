import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <View style={{ flex: 1, margin: 0 }}>
      <WebView
        style={{ flex: 1, marginTop: 0 }}
        originWhitelist={["*"]}
        javaScriptEnabled={true}
        source={{
          html: `<iframe width="100%" height="100%" src="https://bodybygia.com//" frameborder="0"></iframe>`,
        }}
      />
    </View>
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
