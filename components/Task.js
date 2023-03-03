import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { List, Checkbox, IconButton } from "react-native-paper";
const Task = (props) => {
  const taskText = props.taskText;
  const id = props.id;
  const isComplete = props.isComplete;
  const deleteTask = props.deleteTask;
  const updateTaskIsComplete = props.updateTaskIsComplete;
  return (
    <List.Item
      style={styles.task}
      title={taskText}
      left={() => (
        <View style={styles.checkboxContainer}>
          <Checkbox.Android
            status={isComplete ? 'checked' : 'unchecked'}
            onPress={() => {
              updateTaskIsComplete(id, !isComplete);
            }}
          />
        </View>
      )}
      right={() => <IconButton icon="close" onPress={()=>{deleteTask(id)}}/>}
    />
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  task: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Task;
