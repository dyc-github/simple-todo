import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Checkbox, IconButton, List } from "react-native-paper";
const Task = (props) => {
  const setIsChecked = props.setIsCheckedCallback;
  const deleteTask = props.deleteTaskCallback;
  const [checked, setChecked] = useState(props.isChecked);
  return (
    <List.Item
      style={styles.listItem}
      key={props.id}
      title={props.title}
      left={() => (
        <View style={styles.checkboxContainer}>
          <Checkbox.Android
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
              setIsChecked(props.id, !checked);
            }}
          />
        </View>
      )}
      right={() => (
        <IconButton
          icon="close"
          size={20}
          onPress={() => {
            deleteTask(props.id);
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  listItem: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Task;
