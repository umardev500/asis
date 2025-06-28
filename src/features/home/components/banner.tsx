import { Icon } from "@/src/components";
import { colors } from "@/src/styles";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {}

export const Banner: React.FC<Props> = () => {
  const router = useRouter();

  return (
    <View>
      <Image
        className="h-[200px] w-full"
        source={require("@/assets/images/banner.png")}
      />

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => router.navigate("/present/history")}
      >
        <View className="bg-white border border-gray-200 -mt-6 shadow mx-6 flex-row items-center gap-2.5 px-4 h-12 rounded-full">
          <Icon name="search" size={20} color={colors.gray[800]} />
          <Text className="text-sm text-gray-800">Cari layanan di Jaki</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
