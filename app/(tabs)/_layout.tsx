import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        redirect={true}
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="moviesScreen"
        options={{ title: "Movies", headerShown: true }}
      />
      <Tabs.Screen
        name="searchScreen"
        options={{ title: "Search", headerShown: true }}
      />
      <Tabs.Screen
        name="tvsScreen"
        options={{ title: "TVs", headerShown: true }}
      />
    </Tabs>
  );
}
