import { Icon } from "@/src/components";
import { colors } from "@/src/styles";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {}

export const ProfileMenu: React.FC<Props> = () => {
  const router = useRouter();

  const navigateToPresensi = () => {
    router.navigate("/(tabs)/history");
  };

  return (
    <View className="mt-6">
      <View className="bg-white">
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.7}
          className="px-4 flex-row items-center"
        >
          <View className="w-10">
            <Icon name="setting_fill" size={24} color={colors.gray[600]} />
          </View>
          <View className="flex-row items-center gap-2 border-b border-b-gray-100 h-12 flex-1 justify-between">
            <Text className="text-sm text-gray-800">Pengaturan</Text>
            <Icon name="chevron_right" size={24} color={colors.gray[600]} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.7}
          className="px-4 flex-row items-center"
        >
          <View className="w-10">
            <Icon
              name="deployed_code_update"
              size={24}
              color={colors.gray[600]}
            />
          </View>
          <View className="flex-row items-center gap-2 border-b border-b-gray-100 h-12 flex-1 justify-between">
            <Text className="text-sm text-gray-800">Tentang Aplikasi</Text>
            <Icon name="chevron_right" size={24} color={colors.gray[600]} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigateToPresensi}
          activeOpacity={0.7}
          className="px-4 flex-row items-center"
        >
          <View className="w-10">
            <Icon name="search_activity" size={24} color={colors.gray[600]} />
          </View>
          <View className="flex-row items-center gap-2 border-b border-b-gray-100 h-12 flex-1 justify-between">
            <Text className="text-sm text-gray-800">Presensi</Text>
            <Icon name="chevron_right" size={24} color={colors.gray[600]} />
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={0.7}
        className="bg-white mt-4"
      >
        <View className="px-4 flex-row items-center">
          <View className="w-10">
            <Icon name="logout" size={24} color={colors.gray[600]} />
          </View>
          <View className="flex-row items-center gap-2 border-b border-b-gray-100 h-12 flex-1 justify-between">
            <Text className="text-sm text-red-800">Keluar</Text>
            <Icon name="chevron_right" size={24} color={colors.gray[600]} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
