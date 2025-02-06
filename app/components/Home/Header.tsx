import { View, Text, Image, Pressable, FlatList } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Categories from '@/Data/Categories';

// Header component
const Header = () => {
    return (
        // Main Header container
        <View>
            {/* Header container  */}
            <View className='flex flex-row items-center justify-center'>

                {/* YT Music logo */}
                <View className='ml-4 w-1/2'>

                    {/* YT Music img */}
                    <Image
                        source={require("@/assets/images/YTMusic.png")}
                        className='w-28 h-12'
                    />
                </View>

                {/* Icons and Profile Button */}
                <View className='w-1/2 flex flex-row justify-end'>
                    {/* notifications icon */}
                    <Pressable
                        className='ml-4'
                        android_ripple={{ color: 'rgba(0, 0, 0, 0.2)', foreground: true }}
                    >
                        <Ionicons name="notifications-outline" size={24} color="white" />
                    </Pressable>

                    {/* search icon */}
                    <Pressable
                        className='ml-4'
                        android_ripple={{ color: 'rgba(0, 0, 0, 0.2)', foreground: true }}
                    >
                        <Ionicons name="search-outline" size={24} color="white" />
                    </Pressable>

                    {/* profile pic */}
                    <Pressable
                        className='ml-4'
                        android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', foreground: true }}
                    >
                        <Image
                            source={require("@/assets/images/profile.jpg")}
                            className='h-8 w-8 rounded-full mr-4'
                        />
                    </Pressable>
                </View>

            </View>

            {/* FlatList for rendering horizontal categories */}
            <FlatList
                data={Categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View className='mt-6'>
                        {/* for making it a button */}
                        <Pressable
                            className='bg-[#303642] px-4 py-2 mx-2 rounded-lg'
                            android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', foreground: true }}
                        >
                            <Text className='text-white text-xl font-bold'>{item.name}</Text>
                        </Pressable>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

export default Header;