import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Button, Caption, Headline } from "react-native-paper";
import Account from "../components/reusables/Account";
import { LinearGradient } from "expo-linear-gradient";

function ChooseAccount(props) {
  const [checked, setChecked] = React.useState("");
  return (
    // <View style={styles.container}>
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
      <View>
        <Account
          title="Business Owner"
          description="You’re a freelance/developer with little to no knowledge about the business."
          value="owner"
          status={checked === "owner" ? "checked" : "unchecked"}
          onPress={() => setChecked("owner")}
        />
        <Account
          title="Employee"
          description="You’re a freelance/developer with little to no knowledge about the business."
          value="employee"
          status={checked === "employee" ? "checked" : "unchecked"}
          onPress={() => setChecked("employee")}
        />
        <Account
          title="Developer"
          description="You’re a freelance/developer with little to no knowledge about the business."
          value="developer"
          status={checked === "developer" ? "checked" : "unchecked"}
          onPress={() => setChecked("developer")}
        />
      </View>
      <View style={{ height: "5%" }} />
      <View style={{ width: "100%", alignItems: "center" }}>
        <Button
          mode="contained"
          uppercase={false}
          onPress={() => console.log("Pressed")}
          style={{ width: "100%", paddingVertical: "2.5%" }}
        >
          Sign Up
        </Button>
        <View style={{ height: "5%" }} />
        <Caption style={{ textAlign: "center", maxWidth: "75%" }}>
          By clicking this, you agree to our Data privacy terms and conditions
        </Caption>
      </View>
    </LinearGradient>
    // </View>
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

export default ChooseAccount;
