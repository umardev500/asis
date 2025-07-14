import { usePresentStore } from "@/src/store";
import * as Location from "expo-location";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
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

const HeartbeatDot = ({
  coordinate,
}: {
  coordinate: { latitude: number; longitude: number };
}) => {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(scale, {
            toValue: 2,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 1,
            duration: 0,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 0,
            useNativeDriver: true,
          }),
        ]),
      ])
    );
    pulse.start();

    return () => pulse.stop();
  }, []);

  return (
    <Marker coordinate={coordinate} anchor={{ x: 0.5, y: 0.5 }}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.pulse,
            {
              transform: [{ scale }],
              opacity,
            },
          ]}
        />
        <View style={styles.dot} />
      </View>
    </Marker>
  );
};

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
          {region && (
            <HeartbeatDot
              coordinate={{
                latitude: region.latitude,
                longitude: region.longitude,
              }}
            />
          )}
        </MapView>
      </View>

      <View
        className="bottom-0 w-full bg-white py-4 justify-center items-center flex-row px-4"
        style={{ paddingBottom: bottom }}
      >
        <TouchableOpacity
          disabled={region === undefined}
          onPress={handleSave}
          className="bg-primary-500 flex-1 px-4 h-12 items-center justify-center rounded-full"
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
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "dodgerblue",
    borderWidth: 2,
    borderColor: "#fff",
  },
  container: {
    width: 40, // big enough for max scale (40 * 2)
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  pulse: {
    position: "absolute",
    width: 20, // base pulse size
    height: 20,
    borderRadius: 20,
    backgroundColor: "rgba(0, 122, 255, 0.3)",
  },
});
