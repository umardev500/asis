import { NotificationList } from "@/src/features/notification";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {}

export const NotificationScreen: React.FC<Props> = () => {
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView>
        <View className="p-4">
          <Text className="text-xl font-medium text-gray-800">
            Notification
          </Text>
        </View>

        <NotificationList />
      </SafeAreaView>
    </View>
  );
};
