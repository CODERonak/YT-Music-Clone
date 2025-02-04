import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/app/components/Home/Header'

// Home screen
const index = () => {
    return (
        // background color
        <View className='bg-black h-full'>
            {/* Main container */}
                <Header />
        </View>
    )
}

export default index