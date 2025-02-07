import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import QuickPickSongs from '@/Data/QuickPicksSongs'

const QuickPicks = () => {

    // for rendering the songs details
    const renderItem = ({ item }) => {
        return (
            // for making the song item a pressable
            <Pressable
                android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', foreground: true, }}
                className='flex flex-row items-center p-2 rounded-md w-96 overflow-hidden'>
                {/* song image */}
                <View>
                    <Image
                        source={{ uri: item.image }}
                        className='h-16 w-16 rounded-md'
                    />
                </View>

                {/* song name and artists */}
                <View className='ml-4'>
                    <Text className='text-white text-l font-bold'>{item.name}</Text>
                    <Text className='text-gray-400 text-sm '>{item.artist}</Text>
                </View>
            </Pressable>

        )
    }

    return (
        // main container
        <View className='mt-10 ml-6'>
            {/* Heading */}
            <View>
                <Text className='text-white text-2xl font-bold mb-4'>Quick Picks</Text>
            </View>

            {/* songs */}
            <FlatList
                data={QuickPickSongs}
                renderItem={renderItem}
            />

        </View>
    )
}

export default QuickPicks