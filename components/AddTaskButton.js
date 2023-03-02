import { useState } from "react";
import { Button, Dialog, TextInput } from "react-native-paper";

const AddTaskButton = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");

  const addTask = props.addTaskCallback;
  return (
    <>
      <Button
        onPress={() => {
          setIsVisible(true);
        }}
      >
        Add Task
      </Button>
      <Dialog visible={isVisible} onDismiss={() => setIsVisible(false)}>
        <Dialog.Title>Add task</Dialog.Title>
        <Dialog.Content>
          <TextInput value={text} onChangeText={(text) => setText(text)} />
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={() => {
              setIsVisible(false);
              setText("");
            }}
          >
            Cancel
          </Button>

          <Button
            onPress={() => {
              addTask(text);
              setIsVisible(false);
              setText("");
            }}
          >
            Add
          </Button>
        </Dialog.Actions>
      </Dialog>
    </>
  );
};
export default AddTaskButton;
