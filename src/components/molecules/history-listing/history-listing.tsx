import { Icon } from "@/src/components/atoms";
import { STORAGE_URL } from "@/src/constants";
import { colors } from "@/src/styles";
import { PresensiRecord } from "@/src/types";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
  item: PresensiRecord;
}

export const HistoryListing: React.FC<Props> = ({ item }) => {
  const [shown, setShown] = useState(false);
  const imgURL = STORAGE_URL + item.image;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        setShown((prev) => !prev);
      }}
      className="border rounded-xl mb-3 border-dashed border-gray-400 overflow-hidden"
    >
      <View className="px-4 py-4 flex-row items-center justify-between">
        <Text className="text-xs text-gray-700 font-medium">
          Jam {item.waktu.charAt(0).toUpperCase() + item.waktu.slice(1)}
        </Text>
        <View className="flex-row items-center gap-2">
          <Icon name="history" size={18} color={colors.gray[500]} />
          <Text className="text-xs text-gray-800">{item.created_at}</Text>
        </View>
      </View>

      {shown && <Image source={{ uri: imgURL }} className="w-full h-52" />}
    </TouchableOpacity>
  );
};
