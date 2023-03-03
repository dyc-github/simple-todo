import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { List, Checkbox, IconButton } from "react-native-paper";
const Task = (props) => {
  [isChecked, setIsChecked] = useState(false);
  const taskText = props.taskText;
  return (
    <List.Item
      style={styles.task}
      title={"taskText"}
      left={() => (
        <View style={styles.checkboxContainer}>
          <Checkbox.Android
            status={isChecked ? 'checked' : 'unchecked'}
            onPress={() => {
              setIsChecked(!isChecked);
            }}
          />
        </View>
      )}
      right={() => <IconButton icon="close" />}
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
