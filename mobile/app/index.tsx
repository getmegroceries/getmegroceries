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
  async function onPress() {
    console.log('Button pressed');
    const request = new Request('http://localhost:3000/followers')
    request.headers.set('Content-Type', 'application/json')
    request.headers.set('x-user-id', '1')
    const response = await fetch(request)
    const json = await response.json()
    console.log("the json", json)
  }
}