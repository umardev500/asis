import React from "react";
import { Text, View } from "react-native";

interface Props {}

export const HomeScreen: React.FC<Props> = () => {
  return (
    <View className="flex-1 bg-white">
      <Text>Home</Text>
    </View>
  );
};
