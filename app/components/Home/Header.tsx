import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

// Header component
const Header = () => {
    return (
        // Header container 
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
            <View className='w-1/2 flex flex-row justify-end '>
                {/* notifications icon */}
                <Pressable className='ml-4'>
                    <Ionicons name="notifications-outline" size={24} color="white" />
                </Pressable>

                {/* search icon */}
                <Pressable className='ml-4'>
                    <Ionicons name="search-outline" size={24} color="white" />
                </Pressable>

                {/* profile pic */}
                <Pressable className='ml-4'>
                    <Image
                        source={require("@/assets/images/profile.jpg")}
                        className='h-8 w-8 rounded-full mr-4'
                    />
                </Pressable>
            </View>
        </View>
    );
}

export default Header;