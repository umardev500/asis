import { HistoryListing } from "@/src/components/molecules";
import React from "react";
import { FlatList } from "react-native";

interface Props {}

export const HistoryList: React.FC<Props> = () => {
  const renderColumn = () => {
    return <HistoryListing />;
  };

  return (
    <FlatList
      contentContainerStyle={{ paddingHorizontal: 16 }}
      data={[1, 2]}
      renderItem={renderColumn}
    />
  );
};
