import { Header, HistoryList } from "@/src/components";
import { TimeCard } from "@/src/features/present/components/time-card";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SystemBars } from "react-native-edge-to-edge";

interface Props {}

export const HistoryScreen: React.FC<Props> = ({}) => {
  const router = useRouter();

  const handlePressCreatePresent = () => {
    router.navigate("/present/take-pic");
  };

  return (
    <>
      <SystemBars style={"light"} />
      <Header title="E-Presensi" />
      <View className="flex-1 bg-white py-4">
        <TimeCard onPress={handlePressCreatePresent} />

        <View className="mt-6" />
        <HistoryList />
      </View>
    </>
  );
};
