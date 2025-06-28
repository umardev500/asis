import { CatalogList } from "@/src/components";
import { Banner } from "@/src/features/home/components/banner";
import React from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";

interface Props {}

export const HomeScreen: React.FC<Props> = () => {
  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor={"transparent"}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 bg-white">
          <Banner />
          <View className="mt-6 px-4 pb-4">
            <Text className="font-medium text-gray-800">Peek for you</Text>
          </View>
          <CatalogList scrollEnabled={false} />
        </View>
      </ScrollView>
    </>
  );
};
