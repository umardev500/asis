import { Icon } from "@/src/components/atoms";
import { colors } from "@/src/styles";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {}

export const HistoryListing: React.FC<Props> = ({}) => {
  const [shown, setShown] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        setShown((prev) => !prev);
        console.log("haha");
      }}
      className="border rounded-xl mb-3 border-dashed border-gray-400 overflow-hidden"
    >
      <View className="px-4 py-4 flex-row items-center justify-between">
        <Text className="text-xs text-gray-700 font-medium">Jam Istirahat</Text>
        <View className="flex-row items-center gap-2">
          <Icon name="history" size={18} color={colors.gray[500]} />
          <Text className="text-xs text-gray-800">08:55 28-08-25</Text>
        </View>
      </View>

      {shown && (
        <Image
          source={require("@/assets/images/product-2.png")}
          className="w-full"
        />
      )}
    </TouchableOpacity>
  );
};
