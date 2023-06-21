import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { Header } from "../components/Header";
import { useFonts } from "expo-font";
import CheckBox from "@react-native-community/checkbox";
import Water from "../components/Water";
import Clock from "../components/Clock";
import { useUserProvider } from "../provider/UserProvider";
import { SavedModal } from "../components/SavedModal";
import { createSleepValues } from "../api/sleep/CreateSleep";
import { createWaterValues } from "../api/water/CreateWater";
import { updateSleep } from "../api/sleep/UpdateSleep";
import { updateWater } from "../api/water/UpdateWater";
import { deleteTask } from "../api/task/DeleteTask";
import { getTasks } from "../api/task/GetTasks";
import { getSleep } from "../api/sleep/GetSleep";
import { getWater } from "../api/water/GetWater";
import { createJournal } from "../api/journal/CreateJournal";

export const HomePage = (props) => {
  const [dateState, setDateState] = useState(new Date());
  const [data, setData] = useState([]);
  const [water, setWater] = useState("");
  const [sleep, setSleep] = useState("");
  const { userId, token } = useUserProvider();
  const [sleepData, setSleepData] = useState([]);
  const [waterData, setWaterData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const { navigation } = props;
  const [loaded] = useFonts({
    Mulish1: require("../assets/Mulish1.ttf"),
  });

  const openSavedModal = () => {
    setModalVisible(true);
  };
  const fetchSleep = async (id) => {
    await getSleep(id)
      .then((response) => {
        setSleepData(response.data);
      })
      .catch((err) => console.log(err));
  };
  const fetchWater = async (id) => {
    await getWater(id)
      .then((response) => {
        setWaterData(response.data);
      })
      .catch((err) => console.log(err));
  };

  const getAllData = async () => {
    await fetchSleep(userId._j);
    await fetchWater(userId._j);
    await fetchTasks(userId._j);
  };
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
    getAllData();
  }, []);
  const restartData = async (id) => {
    await createSleepValues({
      hoursSlept: "0",
      minutesSlept: "0",
      ownerId: id,
    });
    await createWaterValues({ cupsDrank: "0", ownerId: id, cupsTotal: "0" });
    await createJournal({ journal: "", ownerId: id });
  };

  const handleSleepChange = (value, name) => {
    setSleep({ ...sleep, [name]: value, ownerId: userId._j });
  };

  const handleWaterChange = (value, name) => {
    setWater({ ...water, [name]: value, ownerId: userId._j });
  };

  const handleSaveSleepButton = async (e) => {
    e.preventDefault();
    const values = {
      ...sleep,
    };
    if (!values.minutesSlept) {
      values.minutesSlept = "0";
    }
    if (!values.hoursSlept) {
      values.hoursSlept = "0";
    }
    if (sleepData.length <= 0) {
      if (!values.hoursSlept) {
        setError(true);
      }
      await createSleepValues(values)
        .then(async (response) => {
          openSavedModal();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await updateSleep(
        sleepData[sleepData.length - 1]?._id,
        sleep,
        sleepData
      ).then(openSavedModal());
    }
  };
  const handleSaveWaterButton = async (e) => {
    e.preventDefault();
    const values = {
      ...water,
    };
    if (waterData.length <= 0) {
      if (!values.cupsDrank) {
        setError(true);
      }
      if (!values.cupsTotal) {
        values.cupsTotal = "8";
      }

      await createWaterValues(values)
        .then(async (response) => {
          openSavedModal();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await updateWater(
        waterData[waterData.length - 1]?._id,
        water,
        waterData
      ).then(openSavedModal());
    }
  };
  const fetchTasks = async (id) => {
    await getTasks(id)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = async (id) => {
    await deleteTask(id)
      .then((response) => {
        fetchTasks(userId._j);
      })
      .catch((err) => console.log(err));
  };

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
        <Header navigation={navigation} color="#9A9E8C" />
        <View style={styles.topDiv}>
          <View style={styles.todayDiv}>
            <Text style={styles.today}>Today</Text>
            <Text style={styles.today}>
              {dateState.toLocaleDateString("en-GB", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </Text>
          </View>
          <View>
            <Text style={styles.time}>
              {dateState.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </Text>
          </View>
        </View>
        <Text style={styles.flower}>❀</Text>
        <Text style={styles.flower2}>❀</Text>
        <View style={styles.div}>
          <Text style={styles.toDoText}>To-Do List</Text>
          <View style={styles.scrollDiv}>
            <ScrollView>
              {data.length === 0 && (
                <Text style={styles.noTask}>• You have no tasks.</Text>
              )}
              {data?.map((task) => {
                return (
                  <View key={task._id} style={styles.taskDiv}>
                    <Pressable onPress={() => handleDelete(task._id)}>
                      <CheckBox
                        lineWidth={2}
                        onFillColor="#626375"
                        onCheckColor="white"
                        boxType="square"
                        style={styles.checkbox}
                      />
                    </Pressable>

                    <Text style={styles.task}>{task.task}</Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
        <Text style={styles.water}>
          How many cups of water did you drink today?
        </Text>
        {waterData && (
          <TextInput
            onChangeText={(newText) => {
              handleWaterChange(newText, "cupsDrank");
            }}
            placeholder={waterData[waterData.length - 1]?.cupsDrank || "0"}
            style={styles.waterInput}
          />
        )}
        {waterData.length < 1 && (
          <TextInput
            onChangeText={(newText) => {
              handleWaterChange(newText, "cupsDrank");
            }}
            style={styles.waterInput}
          />
        )}
        <View style={styles.waterSvg}>
          <Water />
        </View>
        <Text onPress={handleSaveWaterButton} style={styles.waterSaveButton}>
          Save
        </Text>
        <View style={styles.clockSvg}>
          <Clock />
        </View>
        <Text style={styles.hrSleep}>How many hours did you sleep today?</Text>
        {sleepData && (
          <TextInput
            onChangeText={(newText) => {
              handleSleepChange(newText, "hoursSlept");
            }}
            placeholder={sleepData[sleepData.length - 1]?.hoursSlept || "0"}
            style={styles.hrSleepInput}
          />
        )}
        {sleepData.length < 1 && (
          <TextInput
            onChangeText={(newText) => {
              handleSleepChange(newText, "hoursSlept");
            }}
            style={styles.hrSleepInput}
          />
        )}
        <Text style={styles.minSleep}>
          How many minutes did you sleep today?
        </Text>
        {sleepData && (
          <TextInput
            onChangeText={(newText) => {
              handleSleepChange(newText, "minutesSlept");
            }}
            placeholder={sleepData[sleepData.length - 1]?.minutesSlept || "0"}
            style={styles.minSleepInput}
          />
        )}
        {sleepData.length < 1 && (
          <TextInput
            onChangeText={(newText) => {
              handleSleepChange(newText, "minutesSlept");
            }}
            style={styles.minSleepInput}
          />
        )}
        <SavedModal
          text="You have successfully saved your input."
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
        <Text onPress={handleSaveSleepButton} style={styles.sleepSaveButton}>
          Save
        </Text>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  sleepSaveButton: {
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 320,
    marginTop: 12,
    color: "#3B3C49",
  },
  hrSleep: {
    fontSize: 16,
    fontWeight: 600,
    width: 200,
    marginLeft: 175,
    marginTop: -110,
    color: "#3B3C49",
  },
  minSleep: {
    fontSize: 16,
    fontWeight: 600,
    width: 200,
    marginLeft: 175,
    marginTop: 10,
    color: "#3B3C49",
  },
  hrSleepInput: {
    borderBottomWidth: 1.2,
    width: 24,
    marginLeft: 275,
    textAlign: "center",
    marginTop: -20,
  },
  minSleepInput: {
    borderBottomWidth: 1.2,
    width: 24,
    marginLeft: 305,
    textAlign: "center",

    marginTop: -20,
  },
  clockSvg: {
    marginLeft: 30,
    marginTop: 40,
  },
  waterSaveButton: {
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 215,
    marginTop: 12,
    color: "#3B3C49",
  },
  waterSvg: {
    position: "absolute",
    right: 26,
    top: 340,
  },
  waterInput: {
    borderBottomWidth: 1.2,
    width: 30,
    marginTop: -20,
    textAlign: "center",
    marginLeft: 170,
  },
  water: {
    fontSize: 16,
    fontWeight: 600,
    width: 220,
    marginLeft: 40,
    marginTop: 220,
    color: "#3B3C49",
  },
  scrollDiv: { maxHeight: 100 },
  toDoText: {
    color: "#3B3C49",
    fontSize: 22,
    fontFamily: "Mulish1",
    marginRight: 40,
    paddingBottom: 10,
    marginTop: 60,
  },
  taskDiv: {
    flexDirection: "row",
    paddingBottom: 2,
  },
  div: {
    position: "absolute",
    right: 30,
    top: 180,
  },
  task: {
    fontSize: 20,
    color: "#3B3C49",
    fontFamily: "Mulish1",
    marginLeft: -4,
  },
  noTask: {
    fontSize: 15,
    color: "#3B3C49",
    fontFamily: "Mulish1",
    marginLeft: 0,
  },
  checkbox: {
    transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }],
    marginTop: 2,
  },
  mainDiv: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  flower: {
    fontSize: 120,
    color: "#A8AC9A",
    position: "absolute",
    top: 230,
    left: 30,
  },
  flower2: {
    fontSize: 100,
    color: "#A8AC9A",
    top: 260,
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
