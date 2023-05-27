import React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";

export const LoginPage = () => {
  return (
    <View style={styles.mainDiv}>
      <View style={styles.centerDiv}>
        <View style={styles.header}>
          <Pressable>
            <Text style={styles.loginHeader}>Login</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.signUpHeader}>Sign Up</Text>
          </Pressable>
        </View>
        <View style={styles.inputDiv}>
          <View style={styles.flex}>
            <Text style={styles.inputText}>Email</Text>
            <Text style={styles.required}>*</Text>
          </View>

          <TextInput style={styles.input} />
          <View style={styles.flex}>
            <Text style={styles.inputText}>Password</Text>
            <Text style={styles.required}>*</Text>
          </View>
          <TextInput style={styles.input} />
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Create an account</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingTop: 30,
    paddingLeft: 30,
  },
  flex: { flexDirection: "row" },
  required: { color: "#EE9E44", paddingLeft: 2 },
  inputDiv: {
    paddingLeft: 30,
    paddingTop: 40,
    paddingRight: 30,
  },
  input: {
    borderRadius: 4,
    borderWidth: 0.6,
    marginTop: 10,
    borderColor: "#DADADA",
    backgroundColor: "#FFFFFF",
    height: 30,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#F0BB7F",
    borderRadius: 4,
    marginLeft: 30,
    marginRight: 30,
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: 600,
    fontFamily: "Arial",
  },
  inputText: {
    color: "#53524F",
    fontSize: 14,
    fontWeight: 500,
  },
  loginHeader: {
    fontSize: 12,
    color: "rgba(83, 82, 79, 1)",
    fontWeight: 600,
    paddingRight: 20,
    textDecorationLine: "underline",
  },
  signUpHeader: {
    fontSize: 12,
    color: "rgba(83, 82, 79, 1)",
    fontWeight: 600,
    paddingRight: 20,
  },

  mainDiv: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDBD2",
  },
  centerDiv: {
    backgroundColor: "#F5F5F5",
    width: 300,
    borderRadius: 8,
    height: 360,
  },
});
