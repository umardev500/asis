import clsx from "clsx";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {}

export const PresentTypeList: React.FC<Props> = () => {
  const [selected, setSelected] = useState<string>();

  const handleSelect = (val: string) => {
    setSelected(val);
  };

  return (
    <View className="flex-row gap-2">
      <TouchableOpacity
        onPress={() => handleSelect("pagi")}
        activeOpacity={0.8}
        className={clsx(
          "flex-1 border border-dashed border-gray-300 p-4 rounded-xl",
          {
            "bg-orange-50 border-orange-500": selected === "pagi",
          }
        )}
      >
        <Text className="text-center">Pagi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleSelect("istirahat")}
        activeOpacity={0.8}
        className={clsx(
          "flex-1 border border-dashed border-gray-300 p-4 rounded-xl",
          {
            "bg-orange-50 border-orange-500": selected === "istirahat",
          }
        )}
      >
        <Text className="text-center">Istiharat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleSelect("sore")}
        activeOpacity={0.8}
        className={clsx(
          "flex-1 border border-dashed border-gray-300 p-4 rounded-xl",
          {
            "bg-orange-50 border-orange-500": selected === "sore",
          }
        )}
      >
        <Text className="text-center">Sore</Text>
      </TouchableOpacity>
    </View>
  );
};
