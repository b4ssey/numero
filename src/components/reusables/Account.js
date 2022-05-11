import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Avatar,
  Button,
  Caption,
  Headline,
  RadioButton,
  Subheading,
  Surface,
  Title,
  Text,
} from "react-native-paper";

function AccountFL({ title, description, value, status, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Surface
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginVertical: "2.5%",
          padding: "0.5%",
          height: 90,
          width: "100%",
          borderRadius: 5,
        }}
      >
        <>
          <Avatar.Image
            size={30}
            source={require("../../../assets/sample.png")}
          />
          <View style={{ justifyContent: "space-evenly" }}>
            <Text>{title}</Text>
            <Text style={{ fontSize: 10, maxWidth: "75%" }}>{description}</Text>
          </View>
          <RadioButton value={value} status={status} onPress={onPress} />
        </>
      </Surface>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AccountFL;
