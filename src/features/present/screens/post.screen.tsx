import { Header } from "@/src/components";
import React from "react";
import { Image, Text, View } from "react-native";
import { SystemBars } from "react-native-edge-to-edge";

interface Props {
  filePath: string;
}

export const PostScreen: React.FC<Props> = ({ filePath }) => {
  const photoPath = `file://${filePath}`;

  return (
    <>
      <SystemBars style={"light"} />
      <Header title="Absensi" />
      <View className="flex-1 bg-white py-4">
        <View className="px-4 flex-1">
          <View className="flex-1 w-full">
            <Image
              className="w-full h-full rounded-xl"
              source={{ uri: photoPath }}
            />
          </View>

          <View className="py-4">
            <Text className="text-center text-sm text-gray-600">Pilih Jam</Text>
          </View>

          <View></View>
        </View>
      </View>
    </>
  );
};
