import { HistoryListing } from "@/src/components/molecules";
import { useGetPresents } from "@/src/hooks";
import { PresensiRecord } from "@/src/types";
import React from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  listHeaderComponent?: React.ReactElement;
}

export const HistoryList: React.FC<Props> = ({ listHeaderComponent }) => {
  const { bottom } = useSafeAreaInsets();

  const { data, isPending, isError, error } = useGetPresents(2);

  const renderColumn: ListRenderItem<PresensiRecord> = ({ item }) => {
    return <HistoryListing item={item} />;
  };

  return (
    <>
      {!data ? (
        <View className="flex-1 items-center justify-center">
          <Text>Loading...</Text>
        </View>
      ) : (
        <View className="flex-1" style={{ paddingBottom: bottom }}>
          <FlatList
            ListHeaderComponent={listHeaderComponent}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingVertical: 16,
            }}
            data={data?.data.data || []}
            renderItem={renderColumn}
          />
        </View>
      )}
    </>
  );
};
