import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Subheading,
  Avatar,
  Card,
  IconButton,
  Surface,
  Caption,
  Text,
  Title,
} from "react-native-paper";
import { ProgressChart } from "react-native-chart-kit";

function Account(props) {
  const screenWidth = Dimensions.get("window").width;
  const data = {
    // labels: ["Swim", "Bike", "Run"], // optional,
    data: [0.6, 0.4],
  };
  const chartConfig = {
    backgroundGradientFrom: "#FFFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFF",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    // useShadowColorFromDataset: false, // optional
  };
  return (
    <LinearGradient
      colors={[
        "rgba(255, 255, 255, 0)",
        "rgba(165, 134, 234, 0.1)",
        "rgba(152, 116, 231, 0.2)",
      ]}
      style={styles.container}
    >
      <ScrollView style={{ padding: "1.25%" }}>
        <View style={{ height: "5%" }} />
        <Surface
          style={{
            backgroundColor: "#48258D",
            borderRadius: 10,
            padding: "5%",
          }}
        >
          <Caption style={{ color: "#FFFFFF" }}>Total Balance</Caption>
          <Title style={{ color: "#FFFFFF" }}>NGN 7,000,000.00</Title>
          <View
            style={{
              flexDirection: "row",
              padding: "5%",
              width: "100%",
              justifyContent: "space-between",
              backgroundColor: "#3D2381",
              borderRadius: 10,
              marginVertical: "5%",
            }}
          >
            <Text style={{ color: "#FFFFFF" }}>Available Balance:</Text>
            <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
              NGN 7,000,000.00
            </Text>
          </View>
        </Surface>
        <View style={{ height: "2.5%" }} />
        <Subheading>Account Summary</Subheading>
        <View style={{ height: "2.5%" }} />
        <Surface style={{ borderRadius: 5 }}>
          <Card.Title
            title="Total Deposit"
            subtitle="NGN 7,000,000.00"
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon="arrow-bottom-right"
                style={{ backgroundColor: "#5F31B4" }}
              />
            )}
            style={{ backgroundColor: "#FBF7FD", borderRadius: 5 }}
          />
        </Surface>

        <View style={{ height: "2.5%" }} />
        <Surface style={{ borderRadius: 5 }}>
          <Card.Title
            title="Total Transfers"
            subtitle="NGN 7,000,000.00"
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon="arrow-top-left"
                style={{ backgroundColor: "#059669" }}
              />
            )}
            style={{ backgroundColor: "#ECFDF5", borderRadius: 5 }}
          />
        </Surface>

        <View style={{ height: "2.5%" }} />
        <Surface style={{ borderRadius: 5 }}>
          <Card.Title
            title="Accured Interest"
            subtitle="NGN 7,000,000.00"
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon="signal-cellular-3"
                style={{ backgroundColor: "#5F31B4" }}
              />
            )}
            style={{ backgroundColor: "#FBF7FD", borderRadius: 5 }}
          />
        </Surface>
        <View style={{ height: "2.5%" }} />
        <Surface style={{ borderRadius: 10 }}>
          <Card>
            <Card.Title
              title="Payout Distribution"
              right={(props) => (
                <Avatar.Icon
                  {...props}
                  icon="dots-vertical"
                  style={{ marginRight: "5%", backgroundColor: "#FFFF" }}
                />
              )}
            />
            <Card.Content>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <ProgressChart
                  data={data}
                  width={screenWidth / 4}
                  height={150}
                  strokeWidth={5}
                  radius={15}
                  chartConfig={chartConfig}
                  hideLegend={true}
                />
                <Surface
                  style={{
                    height: 60,
                    alignItems: "center",
                    justifyContent: "center",
                    width: 60,
                    alignItems: "center",
                    borderRadius: 10,
                    backgroundColor: "#FBF7FD",
                  }}
                >
                  <Subheading style={{ color: "#6D3CC8" }}>60%</Subheading>
                </Surface>
                <Surface
                  style={{
                    height: 60,
                    alignItems: "center",
                    borderRadius: 10,
                    width: 60,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#ECFDF5",
                  }}
                >
                  <Subheading style={{ color: "#059669" }}>40%</Subheading>
                </Surface>
              </View>
            </Card.Content>
          </Card>
        </Surface>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    // alignItems: "center",
    // justifyContent: "center",},
  },
});

export default Account;
