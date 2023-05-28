import React from "react";
import { View, StyleSheet, Text, Modal, Pressable } from "react-native";

export const ViewJournalModal = (props) => {
  const { setModalVisible, modalVisible } = props;
  const closeModal = () => {
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
            <Text style={styles.journalText}>
              Hello, today I was walking to my house and then Hello, today I was
              walking to my house and then Hello, today I was walking to my
              house and then Hello, today I was walking to my house and then
              Hello, today I was walking to my house and then Hello, today I was
              walking to my house and then Hello, today I was walking to my
              house and then
            </Text>
            <Pressable style={styles.closeButton} onPress={() => closeModal()}>
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  closeButton: {
    backgroundColor: "#626375",
    borderRadius: 4,
    padding: 6,
    marginRight: 6,
    marginTop: 20,
  },
  buttonText: {
    color: "#D1D3CA",
    textAlign: "center",

    fontWeight: 600,
  },
  div: {
    margin: 20,
    backgroundColor: "#F2f2f2",
    borderRadius: 4,
    padding: 28,
    width: 250,
    borderWidth: 0.2,
  },
  journalText: { color: "#3B3C49" },
  modalDiv: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});
