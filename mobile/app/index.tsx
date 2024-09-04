import { useEffect, useState } from "react";
import { Button, TextInput, Text, View } from "react-native";

export default function Index() {
  const [id, setId] = useState("");
  const [followers, setFollowers] = useState<string[]>([]);

  useEffect(() => {
    const followers = getFollowers().then((data) => {
      console.log("the followers", data)
      setFollowers(data);
      console.log("in use effect")
    })
  }, []);

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
      <Text>{"Your followers: " + followers}</Text>
      <Button title="Add follower" onPress={addFollowerHandler} />
    </View>
  );

  // Add a function to the onPress prop
  async function getFollowers() {
    console.log("Button pressed");
    const request = new Request("http://localhost:3000/followers");
    request.headers.set("Content-Type", "application/json");
    request.headers.set("x-user-id", "1");
    try {
      const response = await fetch(request);
      const json = await response.json();
      return json
    } catch (e) {
      console.log(e);
    }
  }

  async function onFollowerPress(id: string) {
    console.log("on followers Button pressed");
    const request = new Request("http://localhost:3000/followers", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({ followerId: id }),
    });

    request.headers.set("x-user-id", "1");

    try {
      await fetch(request);
      setFollowers([...followers, id]);
    } catch (e) {
      console.log(e);
    }
  }
}
