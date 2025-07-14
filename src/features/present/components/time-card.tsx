import { Icon } from "@/src/components";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  onPress?: () => void;
}

export const TimeCard: React.FC<Props> = ({ onPress }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // update every second

    return () => clearInterval(timer); // cleanup
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <View className="flex-row items-center gap-2 mb-8">
      <View className="bg-orange-50 p-4 h-24 justify-center rounded-xl flex-1">
        <Text className="text-3xl font-bold text-orange-500">
          {formatTime(currentTime)}
        </Text>
        <Text className="text-xs text-gray-500 mt-1">
          {formatDate(currentTime)}
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
