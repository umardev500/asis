import { Icon } from "@/src/components";
import { colors } from "@/src/styles";
import { Notification } from "@/src/types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  item: Notification;
}

export const NotificationListing: React.FC<Props> = ({ item }) => {
  const { title, message, timestamp, icon } = item;

  return (
    <TouchableOpacity
      onPress={() => console.log("pressed")}
      activeOpacity={0.7}
      className="px-4 flex-row items-center gap-4 py-4 border-b border-gray-100"
    >
      <Icon name={icon} size={24} color={colors.gray[500]} />
      <View className="gap-0.5">
        <Text className="text-base text-gray-800">{title}</Text>
        <Text className="text-sm text-gray-600">{message}</Text>
      </View>
    </TouchableOpacity>
  );
};
