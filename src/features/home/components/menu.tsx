import { Icon } from "@/src/components";
import React from "react";
import { Text, View } from "react-native";

interface Props {}

export const Menu: React.FC<Props> = () => {
  return (
    <>
      <View className="flex-row gap-2 py-6 px-4">
        <View className="items-center flex-1 gap-2">
          <View className="w-12 h-12 bg-orange-100 items-center justify-center rounded-2xl">
            <Icon name="deployed_code_update" size={24} />
          </View>
          <Text className="text-xs text-gray-800 font-medium">
            Laporan Warga
          </Text>
        </View>
        <View className="items-center flex-1 gap-2">
          <View className="w-12 h-12 bg-orange-100 items-center justify-center rounded-2xl">
            <Icon name="receipt" size={24} />
          </View>
          <Text className="text-xs text-gray-800 font-medium">Berita</Text>
        </View>
        <View className="items-center flex-1 gap-2">
          <View className="w-12 h-12 bg-orange-100 items-center justify-center rounded-2xl">
            <Icon name="finance_mode" size={24} />
          </View>
          <Text className="text-xs text-gray-800 font-medium">Pajak</Text>
        </View>
        <View className="items-center flex-1 gap-2">
          <View className="w-12 h-12 bg-orange-100 items-center justify-center rounded-2xl">
            <Icon name="attch_money" size={24} />
          </View>
          <Text className="text-xs text-gray-800 font-medium">
            Harga Pangan
          </Text>
        </View>
      </View>
      <View className="flex-row gap-2 px-4 mb-6">
        <View className="items-center flex-1 gap-2">
          <View className="w-12 h-12 bg-orange-100 items-center justify-center rounded-2xl">
            <Icon name="deployed_code_update" size={24} />
          </View>
          <Text className="text-xs text-gray-800 font-medium">
            Transportasi
          </Text>
        </View>
        <View className="items-center flex-1 gap-2">
          <View className="w-12 h-12 bg-orange-100 items-center justify-center rounded-2xl">
            <Icon name="sunny" size={24} />
          </View>
          <Text className="text-xs text-gray-800 font-medium">
            Kualitas Udara
          </Text>
        </View>
        <View className="items-center flex-1 gap-2">
          <View className="w-12 h-12 bg-orange-100 items-center justify-center rounded-2xl">
            <Icon name="add" size={24} />
          </View>
          <Text className="text-xs text-gray-800 font-medium">Ambulans</Text>
        </View>
        <View className="items-center flex-1 gap-2">
          <View className="w-12 h-12 bg-orange-100 items-center justify-center rounded-2xl">
            <Icon name="more_horiz" size={24} />
          </View>
          <Text className="text-xs text-gray-800 font-medium">Semua</Text>
        </View>
      </View>
    </>
  );
};
