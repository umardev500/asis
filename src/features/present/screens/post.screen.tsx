import { Header } from "@/src/components";
import { PresentTypeList } from "@/src/features/present/components/present-type-list";
import { usePresentStore } from "@/src/store";
import React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { SystemBars } from "react-native-edge-to-edge";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  filePath: string;
}

export const PostScreen: React.FC<Props> = ({ filePath }) => {
  const photoPath = `file://${filePath}`;
  const store = usePresentStore((state) => state);

  const { top, bottom } = useSafeAreaInsets();

  const handleSave = () => {
    if (store.coordinates === undefined || store.presentType === undefined) {
      Alert.alert("Incomplete Data", "Lengkapi data terlebih dahulu", [
        { text: "OK", style: "cancel" },
      ]);

      return;
    }
    console.log(store);
  };

  return (
    <>
      <SystemBars style={"dark"} />
      <View style={{ height: top }} className="bg-white" />
      <Header title="Absensi" />
      <View
        className="flex-1 bg-white py-4"
        style={{ paddingBottom: bottom + 16 }}
      >
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

          <PresentTypeList />

          <View className="mt-10">
            <TouchableOpacity
              onPress={handleSave}
              className="bg-orange-500 px-4 h-12 rounded-full justify-center items-center"
            >
              <Text className="font-medium text-sm text-white">Simpan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
