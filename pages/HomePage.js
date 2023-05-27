import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { Header } from "../components/Header";
import { useFonts } from "expo-font";

export const HomePage = () => {
  const [loaded] = useFonts({
    Mulish1: require("../assets/Mulish1.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.mainDiv}>
      <ImageBackground
        resizeMode="cover"
        style={styles.backgroundImage}
        source={require("../assets/DarkerDots.png")}
      >
        <Header color="#9A9E8C" />
        <View style={styles.topDiv}>
          <View style={styles.todayDiv}>
            <Text style={styles.today}>Today</Text>
            <Text style={styles.today}>01-01-2023</Text>
          </View>
          <View>
            <Text style={styles.time}>12:00 PM</Text>
          </View>
        </View>
        <Text style={styles.flower}>❀</Text>
        <Text style={styles.flower2}>❀</Text>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  mainDiv: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F2f2",
  },
  flower: {
    fontSize: 120,
    color: "#A8AC9A",
    position: "absolute",
    top: 180,
    left: 30,
  },
  flower2: {
    fontSize: 100,
    color: "#A8AC9A",
    top: 210,
    left: 110,
    position: "absolute",
  },
  topDiv: { flexDirection: "row", justifyContent: "space-between" },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  todayDiv: { paddingLeft: 40, paddingTop: 45 },
  today: {
    fontSize: 20,
    fontWeight: 600,
    paddingBottom: 8,
    color: "#3B3C49",
  },
  time: {
    fontSize: 30,
    marginTop: 45,
    marginRight: 40,
    fontWeight: 600,
    color: "#727489",
    padding: 6,
    borderWidth: 3,
    borderColor: "#A8AC9A",
    borderRadius: 5,
  },
});
