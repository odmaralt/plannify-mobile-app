import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
} from "react-native";
import { Header } from "../components/Header";

export const JournalPage = () => {
  return (
    <View style={styles.mainDiv}>
      <ImageBackground
        resizeMode="cover"
        style={styles.backgroundImage}
        source={require("../assets/Dot.png")}
      >
        <Header />
        <Text style={styles.journalTitle}>Journal</Text>
        <View style={styles.container}>
          <View style={styles.div}>
            <TextInput
              style={styles.input}
              placeholder="I am grateful for..."
            />
          </View>
        </View>
        <View style={styles.buttons}>
          <Pressable style={styles.button1}>
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
          <Pressable style={styles.button2}>
            <Text style={styles.buttonText}>New Prompt</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    marginLeft: 54,
    marginRight: 54,
    marginTop: 16,
    justifyContent: "space-between",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  button1: {
    backgroundColor: "#606353",
    paddingTop: 10,
    width: 100,
    borderRadius: 5,
    alignItems: "center",
    paddingBottom: 10,
  },
  button2: {
    alignItems: "center",
    paddingTop: 10,
    borderRadius: 5,
    width: 160,
    paddingBottom: 10,
    backgroundColor: "#606353",
  },
  buttonText: {
    color: "#BCC2A5",
    fontWeight: 600,
    fontFamily: "Arial",

    fontSize: 16,
  },
  input: { paddingTop: 34, paddingLeft: 26 },
  journalTitle: {
    color: "#606353",
    fontSize: 48,
    fontWeight: 800,
    letterSpacing: -2,
    marginBottom: -5,
    paddingLeft: 52,
    paddingTop: 45,
  },
  container: { alignItems: "center" },
  div: {
    backgroundColor: "#E7E9DF",
    borderRadius: 6,
    height: 400,
    width: 280,
  },

  mainDiv: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8C9178",
  },
});
