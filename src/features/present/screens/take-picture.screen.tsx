import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SystemBars } from "react-native-edge-to-edge";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera";

interface Props {}

export const TakePictureScreen: React.FC<Props> = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice("back");
  const camera = useRef<Camera>(null);
  const { bottom } = useSafeAreaInsets();
  const router = useRouter();

  useEffect(() => {
    const reqCameraPermission = async () => {
      try {
        await reqCameraPermission();
        console.log("Permission request done");
      } catch (err) {
        console.log(err);
      }
    };

    if (!hasPermission) {
      requestPermission();
    }
  }, []);

  if (!hasPermission || device === undefined) return null;

  const takePhoto = async () => {
    if (camera.current === null) return;
    try {
      const photo = await camera.current.takePhoto();
      router.push({
        pathname: "/present/post",
        params: {
          filePath: photo.path,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <SystemBars style={"light"} />
      <View className="flex-1">
        <Camera
          ref={camera}
          photo
          style={StyleSheet.absoluteFill}
          device={device}
          isActive
        />

        <View
          className="w-full absolute z-50 flex-row justify-center"
          style={{ bottom: bottom + 24 }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => takePhoto()}
            className="w-14 h-14 bg-white rounded-full"
          />
        </View>
      </View>
    </>
  );
};
