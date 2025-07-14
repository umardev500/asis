import { Header } from "@/src/components";
import { PresentTypeList } from "@/src/features/present/components/present-type-list";
import { useSavePresent } from "@/src/hooks";
import { usePresentStore } from "@/src/store";
import { SavePresentPayload } from "@/src/types";
import * as Device from "expo-device";
import { useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SystemBars } from "react-native-edge-to-edge";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  filePath: string;
}

export const PostScreen: React.FC<Props> = ({ filePath }) => {
  const photoPath = `file://${filePath}`;
  const store = usePresentStore((state) => state);
  const { mutate, isPending, isSuccess, data, error } = useSavePresent();
  const router = useRouter();

  const { top, bottom } = useSafeAreaInsets();

  const handleSave = () => {
    if (store.coordinates === undefined || store.presentType === undefined) {
      Alert.alert("Incomplete Data", "Lengkapi data terlebih dahulu", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);

      return;
    }

    const payload: SavePresentPayload = {
      brand: Device.brand || "",
      deviceid: Device.deviceName || "",
      model: Device.modelName || "",
      uniqueid: Device.osBuildId || "",
      latitude: store.coordinates.latitude || 0,
      longitude: store.coordinates.longitude || 0,
      fake: false,
      waktu: store.presentType,
      image: "https://example.com/image.jpg",
    };

    mutate(payload, {
      onSuccess: (data) => {
        // Alert.alert("Success", data.message);
        Alert.alert("Success", "Data berhasil disimpan", [
          {
            text: "Cancel",
            style: "cancel",
            onPress: () => router.replace("/(tabs)/history"),
          },
          {
            text: "OK",
            onPress: () => router.replace("/(tabs)/history"),
          },
        ]);
      },
      onError: (error) => {
        Alert.alert("Error", error.message);
      },
    });
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
              className="bg-primary-500 px-4 h-12 rounded-full justify-center items-center"
            >
              {isPending ? (
                <ActivityIndicator color={"white"} />
              ) : (
                <Text className="font-medium text-sm text-white">Simpan</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
