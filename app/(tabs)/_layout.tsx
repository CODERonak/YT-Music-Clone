import React from "react";
import { Tabs } from "expo-router";
// import "@/global.css";

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#1d1d1d',
                    height: 50,
                    borderTopWidth: 0,
                },

                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
            }}
        >
            <Tabs.Screen name="index" options={{ headerShown: false }} />
            <Tabs.Screen name="Samples" options={{ headerShown: false }} />
            <Tabs.Screen name="Explore" options={{ headerShown: false }} />
            <Tabs.Screen name="Library" options={{ headerShown: false }} />
        </Tabs>
    )
}

export default TabLayout