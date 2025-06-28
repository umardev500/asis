import { Icon } from "@/src/components/atoms";
import { colors } from "@/src/styles";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  title?: string;
}

export const Header: React.FC<Props> = ({ title = "Title" }) => {
  const router = useRouter();

  return (
    <View className="h-12 flex-row items-center px-4 bg-white">
      <TouchableOpacity onPress={() => router.back()}>
        <Icon name="arrow_back" size={24} color={colors.gray[800]} />
      </TouchableOpacity>

      <View className="flex-1 pl-6">
        <Text className="text-lg font-medium">{title}</Text>
      </View>
    </View>
  );
};
