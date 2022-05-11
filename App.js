import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BusinessOwner from "./src/screens/BusinessOwner";
import ChooseAccount from "./src/screens/ChooseAccount";
import CreateAccount from "./src/screens/CreateAccount";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <BusinessOwner />
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
