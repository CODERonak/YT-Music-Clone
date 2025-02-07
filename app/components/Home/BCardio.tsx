import { View, Text, Image, Pressable, FlatList } from 'react-native'
import React from 'react'

const BCardio = () => {
    const songs = [
        {
            id: "1",
            name: "Sultan",
            artists: "Sukhwinder Singh",
            image: "https://bucthfjkxohgkfhnervm.supabase.co/storage/v1/object/sign/YT%20Music%20Clone%20Bucktet/Images/Sultan.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJZVCBNdXNpYyBDbG9uZSBCdWNrdGV0L0ltYWdlcy9TdWx0YW4uanBnIiwiaWF0IjoxNzM4OTE5MzY0LCJleHAiOjE3NzA0NTUzNjR9.4e4SgMrhh1sJINcI3znawMcSXNiqWsR5U1q9Z71b0I4"
        },
        {
            id: "2",
            name: "Zinda",
            artists: "Siddharth Mahadevan",
            image: "https://bucthfjkxohgkfhnervm.supabase.co/storage/v1/object/sign/YT%20Music%20Clone%20Bucktet/Images/Zinda.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJZVCBNdXNpYyBDbG9uZSBCdWNrdGV0L0ltYWdlcy9aaW5kYS5qcGciLCJpYXQiOjE3Mzg5MTk1MzUsImV4cCI6MTc3MDQ1NTUzNX0.OyvwAN1nVo0ZyazvCtJbyBtNr3ZwYmbPwlc_Oatfc4k"
        },
        {
            id: "3",
            name: "Pushpa Pushpa",
            artists: "Mika Singh",
            image: "https://bucthfjkxohgkfhnervm.supabase.co/storage/v1/object/sign/YT%20Music%20Clone%20Bucktet/Images/Pushpa.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJZVCBNdXNpYyBDbG9uZSBCdWNrdGV0L0ltYWdlcy9QdXNocGEuanBnIiwiaWF0IjoxNzM4OTE5NjU5LCJleHAiOjE3NzA0NTU2NTl9.VPsMMN1kyBNwbruiVo9PA4x8sjUJKPy2PAyU8toYrXE"
        }
    ]

    return (
        <View className="mt-8 items-center">
            {/* Main Container */}
            <View className="bg-blue-800/30 p-4 rounded-xl max-h-[365px] max-w-[400px]">
                
                {/* Image & Title */}
                <View className="flex-row items-center">
                    {/* Playlist Image */}
                    <Image
                        source={{ uri: "https://www.pinkvilla.com/images/2023-11/1701150800_shah-rukh-khan.jpg" }}
                        className="h-24 w-24 rounded-md"
                    />

                    {/* Playlist Details */}
                    <View className="ml-4 flex-1">
                        <Text className="text-xl text-white font-bold">Bollywood Cardio</Text>
                        <Text className="text-sm text-gray-400">Youtube Music</Text>
                        <Text className="text-sm text-gray-400">65 songs</Text>
                    </View>
                </View>

                {/* Description */}
                <Text className="text-gray-400 text-sm mt-4">
                    Hit the gym with these Bollywood numbers to keep the tempo high and your cardio extreme.
                </Text>

                {/* Songs List */}
                <View className='mt-4'>

                <FlatList
                    data={songs}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Pressable
                            android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', foreground: true }}
                            className="flex-row items-center p-2 rounded-md overflow-hidden"
                        >
                            {/* Song Image */}
                            <Image
                                source={{ uri: item.image }}
                                className="h-14 w-14 rounded-md"
                            />

                            {/* Song Details */}
                            <View className="ml-3">
                                <Text className="text-white text-sm font-bold">{item.name}</Text>
                                <Text className="text-gray-400 text-xs">{item.artists}</Text>
                            </View>
                        </Pressable>
                    )}
                    scrollEnabled={false}
                   
                />
                </View>
            </View>
        </View>
    )
}

export default BCardio
