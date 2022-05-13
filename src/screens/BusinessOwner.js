import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import {
  Button,
  Caption,
  Headline,
  Portal,
  Surface,
  TextInput,
} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";

function BusinessOwner({ navigation }) {
  const [rc, setRC] = React.useState("");
  const [bvn, setBVN] = React.useState("");
  const [nin, setNIN] = React.useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={[
          "rgba(255, 255, 255, 0)",
          "rgba(165, 134, 234, 0.1)",
          "rgba(152, 116, 231, 0.2)",
        ]}
        style={styles.container}
      >
        <Headline style={{ textAlign: "center", maxWidth: "80%" }}>
          Director/Business owner verifications
        </Headline>
        <View style={{ height: "5%" }} />
        <Surface
          style={{
            justifyContent: "center",
            padding: "2.5%",
            borderRadius: 5,
            width: "100%",
          }}
        >
          <TextInput
            label="RC Number"
            placeholder="Your RC Number"
            mode="outlined"
            value={rc}
            onChangeText={(text) => setRC(text)}
          />
          <View style={{ height: "5%" }} />
          <TextInput
            label="BVN"
            placeholder="Your BVN"
            mode="outlined"
            value={bvn}
            onChangeText={(text) => setBVN(text)}
          />
          <View style={{ height: "5%" }} />
          <TextInput
            label="NIN (National Identification Number)"
            placeholder="Your NIN"
            mode="outlined"
            value={nin}
            onChangeText={(text) => setNIN(text)}
          />
        </Surface>
        <View style={{ height: "5%" }} />
        <Button
          mode="contained"
          uppercase={false}
          onPress={() => navigation.navigate("dashboard")}
          style={{ width: "100%", paddingVertical: "2.5%" }}
        >
          Verify Business
        </Button>
        <Portal></Portal>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BusinessOwner;
