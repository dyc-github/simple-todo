import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, List } from "react-native-paper";
import Task from "./components/Task";
import uuid from "react-native-uuid";
import AddTaskDialog from "./components/AddTaskDialog";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [dialogIsVisible, setDialogIsVisible] = useState(false);
  const [taskComponents, setTaskComponents] = useState([]);
  const [taskData, setTaskData] = useState([]); //tasks will be formatted as such {id: taskID, text: taskText, isComplete: boolean}

  useEffect(() => {
    const newTaskComponents = taskData.map((taskDataEntry) => {
      return (
        <Task
          key={taskDataEntry.id}
          id={taskDataEntry.id}
          taskText={taskDataEntry.text}
          isComplete={taskDataEntry.isComplete}
          deleteTask={deleteTask}
          updateTaskIsComplete={updateTaskIsComplete}
        />
      );
    });
    setTaskComponents(newTaskComponents);
  }, [taskData]);

  const createTask = (taskText) => {
    const newTaskDataEntry = {
      id: uuid.v4(),
      text: taskText,
      isComplete: false,
    };
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
    <SafeAreaProvider>
      <View style={styles.container}>
        <List.Section>{taskComponents}</List.Section>
        <Button
          onPress={() => {
            setDialogIsVisible(true);
          }}
        >
          Add task
        </Button>
        <AddTaskDialog
          visible={dialogIsVisible}
          setVisible={setDialogIsVisible}
          createTask={createTask}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
