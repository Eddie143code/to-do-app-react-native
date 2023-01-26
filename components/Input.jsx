import { Text, StyleSheet, View, TextInput } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
  },
});

export const Input = () => {
  return (
    <View>
      <TextInput style={styles.textInput} placeholder="Enter text here" />
    </View>
  );
};

export default Input;
