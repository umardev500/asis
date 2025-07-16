import { IconName } from "@/src/components";

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  icon?: IconName;
}
