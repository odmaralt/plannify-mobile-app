import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTextRight}>✮✮✮</Text>
      <Text style={styles.headerTextSpace}>Journal</Text>
      <Text style={styles.headerText}>To-Do</Text>
      <Text style={styles.headerText}>Logs</Text>
      <Text style={styles.headerTextLeft}>Sign out</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 45,
  },
  headerText: {
    fontFamily: "Arial",
    color: "#DADCCF",
    fontWeight: 600,
    fontSize: 15,
  },
  headerTextRight: {
    color: "#DADCCF",
    fontFamily: "Arial",
    fontWeight: 700,
    fontSize: 18,
    paddingLeft: 30,
  },
  headerTextLeft: {
    color: "#DADCCF",
    fontFamily: "Arial",
    fontWeight: 600,
    fontSize: 15,
    paddingRight: 30,
  },
  headerTextSpace: {
    color: "#DADCCF",
    fontWeight: 600,
    fontSize: 15,
    fontFamily: "Arial",

    paddingLeft: 30,
  },
});
