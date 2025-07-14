import { HistoryListing } from "@/src/components/molecules";
import { useGetPresents } from "@/src/hooks";
import { PresensiRecord } from "@/src/types";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  Text,
  View,
} from "react-native";

interface Props {
  listHeaderComponent?: React.ReactElement;
}

export const HistoryList: React.FC<Props> = ({ listHeaderComponent }) => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetPresents();

  const renderColumn: ListRenderItem<PresensiRecord> = ({ item }) => {
    return <HistoryListing item={item} />;
  };

  const handleEndReached = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  // ✅ Flatten only the PresensiRecord[]:
  const records: PresensiRecord[] =
    data?.pages.flatMap((page) => page.data.data.data) ?? [];

  return (
    <>
      {!data ? (
        <View className="flex-1 items-center justify-center">
          <Text>Loading...</Text>
        </View>
      ) : (
        <View className="flex-1">
          <FlatList
            onEndReached={handleEndReached}
            ListHeaderComponent={listHeaderComponent}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingVertical: 16,
            }}
            data={records || []}
            renderItem={renderColumn}
            keyExtractor={(item, index) =>
              `${item.id}_${item.created_at}_${index}`
            }
            ListFooterComponent={
              isFetchingNextPage ? (
                <ActivityIndicator size={"large"} color={"#6b56f4"} />
              ) : null
            }
          />
        </View>
      )}
    </>
  );
};
