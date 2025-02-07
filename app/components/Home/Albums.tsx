import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import AlbumsData from '@/Data/AlbumsData'

const Albums = () => {
    return (
        // main container
        <View className='mt-8 ml-6 '>
            {/* Heading */}
            <View className=''>
                <Text className='text-white text-2xl font-bold mb-4'>Albums for you</Text>
            </View>

            {/* FlatList for rendering albums */}
            <FlatList
                data={AlbumsData}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()} // Assuming `id` exists in each album data
                renderItem={({ item }) => {
                    return (
                        // to make the album item a button
                        <Pressable className='ml-4' android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', foreground: true }}>
                            {/* Album image */}
                            <Image
                                source={{ uri: item.image }}
                                className='h-48 w-48 rounded-md'
                            />
                            {/* Album name */}
                            <Text className='text-white text-lg font-bold mt-2'>
                                {item.name}
                            </Text>

                            {/* Album artists */}
                            <Text className='text-gray-400 text-l'>
                                {item.artists}
                            </Text>
                        </Pressable>
                    )
                }}
            />
        </View>
    )
}

export default Albums