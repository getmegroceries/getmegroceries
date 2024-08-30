import { Button, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20, // Add padding to the View
      }}
    >
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20, // Add margin to the TextInput
          width: '80%', // Ensure the TextInput has a width
        }}
      />
      <Button title="Go" onPress={onPress}/>
    </View>
  );

  // Add a function to the onPress prop
  function onPress() {
    console.log('Button pressed');
  }
}