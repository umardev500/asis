import { Header, HistoryList } from "@/src/components";
import { TimeCard } from "@/src/features/present/components/time-card";
import React from "react";
import { StatusBar, View } from "react-native";

interface Props {}

export const HistoryScreen: React.FC<Props> = ({}) => {
  return (
    <>
      <StatusBar
        translucent={false}
        barStyle={"dark-content"}
        backgroundColor={"white"}
      />
      <Header title="E-Presensi" />
      <View className="flex-1 bg-white py-4">
        <TimeCard />

        <View className="mt-6" />
        <HistoryList />
      </View>
    </>
  );
};
