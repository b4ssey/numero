import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import {
  Button,
  Caption,
  Headline,
  Surface,
  TextInput,
} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

function CreateAccount(props) {
  const [text, setText] = React.useState("");
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
          Get your coperate business account for free
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
            label="Email"
            placeholder="tommyodus@gmail.com"
            mode="outlined"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <View style={{ height: "10%" }} />
          <TextInput
            label="Password (6 Characters or more)"
            placeholder="*********"
            mode="outlined"
            value={text}
            secureTextEntry
            right={<TextInput.Icon name="eye" />}
            onChangeText={(text) => setText(text)}
          />
        </Surface>
        <View style={{ height: "5%" }} />
        <Button
          mode="contained"
          uppercase={false}
          onPress={() => console.log("Pressed")}
          style={{ width: "100%", paddingVertical: "2.5%" }}
        >
          Sign Up
        </Button>
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

export default CreateAccount;
