import { Icon } from "@/src/components";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  onPress?: () => void;
}

export const TimeCard: React.FC<Props> = ({ onPress }) => {
  return (
    <View className="px-4 flex-row items-center gap-2">
      <View className="bg-orange-50 p-4 h-24 justify-center rounded-xl flex-1">
        <Text className="text-3xl font-bold text-orange-500">08:51</Text>
        <Text className="text-xs text-gray-500 mt-1">
          Selasa, 12 Oktober 2025
        </Text>
      </View>

      <TouchableOpacity
        onPress={onPress}
        className="bg-orange-500 h-24 w-24 rounded-2xl items-center justify-center gap-0.5"
      >
        <Icon name="fingerprint" size={32} color={"white"} />
        <Text className="text-sm font-medium text-white">Absen</Text>
      </TouchableOpacity>
    </View>
  );
};
