import { Icon } from "@/src/components";
import { colors } from "@/src/styles";
import React from "react";
import { Image, Text, View } from "react-native";

interface Props {}

export const Cards: React.FC<Props> = () => {
  return (
    <View className="flex-row px-4 gap-2 mt-4">
      <View className="flex-1 flex-row gap-3 bg-white shadow-lg shadow-gray-500 py-4 px-2 rounded-xl">
        <View className="flex-1 gap-0.5">
          <View className="flex-row items-center gap-2">
            <Image
              className="w-5 h-5 mt-0.5"
              source={require("@/assets/images/verified.png")}
            />
            <Text className="text-sm font-medium">Verifikasi NIK</Text>
          </View>
          <View className="flex-row items-center gap-2 justify-between pl-7 pr-1">
            <Text className="text-xs text-gray-500">Ajukan sekarang</Text>
            <Icon name="chevron_right" size={18} color={colors.gray[500]} />
          </View>
        </View>
      </View>
      <View className="flex-1 flex-row gap-3 bg-white shadow-lg shadow-gray-500 py-4 px-2 rounded-xl">
        <View className="flex-1 gap-0.5">
          <View className="flex-row items-center gap-2">
            <Image
              className="w-5 h-5 mt-0.5"
              source={require("@/assets/images/star-circle.png")}
            />
            <Text className="text-sm font-medium">Akun Warga</Text>
          </View>
          <View className="flex-row items-center gap-2 justify-between pl-7 pr-1">
            <Text className="text-xs text-gray-500">Lihat akun</Text>
            <Icon name="chevron_right" size={18} color={colors.gray[500]} />
          </View>
        </View>
      </View>
    </View>
  );
};
