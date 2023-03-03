import { useState } from "react";
import { Dialog, TextInput, Text, Button } from "react-native-paper";

const AddTaskDialog = (props) => {
  const isVisible = props.visible;
  const setIsVisible = props.setVisible;
  const createTask = props.createTask;

  const [taskText, setTaskText] = useState("");

  const dismissDialog = () => {
    setTaskText("");
    setIsVisible(false);
  };

  return (
    <Dialog visible={isVisible} onDismiss={dismissDialog}>
      <Dialog.Title>
        <Text>Add a task</Text>
      </Dialog.Title>
      <Dialog.Content>
        <TextInput
          value={taskText}
          onChangeText={(text) => {
            setTaskText(text);
          }}
        ></TextInput>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={dismissDialog}>Cancel</Button>
        <Button
          onPress={() => {
            dismissDialog();
            createTask(taskText);
          }}
        >
          Add
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
};

export default AddTaskDialog;
