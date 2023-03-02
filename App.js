import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { List } from "react-native-paper";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Task from "./components/Task";
import AddTaskButton from "./components/AddTaskButton";
import uuid from "react-native-uuid";

export default function App() {
  const [taskData, setTaskData] = useState([]);
  const [taskListComponent, setTaskListComponent] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("taskDataMemory")
      .then((data) => {
        if (data !== null) {
          const dataJSON = JSON.parse(data);
          setTaskData(dataJSON);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addTaskCallback = (task) => {
    setTaskData([
      ...taskData,
      { id: uuid.v4(), title: task, isChecked: false },
    ]);
  };

  const setIsCheckedCallback = (id, isChecked) => {
    const updatedTaskData = taskData.map((task) => {
      if (task.id === id) {
        task.isChecked = isChecked;
      }
      return task;
    });
    setTaskData(updatedTaskData);
  };

  const deleteTaskCallback = (id) => {
    const updatedTaskData = taskData.filter((task) => task.id !== id);
    setTaskData(updatedTaskData);
  };

  useEffect(() => {
    const taskDataString = JSON.stringify(taskData);
    AsyncStorage.setItem("taskDataMemory", taskDataString).catch(() => {});

    const taskList = taskData.map((item) => {
      return (
        <Task
          key={item.id}
          id={item.id}
          title={item.title}
          isChecked={item.isChecked}
          setIsCheckedCallback={setIsCheckedCallback}
          deleteTaskCallback={deleteTaskCallback}
        />
      );
    });
    setTaskListComponent(taskList);
  }, [taskData]);

  return (
    <SafeAreaProvider style={styles.container}>
      <List.Section style={styles.list}>{taskListComponent}</List.Section>
      <AddTaskButton addTaskCallback={addTaskCallback} />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
