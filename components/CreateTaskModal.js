import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  TextInput,
  Pressable,
} from "react-native";

export const CreateTaskModal = (props) => {
  const { setModalVisible, modalVisible } = props;
  const closeModal = () => {
    Alert.alert("Modal has been closed.");
    setModalVisible(!modalVisible);
  };
  const openModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          closeModal();
        }}
      >
        <View style={styles.modalDiv}>
          <View style={styles.div}>
            <Text style={styles.addTaskText}>Add a Task:</Text>
            <TextInput style={styles.taskInput} placeholder="Task"></TextInput>
            <View style={styles.buttonsDiv}>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={() => openModal()}>
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  taskInput: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    borderColor: "#A1A591",
  },
  buttonsDiv: {
    flexDirection: "row",
    marginTop: 12,
  },
  buttonText: {
    color: "#D1D3CA",
    fontWeight: 600,
  },
  button: {
    backgroundColor: "#606353",
    borderRadius: 4,
    padding: 6,
    marginRight: 6,
  },
  div: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 4,
    padding: 20,
    width: 220,
    borderWidth: 0.2,
  },
  modalDiv: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  addTaskText: {
    color: "#606353",
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 600,
  },
});
