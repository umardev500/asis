import { CatalogList } from "@/src/components";
import { Banner } from "@/src/features/home/components/banner";
import { Menu } from "@/src/features/home/components/menu";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SystemBars } from "react-native-edge-to-edge";

interface Props {}

export const HomeScreen: React.FC<Props> = () => {
  return (
    <>
      <SystemBars style={"light"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 bg-white">
          <Banner />

          <Menu />

          <View className="mt-6 px-4 pb-4">
            <Text className="font-medium text-gray-800">Peek for you</Text>
          </View>
          <CatalogList scrollEnabled={false} />
        </View>
      </ScrollView>
    </>
  );
};
