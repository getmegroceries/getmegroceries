import { useState } from "react";
import { Button, TextInput, Text, View } from "react-native";

export default function Index() {
  const [id, setId] = useState("");

  const addFollowerHandler = async () => {
    await onFollowerPress(id);
  };

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
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20, // Add margin to the TextInput
          width: "80%", // Ensure the TextInput has a width
        }}
        defaultValue={id}
        onChangeText={setId}
      />
      <Text>{id}</Text>
      <Button title="Add follower" onPress={addFollowerHandler} />
    </View>
  );

  // Add a function to the onPress prop
  async function onPress() {
    console.log("Button pressed");
    const request = new Request("http://localhost:3000/followers");
    request.headers.set("Content-Type", "application/json");
    request.headers.set("x-user-id", "1");
    try {
      const response = await fetch(request);
      const json = await response.json();
      console.log("the json", json);
    } catch (e) {
      console.log(e);
    }
  }

  async function onFollowerPress(id: string) {
    console.log("Button pressed");
    const request = new Request("http://localhost:3000/followers", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({ followerId: id }),
    });

    request.headers.set("x-user-id", "1");

    try {
      const response = await fetch(request);
      const json = await response.json();
      console.log("the json", json);
    } catch (e) {
      console.log(e);
    }
  }
}
