import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

const ExploreComp = () => {
    return (
        <View className='mt-10 ml-6'>
            {/* Heading */}
            <View>
                <Text className='text-white text-2xl font-bold mb-4'>Explore</Text>
            </View>

            {/* Explore content */}
            <View className='flex flex-row flex-wrap justify-center '>
                <Pressable
                    className='bg-[#1d1d1d] p-4 mr-4 mb-4 h-auto w-[44%] rounded-md'
                    android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', foreground: true, }}
                >
                    <Ionicons name="musical-note" size={24} color="white" />
                    <Text className='font-bold text-white text-2lg mt-4'>New releases</Text>
                </Pressable>

                <Pressable
                    className='bg-[#1d1d1d] p-4 mr-4 mb-4 h-auto w-[44%] rounded-md'
                    android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', foreground: true, }}
                >
                    <MaterialCommunityIcons name="chart-line-variant" size={24} color="white" />
                    <Text className='font-bold text-white text-2lg mt-4'>Charts</Text>
                </Pressable>

                <Pressable
                    className='bg-[#1d1d1d] p-4 mr-4 mb-4 h-auto w-[44%] rounded-md'
                    android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', foreground: true, }}
                >
                    <Entypo name="emoji-happy" size={24} color="white" />
                    <Text className='font-bold text-white text-2lg mt-4'>Mood & genres</Text>
                </Pressable>

                <Pressable
                    className='bg-[#1d1d1d] p-4 mr-4 mb-4 h-auto w-[44%] rounded-md'
                    android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', foreground: true, }}
                >
                    <MaterialCommunityIcons name="podcast" size={24} color="white" />
                    <Text className='font-bold text-white text-2lg mt-4'>Podcasts</Text>
                </Pressable>
            </View>


        </View>
    )
}

export default ExploreComp