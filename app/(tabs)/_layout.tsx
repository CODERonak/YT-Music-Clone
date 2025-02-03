import React from "react";
import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// icons

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#1d1d1d',
                    height: 60,
                    borderTopWidth: 0,
                },

                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                tabBarLabelStyle: {
                    marginTop: 5
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'home-sharp' : 'home-outline'} size={size} color={color} />,
                    tabBarLabel: 'Home'
                }}
            />

            <Tabs.Screen
                name="Samples"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'play-sharp' : 'play-outline'} size={size} color={color} />,
                }}
            />

            <Tabs.Screen
                name="Explore"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'compass-sharp' : 'compass-outline'} size={size} color={color} />
                }}
            />

            <Tabs.Screen
                name="Library"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => <MaterialCommunityIcons name={focused ? 'music-box-multiple' : 'music-box-multiple-outline'} size={size} color={color} />

                }}
            />
            
        </Tabs>
    )
}

export default TabLayout