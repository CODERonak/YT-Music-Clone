import { View, Text, Image, Pressable, FlatList } from 'react-native'
import React from 'react'

const BCardio = () => {

    const songs = [
        {
            id: 1,
            name: "Sultan",
            artists: "Sukhwinder Singh",
            image: "https://bucthfjkxohgkfhnervm.supabase.co/storage/v1/object/sign/YT%20Music%20Clone%20Bucktet/Images/Sultan.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJZVCBNdXNpYyBDbG9uZSBCdWNrdGV0L0ltYWdlcy9TdWx0YW4uanBnIiwiaWF0IjoxNzM4OTE5MzY0LCJleHAiOjE3NzA0NTUzNjR9.4e4SgMrhh1sJINcI3znawMcSXNiqWsR5U1q9Z71b0I4"
        },

        {
            id: 2,
            name: "Zinda",
            artists: "Siddharth Mahadevan",
            image: "https://bucthfjkxohgkfhnervm.supabase.co/storage/v1/object/sign/YT%20Music%20Clone%20Bucktet/Images/Zinda.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJZVCBNdXNpYyBDbG9uZSBCdWNrdGV0L0ltYWdlcy9aaW5kYS5qcGciLCJpYXQiOjE3Mzg5MTk1MzUsImV4cCI6MTc3MDQ1NTUzNX0.OyvwAN1nVo0ZyazvCtJbyBtNr3ZwYmbPwlc_Oatfc4k"
        },

        {
            id: 3,
            name: "Pushpa Pushpa",
            artists: "Mika Singh",
            image: "https://bucthfjkxohgkfhnervm.supabase.co/storage/v1/object/sign/YT%20Music%20Clone%20Bucktet/Images/Pushpa.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJZVCBNdXNpYyBDbG9uZSBCdWNrdGV0L0ltYWdlcy9QdXNocGEuanBnIiwiaWF0IjoxNzM4OTE5NjU5LCJleHAiOjE3NzA0NTU2NTl9.VPsMMN1kyBNwbruiVo9PA4x8sjUJKPy2PAyU8toYrXE"
        }
    ]

    return (
        // main conatainer
        <View className='mt-32 justify-center items-center'>
            {/* All the details about the component */}
            <View className='bg-blue-800/30 p-4 rounded-lg h-auto w-auto overflow-hidden'>

                {/* image and name */}
                <View className='flex flex-row items-center'>
                    {/* image */}
                    <View className='mr-4'>
                        <Image
                            source={{ uri: "https://www.pinkvilla.com/images/2023-11/1701150800_shah-rukh-khan.jpg" }}

                            className='h-28 w-28 rounded-md'
                        />
                    </View>

                    {/* texts */}
                    <View className=''>
                        <Text className='text-2xl text-white font-bold'>Bollywood Cardio</Text>
                        <Text className='text-xl text-gray-400'>Youtube Music</Text>
                        <Text className='text-3l text-gray-400'>65 songs</Text>
                    </View>
                </View>

                {/* description */}
                <View className='mt-4 w-96'>
                    <Text className='text-gray-400 text-l '>Hit the gym with these Bollywood numbers to keep the tempo high and your cardio extreme.</Text>
                </View>

                {/* Few songs */}
                <View className='mt-4'>
                    {/* for rendering few songs */}
                    <FlatList
                        data={songs}
                        renderItem={({ item }) => {
                            return (
                                // used the Pressable component to make the song item pressable
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
                                        <Text className='text-gray-400 text-sm '>{item.artists}</Text>
                                    </View>
                                </Pressable>
                            )
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

export default BCardio