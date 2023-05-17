import { Text } from "react-native";
import React from "react";

export default function Heading(props) {
  return (
    <Text className="text-textDark text-4xl font-extrabold">
      {props.content}
    </Text>
  );
}
