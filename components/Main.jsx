import { Text, StyleSheet, View } from "react-native";
import Input from "./Input";
import List from "./List";

export const Main = () => {
  return (
    <View style={styles.container}>
      <Input />
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: "50%",
  },
});

export default Main;
