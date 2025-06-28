import { usePresentStore } from "@/src/store";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {}

export const MapPinScreen: React.FC<Props> = () => {
  const router = useRouter();
  const { bottom } = useSafeAreaInsets();
  const store = usePresentStore((state) => state);

  const handleSave = () => {
    store.setCoordinates(106.8456, -6.2088);

    router.navigate("/present/take-pic");
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1">
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: -6.2088,
            longitude: 106.8456,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title="My Location"
            description="This is a marker in San Francisco"
          />
        </MapView>
      </View>

      <View
        className="bottom-0 w-full bg-white py-4 justify-center items-center flex-row px-4"
        style={{ paddingBottom: bottom }}
      >
        <TouchableOpacity
          onPress={handleSave}
          className="bg-orange-500 flex-1 px-4 h-12 items-center justify-center rounded-full"
        >
          <Text className="font-medium text-sm text-white">Selanjutnya</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
