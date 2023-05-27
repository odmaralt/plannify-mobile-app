import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { Header } from "../components/Header";

export const LogsPage = () => {
  return (
    <View style={styles.mainDiv}>
      <ImageBackground
        resizeMode="cover"
        style={styles.backgroundImage}
        source={require("../assets/Dot.png")}
      >
        <Header />

        <View style={styles.top}>
          <Text style={styles.date}>Date</Text>
          <Text style={styles.remaining}>Sleep</Text>
          <Text style={styles.remaining2}>Water</Text>
          <Text style={styles.remaining3}>Journal</Text>
        </View>
        <View style={{ height: 450 }}>
          <ScrollView>
            <View style={styles.logDiv}>
              <Text style={styles.date}>01/01/2023</Text>
              <Text style={styles.remaining}>4 cups</Text>
              <Text style={styles.remaining2}>4 hr 4 min</Text>

              <Text style={styles.remaining3}>
                Hello, today I was walking to
              </Text>
            </View>
            <View style={styles.logDiv}>
              <Text style={styles.date}>01/01/2023</Text>
              <Text style={styles.remaining}>4 cups</Text>
              <Text style={styles.remaining2}>4 hr 4 min</Text>
              <Text style={styles.remaining3}>
                Hello, today I was walking to my house and then
              </Text>
            </View>
            <View style={styles.logDiv}>
              <Text style={styles.date}>01/01/2023</Text>
              <Text style={styles.remaining}>4 cups</Text>
              <Text style={styles.remaining2}>4 hr 4 min</Text>
              <Text style={styles.remaining3}>
                Hello, today I was walking to my house and then
              </Text>
            </View>
            <View style={styles.logDiv}>
              <Text style={styles.date}>01/01/2023</Text>
              <Text style={styles.remaining}>4 cups</Text>
              <Text style={styles.remaining2}>4 hr 4 min</Text>
              <Text style={styles.remaining3}>
                Hello, today I was walking to my house and then
              </Text>
            </View>
            <View style={styles.logDiv}>
              <Text style={styles.date}>01/01/2023</Text>
              <Text style={styles.remaining}>4 cups</Text>
              <Text style={styles.remaining2}>4 hr 4 min</Text>
              <Text style={styles.remaining3}>
                Hello, today I was walking to my house and then
              </Text>
            </View>
            <View style={styles.logDiv}>
              <Text style={styles.date}>01/01/2023</Text>
              <Text style={styles.remaining}>4 cups</Text>
              <Text style={styles.remaining2}>4 hr 4 min</Text>
              <Text style={styles.remaining3}>
                Hello, today I was walking to my house and then
              </Text>
            </View>
            <View style={styles.logDiv}>
              <Text style={styles.date}>01/01/2023</Text>
              <Text style={styles.remaining}>4 cups</Text>
              <Text style={styles.remaining2}>4 hr 4 min</Text>
              <Text style={styles.remaining3}>
                Hello, today I was walking to my house and then
              </Text>
            </View>
            <View style={styles.logDiv}>
              <Text style={styles.date}>01/01/2023</Text>
              <Text style={styles.remaining}>4 cups</Text>
              <Text style={styles.remaining2}>4 hr 4 min</Text>
              <Text style={styles.remaining3}>
                Hello, today I was walking to my house and then
              </Text>
            </View>
            <View style={styles.logDiv}>
              <Text style={styles.date}>01/01/2023</Text>
              <Text style={styles.remaining}>4 cups</Text>
              <Text style={styles.remaining2}>4 hr 4 min</Text>
              <Text style={styles.remaining3}>
                Hello, today I was walking to my house and then
              </Text>
            </View>
            <View style={styles.logDiv}>
              <Text style={styles.date}>01/01/2023</Text>
              <Text style={styles.remaining}>4 cups</Text>
              <Text style={styles.remaining2}>4 hr 4 min</Text>
              <Text style={styles.remaining3}>
                Hello, today I was walking to my house and then
              </Text>
            </View>
            <View style={styles.logDiv}>
              <Text style={styles.date}>01/01/2023</Text>
              <Text style={styles.remaining}>4 cups</Text>
              <Text style={styles.remaining2}>4 hr 4 min</Text>
              <Text style={styles.remaining3}>
                Hello, today I was walking to my house and then
              </Text>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  mainDiv: { backgroundColor: "#626375" },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  top: { flexDirection: "row", marginTop: 50, marginBottom: 20 },
  logDiv: { flexDirection: "row", marginTop: 30 },

  date: {
    position: "absolute",
    fontSize: 12,
    left: 20,
    color: "#DADCCF",
    fontWeight: 600,
  },
  remaining: {
    position: "absolute",
    left: 110,
    color: "#DADCCF",
    fontWeight: 600,
    fontSize: 12,
  },
  remaining2: {
    position: "absolute",
    left: 175,
    color: "#DADCCF",
    fontSize: 12,

    fontWeight: 600,
  },
  remaining3: {
    position: "absolute",
    fontSize: 12,
    left: 260,
    width: 120,
    color: "#DADCCF",
    fontWeight: 600,
  },
});
