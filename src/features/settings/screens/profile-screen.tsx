import { Icon } from "@/src/components";
import { Cards } from "@/src/features/settings/components";
import { ProfileMenu } from "@/src/features/settings/components/profile-menu";
import { UserProfile } from "@/src/types";
import { getUserProfile } from "@/src/utils";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { SystemBars } from "react-native-edge-to-edge";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {}

export const ProfileScreen: React.FC<Props> = () => {
  const { top } = useSafeAreaInsets();
  const [profile, setProfile] = useState<UserProfile>();

  useEffect(() => {
    async function getProfile() {
      const userProfile = await getUserProfile();
      if (!userProfile) return;

      const userProfileParsed = JSON.parse(userProfile);

      setProfile(userProfileParsed);
    }

    getProfile();
  }, []);

  return (
    <>
      <SystemBars style={"dark"} />
      <View className="flex-1 bg-gray-50" style={{ paddingTop: top }}>
        <View className="flex-row justify-between p-4">
          <View className="gap-1">
            <Text className="text-lg font-semibold text-gray-800">
              Hai, {profile?.name}
            </Text>
            <View className="bg-gray-200 rounded-lg px-1.5 py-0.5">
              <Text className="text-gray-600 text-xs">
                NIK Belum Terverifikasi
              </Text>
            </View>
          </View>

          <View className="border-2 border-green-600 rounded-full shadow-2xl shadow-red-800">
            <Image
              className="w-14 h-14 rounded-full"
              source={{ uri: profile?.img }}
            />
            <View className="bg-white absolute p-0.5 rounded-full bottom-1 -right-1.5 shadow-xl">
              <Icon name="edit_fill" size={14} />
            </View>
          </View>
        </View>

        <Cards />

        <ProfileMenu />
      </View>
    </>
  );
};
