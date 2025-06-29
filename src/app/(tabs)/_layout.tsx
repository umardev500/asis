import { Icon } from "@/src/components";
import { colors } from "@/src/styles";
import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.orange[500],
        tabBarButton: (props) => (
          <TouchableOpacity {...props} activeOpacity={0.8} />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "home_fill" : "home"}
              size={24}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "Presensi",
          tabBarIcon: ({ color }) => (
            <Icon name="history" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "setting_fill" : "setting"}
              size={24}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
