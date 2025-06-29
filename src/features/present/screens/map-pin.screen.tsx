import { usePresentStore } from "@/src/store";
import * as Location from "expo-location";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import AnimatedMapRegion from "react-native-maps/lib/AnimatedRegion";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const INDONESIA_REGION = {
  latitude: -6.2, // Jakarta approx.
  longitude: 106.816666, // Jakarta approx.
  latitudeDelta: 5, // Big enough to show more area
  longitudeDelta: 5,
};

interface Props {}

export const MapPinScreen: React.FC<Props> = () => {
  const router = useRouter();
  const { bottom } = useSafeAreaInsets();
  const store = usePresentStore((state) => state);
  const [region, setRegion] = useState<Region | AnimatedMapRegion>();
  const mapRef = useRef<MapView | null>(null);
  const setCoordinates = usePresentStore((state) => state.setCoordinates);

  const handleSave = () => {
    store.setCoordinates(106.8456, -6.2088);

    router.navigate("/present/take-pic");
  };

  const _onMapReady = async () => {
    console.log("Map is ready!");
    try {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Permission to access location was denied. Please enable it in settings.",
          [
            { text: "Cancel", style: "cancel" },
            { text: "Open Settings", onPress: () => Linking.openSettings() },
          ]
        );
        return;
      }

      // Try last known position
      const lastKnown = await Location.getLastKnownPositionAsync();
      if (lastKnown) {
        setRegion({
          latitude: lastKnown.coords.latitude,
          longitude: lastKnown.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      }

      // Start watching for better updates
      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Highest,
          timeInterval: 2000, // Min 2 sec between updates
          distanceInterval: 5, // Or every 5 meters
        },
        (loc) => {
          setCoordinates(loc.coords.longitude, loc.coords.latitude);

          const newRegion = {
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          };

          // Animate the map view
          if (mapRef.current) {
            mapRef.current.animateToRegion(newRegion, 1000); // 1 second
          }

          // Update your state too, if you need it for markers etc.
          setRegion(newRegion);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1">
        <MapView
          ref={mapRef}
          onMapReady={_onMapReady}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: region?.latitude ?? INDONESIA_REGION.latitude,
            longitude: region?.longitude ?? INDONESIA_REGION.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: region?.latitude ?? 0,
              longitude: region?.longitude ?? 0,
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
          disabled={region === undefined}
          onPress={handleSave}
          className="bg-orange-500 flex-1 px-4 h-12 items-center justify-center rounded-full"
        >
          <Text className="font-medium text-sm text-white">
            {region === undefined ? "Loading..." : "Selanjutnya"}
          </Text>
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
