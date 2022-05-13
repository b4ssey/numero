import React from "react";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../../screens/Account";
import BusinessOwner from "../../screens/BusinessOwner";
import ChooseAccount from "../../screens/ChooseAccount";
import CreateAccount from "../../screens/CreateAccount";
import Dashboard from "../../screens/Dashboard";

const Stack = createNativeStackNavigator();

function Overview(props) {
  return (
    <Stack.Navigator
      initialRouteName="choose"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="account" component={Account} />
      <Stack.Screen name="business" component={BusinessOwner} />
      <Stack.Screen name="choose" component={ChooseAccount} />
      <Stack.Screen name="create" component={CreateAccount} />
      <Stack.Screen name="dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

export default Overview;
