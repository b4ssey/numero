import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { DrawerLayout } from "react-native-gesture-handler";
import {
  Button,
  Caption,
  DataTable,
  Divider,
  Subheading,
  Drawer,
  Title,
} from "react-native-paper";
import { LineChart } from "react-native-chart-kit";
import { LinearGradient } from "expo-linear-gradient";

const data = {
  labels: ["MAR 17", "MAR 18", "MAR 19", "MAR 20"],
  datasets: [
    {
      data: [20, 45, 28, 80],
      // [43, 99, 80, 28, 45, 20],

      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      strokeWidth: 2, // optional
    },
  ],
  legend: ["Inflow"], // optional
};

const chartConfig = {
  backgroundColor: "#FFFFFF",
  backgroundGradientFrom: "#FFFFFF",
  backgroundGradientTo: "#FFFFFF",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(192, 204, 218, ${opacity})`,
  // propsForDots: {
  //   r: "6",
  //   strokeWidth: "2",
  //   stroke: "#ffa726",
  // },
};

function Dashboard({ navigation }) {
  const screenWidth = Dimensions.get("window").width;
  let drawer = null;
  const handleDrawerSlide = (status) => {};
  const renderDrawer = () => {
    return (
      <>
        <LinearGradient
          colors={[
            "rgba(255, 255, 255, 0)",
            "rgba(165, 134, 234, 0.1)",
            "rgba(152, 116, 231, 0.2)",
          ]}
          style={{
            flex: 1,
            justifyContent: "space-between",
            paddingVertical: "25%",
          }}
        >
          <View>
            <Drawer.Item
              icon="home-outline"
              label="Home"
              style={{ color: "#04004D" }}
            />
            <Drawer.Item icon="home-outline" label="Transactions" />
            <Drawer.Item icon="home-outline" label="Accounts" />
            <Drawer.Item icon="home-outline" label="Invoice" />
            <Drawer.Item icon="home-outline" label="Issuing" />
            <Drawer.Item icon="home-outline" label="API Docs" />
          </View>
          <View style={{ padding: "10%" }}>
            <Text style={{ maxWidth: "75%", color: "#04004D" }}>
              Megatrust Nigeria Foods Limited
            </Text>
          </View>
        </LinearGradient>
      </>
    );
  };
  return (
    <DrawerLayout
      ref={(refDrawer) => (drawer = refDrawer)}
      drawerWidth={screenWidth * 0.6}
      drawerPosition={DrawerLayout.positions.Left}
      drawerType="front"
      drawerBackgroundColor="#E5E5E5"
      renderNavigationView={() => renderDrawer()}
      onDrawerSlide={() => handleDrawerSlide()}
    >
      <LinearGradient
        colors={[
          "rgba(255, 255, 255, 0)",
          "rgba(165, 134, 234, 0.1)",
          "rgba(152, 116, 231, 0.2)",
        ]}
        style={styles.container}
      >
        <View style={{ height: "5%" }} />

        <>
          <Title>Dashboard</Title>
          <Subheading>Transaction Analytics</Subheading>
          <View style={{ height: "2.5%" }} />
          <LineChart
            data={data}
            width={screenWidth - screenWidth * 0.075}
            height={256}
            chartConfig={chartConfig}
            bezier
            style={{
              borderRadius: 5,
              borderWidth: 0.5,
              borderColor: "#5F31B4",
              padding: "1.25%",
            }}
          />
        </>
        <>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: "2.5%",
            }}
          >
            <Subheading>Transactions</Subheading>
            <Button
              icon="arrow-right-circle"
              mode="text"
              onPress={() => console.log("Pressed")}
              uppercase={false}
            >
              See all
            </Button>
          </View>
          <Divider />
          <View>
            <Caption>March 24th, 2021</Caption>
            <View>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>Tran ID</DataTable.Title>
                  <DataTable.Title numeric>Date</DataTable.Title>
                  <DataTable.Title numeric>Amount</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell>103827</DataTable.Cell>
                  <DataTable.Cell numeric>03/24/2021</DataTable.Cell>
                  <DataTable.Cell numeric>300,000</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell>103827</DataTable.Cell>
                  <DataTable.Cell numeric>03/24/2021</DataTable.Cell>
                  <DataTable.Cell numeric>300,000</DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>
          </View>
          <View style={{ height: "5%" }} />
          <Button
            mode="text"
            onPress={() => navigation.navigate("account")}
            uppercase={false}
          >
            To acount details
          </Button>
        </>
      </LinearGradient>
    </DrawerLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2.5%",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default Dashboard;
