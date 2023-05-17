import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = props => {
  return (
    <TouchableOpacity
      className="mt-3 rounded-xl py-3"
      style={{ elevation: 1, backgroundColor: props.bgColor }}
      onPress={() => props.navigation.navigate(props.goto)}
    >
      <Text
        className="text-center text-base"
        style={{ color: props.textColor }}
      >
        {props.content}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
