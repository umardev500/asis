import { Icon } from "@/src/components/atoms";
import { colors } from "@/src/styles";
import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

interface Props {
  gap: number;
  spaceX: number;
}

export const CatalogListing: React.FC<Props> = (props) => {
  const { gap, spaceX } = props;

  const { width } = useWindowDimensions();

  const itemWidth = width / 2 - spaceX - gap / 2;

  return (
    <View
      className="overflow-hidden rounded-xl bg-white border border-gray-100"
      style={{ width: itemWidth }}
    >
      <Image
        className="w-full h-32"
        source={require("@/assets/images/product-8.png")}
      />

      <View className="p-2">
        <Text className="text-sm text-gray-800">Cheese Burger</Text>
        <View className="flex-row items-center justify-between">
          <Text className="text-sm font-medium text-gray-800">Rp 35.000</Text>
          <TouchableOpacity
            className="flex-row items-center gap-1"
            onPress={() => {}}
          >
            <Icon name="finance_mode" size={16} color={colors.green[500]} />
            <Text className="text-xs text-gray-500">5</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
