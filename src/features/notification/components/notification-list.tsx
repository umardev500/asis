import { NotificationListing } from "@/src/features/notification/components/notification-listing";
import { Notification as NotificationType } from "@/src/types";
import React from "react";
import { FlatList, ListRenderItem } from "react-native";

interface Props {}

const notifications: NotificationType[] = [
  {
    id: "1",
    title: "Welcome!",
    message: "Thanks for joining our app. Let’s get started!",
    timestamp: "2025-07-16T08:45:00Z",
    icon: "notification",
  },
  {
    id: "2",
    title: "Update Available",
    message: "Version 2.1 is now live. Update to get the latest features!",
    timestamp: "2025-07-15T16:20:00Z",
    icon: "history",
  },
  {
    id: "3",
    title: "Weekly Summary",
    message: "You were active for 5 days this week. Great job!",
    timestamp: "2025-07-14T12:10:00Z",
    icon: "sunny",
  },
  {
    id: "4",
    title: "New Feature: Dark Mode",
    message: "Dark mode is here! Enable it in your settings.",
    timestamp: "2025-07-13T10:00:00Z",
    icon: "bedtime",
  },
  {
    id: "5",
    title: "Reminder",
    message: "Don’t forget to complete your profile for better suggestions.",
    timestamp: "2025-07-12T09:30:00Z",
    icon: "favorite",
  },
];

export const NotificationList: React.FC<Props> = () => {
  const data = notifications;

  const renderItem: ListRenderItem<NotificationType> = ({ item }) => (
    <NotificationListing item={item} />
  );

  return <FlatList data={data} renderItem={renderItem} />;
};
