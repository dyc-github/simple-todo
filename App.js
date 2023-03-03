import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, List } from "react-native-paper";
import Task from "./components/Task";
import uuid from 'react-native-uuid';

export default function App() {
  const [taskComponents, setTaskComponents] = useState([]);
  const [taskData, setTaskData] = useState([]); //tasks will be formatted as such {id: taskID, taskText: taskText, isComplete: boolean}

  const createTask = (taskText) => {
    const newTaskDataEntry = { id: uuid.v4(), taskText: taskText, isComplete: false };
    setTaskData([...taskData, newTaskDataEntry]);
  };
  const deleteTask = (id) => {
    const newTaskData = taskData.filter(
      (taskDataEntry) => taskDataEntry.id !== id
    );
    setTaskData(newTaskData);
  };
  const updateTaskIsComplete = (id, isComplete) => {
    const newTaskData = taskData.map((taskDataEntry) => {
      if (taskDataEntry.id === id) {
        taskDataEntry.isComplete = isComplete;
      }
      return taskDataEntry;
    });
    setTaskData(newTaskData);
  };


  return (
    <View style={styles.container}>
      <List.Section>{taskComponents}</List.Section>
      <Button
        onPress={() => {
          console.log("hello world");
        }}
      >
        Add task
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
