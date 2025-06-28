import { PostScreen } from "@/src/features";
import { useLocalSearchParams } from "expo-router";

export default function Post() {
  const { filePath } = useLocalSearchParams();

  return <PostScreen filePath={filePath as string} />;
}
