import { CatalogListing } from "@/src/components/molecules";
import React from "react";
import { FlatList } from "react-native";

interface Props {
  scrollEnabled?: boolean;
}

export const CatalogList: React.FC<Props> = ({ scrollEnabled = true }) => {
  const renderItem = () => {
    return <CatalogListing gap={16} spaceX={16} />;
  };

  return (
    <FlatList
      scrollEnabled={scrollEnabled}
      numColumns={2}
      columnWrapperStyle={{ gap: 16, marginBottom: 16 }}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      data={[1, 2, 3, 4, 5]}
      renderItem={renderItem}
    />
  );
};
