import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      <Task taskText={'my first task'}/>
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
